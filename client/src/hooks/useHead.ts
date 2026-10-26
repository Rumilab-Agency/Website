import { useEffect } from 'react';

export type HeadTag = { tag: 'meta' | 'link'; attrs: Record<string, string> };

// Sets the page title and page-specific head tags when a page is shown in the
// browser. Pre-rendered HTML already has them (marked data-head, written at
// build time); this swaps them over when visitors move between pages.
export function useHead(title: string, tags: HeadTag[]) {
  const key = JSON.stringify(tags);
  useEffect(() => {
    document.title = title;
    document.head.querySelectorAll('[data-head]').forEach((el) => el.remove());
    for (const { tag, attrs } of JSON.parse(key) as HeadTag[]) {
      const el = document.createElement(tag);
      for (const [name, value] of Object.entries(attrs)) el.setAttribute(name, value);
      el.setAttribute('data-head', '');
      document.head.appendChild(el);
    }
  }, [title, key]);
}
