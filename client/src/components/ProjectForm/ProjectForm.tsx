import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { clearDraft, loadDraft, saveDraft, type ProjectDraft } from './projectDraft';
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '../../data/contact';
import {
  ProgressRow, ProgressTrack, ProgressDot, ProgressCount,
  StepPanel, Question, Hint, ErrorText,
  TextInput, TextArea, FollowUp, FollowUpLabel,
  ChoiceGrid, Choice,
  Actions, PrimaryButton, SecondaryButton, Fallback,
  DoneTitle, DoneBody, Loader,
  type StepMotion,
} from './ProjectForm.style';

// A one-question-at-a-time project enquiry, modelled on the Wealthous quote form.

type StepKey = 'company' | 'industry' | 'website' | 'goals' | 'name' | 'email' | 'phone' | 'notes';

const STEPS: StepKey[] = ['company', 'industry', 'website', 'goals', 'name', 'email', 'phone', 'notes'];

const COPY: Record<StepKey, { question: string; hint: string }> = {
  company: { question: "What's your business called?", hint: "We'll set up your project under this name." },
  industry: { question: 'What industry are you in?', hint: 'So we can show you work from businesses like yours.' },
  website: { question: 'Do you have a website today?', hint: "If you do, we'll take a look before we talk." },
  goals: { question: 'What should your new website get you?', hint: 'Pick everything that matters.' },
  name: { question: 'Who should we speak to?', hint: 'Your name, or whoever looks after the project.' },
  email: { question: "What's the best email to reach you?", hint: "We'll send our reply here." },
  phone: { question: 'Want to leave a phone or WhatsApp number?', hint: 'Optional. Handy for a quick call.' },
  notes: { question: 'Anything else we should know?', hint: 'Optional. Timeline, budget, pages you have in mind.' },
};

const INDUSTRIES = [
  'Food & Beverage',
  'Retail & E‑commerce', // non-breaking hyphen keeps "E-commerce" on one line
  'Clinic & Healthcare',
  'Beauty & Wellness',
  'Education & Tuition',
  'Professional Services',
  'Property & Home Services',
  'Other',
];

const GOALS = ['More enquiries', 'More bookings', 'Online sales', 'Look more credible', 'Not sure yet', 'Other'];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EXIT_MS = 200;
// Sending always takes at least this long, so the "sending" moment (the galaxy's
// warp on the contact page) is seen rather than flickering past.
const MIN_SEND_MS = 1600;

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type Props = {
  /** Called whenever the form starts sending, finishes, or fails. */
  onStatusChange?: (status: FormStatus) => void;
  /** Called each time a step is answered and the form moves on. */
  onStepComplete?: () => void;
  /** Called with the current step (0-based) and the total, whenever it changes. */
  onStepChange?: (step: number, total: number) => void;
};

const ProjectForm = ({ onStatusChange, onStepComplete, onStepChange }: Props) => {
  const [values, setValues] = useState<ProjectDraft>(loadDraft);
  const [step, setStep] = useState(0);
  const [motion, setMotion] = useState<StepMotion>('in-next');
  const [leaving, setLeaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [sent, setSent] = useState<{ name: string; email: string } | null>(null);
  const timer = useRef<number | undefined>(undefined);
  const panelRef = useRef<HTMLDivElement>(null);
  const moved = useRef(false);
  const honeypot = useRef<HTMLInputElement>(null);

  const key = STEPS[step];
  const isLast = step === STEPS.length - 1;

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    onStatusChange?.(status);
  }, [status, onStatusChange]);

  useEffect(() => {
    onStepChange?.(step, STEPS.length);
  }, [step, onStepChange]);

  // After moving between steps, move focus into the new step: its text field, or its
  // chosen option. On a choice step with nothing picked yet, focus the question, so
  // the first option doesn't look selected just because it has the focus ring. Not on
  // the first load, so a phone keyboard doesn't jump up the moment the page opens.
  useEffect(() => {
    if (!moved.current) return;
    const panel = panelRef.current;
    const target =
      panel?.querySelector<HTMLElement>('input:checked, input[type="text"], input[type="email"], input[type="tel"], textarea') ??
      panel?.querySelector<HTMLElement>('h2');
    target?.focus({ preventScroll: true });
  }, [key]);

  function update<K extends keyof ProjectDraft>(field: K, value: ProjectDraft[K]) {
    const next = { ...values, [field]: value };
    setValues(next);
    saveDraft(next);
    setError(null);
  }

  function toggleGoal(goal: string) {
    update('goals', values.goals.includes(goal) ? values.goals.filter((g) => g !== goal) : [...values.goals, goal]);
  }

  function validate(k: StepKey): string | null {
    switch (k) {
      case 'company':
        return values.company.trim() ? null : 'Please enter your business name.';
      case 'industry':
        if (!values.industry) return 'Please pick an industry.';
        return values.industry !== 'Other' || values.industryOther.trim() ? null : 'Please tell us your industry.';
      case 'website':
        return values.hasWebsite ? null : 'Please choose one.';
      case 'goals':
        if (values.goals.length === 0) return 'Please pick at least one.';
        return !values.goals.includes('Other') || values.goalsOther.trim() ? null : 'Please tell us what else you need.';
      case 'name':
        return values.name.trim() ? null : 'Please enter a name.';
      case 'email':
        if (!values.email.trim()) return 'Please enter your email.';
        return EMAIL_PATTERN.test(values.email.trim()) ? null : "That email doesn't look right.";
      default:
        return null;
    }
  }

  async function submit() {
    setStatus('submitting');
    try {
      const send = fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, website_confirm: honeypot.current?.value ?? '' }),
      }).then((response) => {
        if (!response.ok) throw new Error(`Enquiry failed: ${response.status}`);
      });
      await Promise.all([send, new Promise((resolve) => setTimeout(resolve, MIN_SEND_MS))]);
      setSent({ name: values.name.trim().split(/\s+/)[0], email: values.email.trim() });
      setStatus('success');
      clearDraft();
    } catch {
      setStatus('error');
    }
  }

  function go(delta: 1 | -1) {
    if (leaving || status === 'submitting') return;
    if (delta === 1) {
      const problem = validate(key);
      setError(problem);
      if (problem) return;
    }
    if (step + delta < 0) return;

    moved.current = true;
    setMotion(delta === 1 ? 'out-next' : 'out-prev');
    setLeaving(true);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // The last step slides away into the sending screen rather than to a next step
    const sending = delta === 1 && isLast;
    if (delta === 1 && !sending) onStepComplete?.();
    timer.current = window.setTimeout(
      () => {
        if (!sending) setStep((s) => s + delta);
        setMotion(delta === 1 ? 'in-next' : 'in-prev');
        setError(null);
        setLeaving(false);
        if (sending) void submit();
      },
      reduce ? 0 : EXIT_MS
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    go(1);
  }

  // While sending: its own short screen, so the last question doesn't sit there
  // with a disabled button. Both screens slide in like a step.
  if (status === 'submitting') {
    return (
      <div role="status" aria-live="polite">
        <StepPanel key="sending" $motion="in-next">
          <Loader aria-hidden="true" />
          <Question>Sending your enquiry…</Question>
          <Hint>This only takes a moment.</Hint>
        </StepPanel>
      </div>
    );
  }

  if (status === 'success' && sent) {
    return (
      <div role="status">
        <StepPanel key="done" $motion="in-next">
          <DoneTitle>Thanks, {sent.name}. We&apos;ve got it.</DoneTitle>
          <DoneBody>We&apos;ll look over your project and reply to {sent.email}.</DoneBody>
          <Actions>
            <PrimaryButton as={Link} to="/">Back to home</PrimaryButton>
          </Actions>
        </StepPanel>
      </div>
    );
  }

  const copy = COPY[key];
  const describedBy = `hint-${key}${error ? ' step-error' : ''}`;
  const field = {
    'aria-labelledby': `q-${key}`,
    'aria-describedby': describedBy,
    'aria-invalid': Boolean(error),
  };

  const nextLabel = isLast
    ? 'Send enquiry'
    : key === 'phone' && !values.phone.trim() ? 'Skip' : 'Continue';

  let body: ReactNode;
  switch (key) {
    case 'company':
      body = (
        <TextInput type="text" autoComplete="organization" placeholder="Business name"
          value={values.company} onChange={(e) => update('company', e.target.value)} {...field} />
      );
      break;
    case 'industry':
      body = (
        <div role="radiogroup" aria-labelledby={`q-${key}`} aria-describedby={describedBy}>
          <ChoiceGrid>
            {INDUSTRIES.map((option) => (
              <Choice key={option} $checked={values.industry === option}>
                <input type="radio" name="industry" value={option} checked={values.industry === option}
                  onChange={() => update('industry', option)} />
                {option}
              </Choice>
            ))}
          </ChoiceGrid>
          {values.industry === 'Other' && (
            <FollowUp>
              <FollowUpLabel htmlFor="industry-other">Which industry?</FollowUpLabel>
              <TextInput id="industry-other" type="text" placeholder="e.g. Logistics"
                value={values.industryOther} onChange={(e) => update('industryOther', e.target.value)} />
            </FollowUp>
          )}
        </div>
      );
      break;
    case 'website':
      body = (
        <div role="radiogroup" aria-labelledby={`q-${key}`} aria-describedby={describedBy}>
          <ChoiceGrid>
            <Choice $checked={values.hasWebsite === 'yes'}>
              <input type="radio" name="website" value="yes" checked={values.hasWebsite === 'yes'}
                onChange={() => update('hasWebsite', 'yes')} />
              Yes, I have one
            </Choice>
            <Choice $checked={values.hasWebsite === 'no'}>
              <input type="radio" name="website" value="no" checked={values.hasWebsite === 'no'}
                onChange={() => update('hasWebsite', 'no')} />
              No, starting fresh
            </Choice>
          </ChoiceGrid>
          {values.hasWebsite === 'yes' && (
            <FollowUp>
              <FollowUpLabel htmlFor="website-url">Its address (optional)</FollowUpLabel>
              <TextInput id="website-url" type="url" inputMode="url" autoComplete="url" placeholder="yourbusiness.sg"
                value={values.websiteUrl} onChange={(e) => update('websiteUrl', e.target.value)} />
            </FollowUp>
          )}
        </div>
      );
      break;
    case 'goals':
      body = (
        <div role="group" aria-labelledby={`q-${key}`} aria-describedby={describedBy}>
          <ChoiceGrid>
            {GOALS.map((goal) => (
              <Choice key={goal} $checked={values.goals.includes(goal)}>
                <input type="checkbox" value={goal} checked={values.goals.includes(goal)}
                  onChange={() => toggleGoal(goal)} />
                {goal}
              </Choice>
            ))}
          </ChoiceGrid>
          {values.goals.includes('Other') && (
            <FollowUp>
              <FollowUpLabel htmlFor="goals-other">What else should it do?</FollowUpLabel>
              <TextInput id="goals-other" type="text" placeholder="e.g. Hire staff, show our menu"
                value={values.goalsOther} onChange={(e) => update('goalsOther', e.target.value)} />
            </FollowUp>
          )}
        </div>
      );
      break;
    case 'name':
      body = (
        <TextInput type="text" autoComplete="name" placeholder="Full name"
          value={values.name} onChange={(e) => update('name', e.target.value)} {...field} />
      );
      break;
    case 'email':
      body = (
        <TextInput type="email" autoComplete="email" placeholder="Email address"
          value={values.email} onChange={(e) => update('email', e.target.value)} {...field} />
      );
      break;
    case 'phone':
      body = (
        <TextInput type="tel" inputMode="tel" autoComplete="tel" placeholder="+65 9123 4567"
          value={values.phone} onChange={(e) => update('phone', e.target.value)}
          aria-labelledby={`q-${key}`} aria-describedby={`hint-${key}`} />
      );
      break;
    default:
      body = (
        <TextArea rows={5} placeholder="For example: we'd like to launch before our new outlet opens in March."
          value={values.notes} onChange={(e) => update('notes', e.target.value)}
          aria-labelledby={`q-${key}`} aria-describedby={`hint-${key}`} />
      );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Spam trap: hidden from people, but bots fill it in and get ignored */}
      <input ref={honeypot} type="text" name="website_confirm" tabIndex={-1} autoComplete="off"
        aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
      <ProgressRow>
        <ProgressTrack role="progressbar" aria-label="Enquiry progress"
          aria-valuemin={1} aria-valuemax={STEPS.length} aria-valuenow={step + 1}>
          {STEPS.map((k, i) => (
            <ProgressDot key={k} $state={i < step ? 'done' : i === step ? 'current' : 'todo'} />
          ))}
        </ProgressTrack>
        <ProgressCount>{step + 1} / {STEPS.length}</ProgressCount>
      </ProgressRow>

      <StepPanel key={key} ref={panelRef} $motion={motion}>
        <Question id={`q-${key}`} tabIndex={-1}>{copy.question}</Question>
        <Hint id={`hint-${key}`}>{copy.hint}</Hint>
        {body}
        {error && <ErrorText id="step-error" role="alert">{error}</ErrorText>}
        {status === 'error' && (
          <ErrorText role="alert">Something went wrong sending your enquiry. Please try again, or message us on WhatsApp.</ErrorText>
        )}
      </StepPanel>

      <Actions>
        {step > 0 && <SecondaryButton type="button" onClick={() => go(-1)}>Back</SecondaryButton>}
        <PrimaryButton type="submit" disabled={leaving}>{nextLabel}</PrimaryButton>
        <Fallback>
          Prefer to chat?{' '}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp {WHATSAPP_DISPLAY}</a>
          <br />
          Or email <a href="mailto:contact@rumilab.org">contact@rumilab.org</a>
        </Fallback>
      </Actions>
    </form>
  );
};

export default ProjectForm;
