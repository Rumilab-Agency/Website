import { useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { TipWrap, TipButton, TipBubble } from './InfoTip.style';

type Props = {
  /** What the icon explains, read out by screen readers, e.g. "What is hosting?" */
  label: string;
  children: ReactNode;
};

const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

// A small ⓘ that explains a term. Opens on hover with a mouse, on tap on a
// phone, and on keyboard focus; Escape or a tap elsewhere closes it.
const InfoTip = ({ label, children }: Props) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const id = useId();
  // A tap focuses the button (which opens it) and then clicks it; this stops
  // that click from closing it again straight away.
  const justFocused = useRef(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onPointer = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  // Keep the bubble inside the screen on narrow phones
  useLayoutEffect(() => {
    const bubble = bubbleRef.current;
    if (!open || !bubble) return;
    bubble.style.setProperty('--shift', '0px');
    const r = bubble.getBoundingClientRect();
    const margin = 12;
    const shift = r.left < margin ? margin - r.left : r.right > window.innerWidth - margin ? window.innerWidth - margin - r.right : 0;
    bubble.style.setProperty('--shift', `${shift}px`);
  }, [open]);

  return (
    <TipWrap
      ref={wrapRef}
      onMouseEnter={() => canHover() && setOpen(true)}
      onMouseLeave={() => canHover() && setOpen(false)}
    >
      <TipButton
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-describedby={open ? id : undefined}
        onClick={() => {
          if (canHover() || justFocused.current) setOpen(true);
          else setOpen((o) => !o);
          justFocused.current = false;
        }}
        onFocus={() => {
          justFocused.current = true;
          setOpen(true);
        }}
        onBlur={() => setOpen(false)}
      >
        <IoInformationCircleOutline aria-hidden="true" />
      </TipButton>
      <TipBubble ref={bubbleRef} id={id} role="tooltip" $open={open}>
        {children}
      </TipBubble>
    </TipWrap>
  );
};

export default InfoTip;
