// Scroll reveal for elements marked data-aos (fade-up, fade-left, fade-right,
// fade-in), replacing the AOS library with the few lines this site needs. The
// matching styles live in index.css.
//
// Elements already on screen when the page loads are shown straight away, so
// pre-rendered content never blinks out and back in. Elements further down, and
// on pages opened later, fade in once as they scroll into view.

const OFFSET = 80; // px into the viewport before an element reveals

export function startReveal(): () => void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const show = (el: Element) => el.classList.add('aos-animate');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target);
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: `0px 0px -${OFFSET}px 0px` },
  );

  const watch = (onLoad: boolean) => {
    document.querySelectorAll('[data-aos]:not([data-aos-watched])').forEach((el) => {
      el.setAttribute('data-aos-watched', '');
      if (onLoad && el.getBoundingClientRect().top < window.innerHeight - OFFSET) show(el);
      else observer.observe(el);
    });
  };

  watch(true);
  document.documentElement.classList.add('reveal-ready');

  // Pages opened later (and lazy sections) add new elements: watch those too
  const mutations = new MutationObserver(() => watch(false));
  mutations.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    mutations.disconnect();
  };
}
