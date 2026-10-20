// What the visitor has entered in the project form so far. Kept for the length of
// the visit (sessionStorage) so leaving the page and coming back doesn't mean
// starting again. It holds personal details, so it isn't kept after the tab
// closes, and it's cleared once the form is sent.

export type ProjectDraft = {
  company: string;
  industry: string;
  industryOther: string;
  hasWebsite: '' | 'yes' | 'no';
  websiteUrl: string;
  goals: string[];
  goalsOther: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const KEY = 'rumilab-project-draft-v2';

export const EMPTY_DRAFT: ProjectDraft = {
  company: '',
  industry: '',
  industryOther: '',
  hasWebsite: '',
  websiteUrl: '',
  goals: [],
  goalsOther: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
};

const text = (value: unknown) => (typeof value === 'string' ? value : '');

export function loadDraft(): ProjectDraft {
  try {
    const parsed: unknown = JSON.parse(window.sessionStorage.getItem(KEY) ?? 'null');
    if (parsed && typeof parsed === 'object') {
      const d = parsed as Partial<Record<keyof ProjectDraft, unknown>>;
      return {
        company: text(d.company),
        industry: text(d.industry),
        industryOther: text(d.industryOther),
        hasWebsite: d.hasWebsite === 'yes' || d.hasWebsite === 'no' ? d.hasWebsite : '',
        websiteUrl: text(d.websiteUrl),
        goals: Array.isArray(d.goals) ? d.goals.filter((g): g is string => typeof g === 'string') : [],
        goalsOther: text(d.goalsOther),
        name: text(d.name),
        email: text(d.email),
        phone: text(d.phone),
        notes: text(d.notes),
      };
    }
  } catch {
    // Blocked or unreadable storage: start with an empty form.
  }
  return EMPTY_DRAFT;
}

export function saveDraft(draft: ProjectDraft) {
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(draft));
  } catch {
    // Private windows or blocked storage: the form still works, it just isn't kept.
  }
}

export function clearDraft() {
  try {
    window.sessionStorage.removeItem(KEY);
  } catch {
    // Nothing to clear.
  }
}
