export const navAnimation = () => {
  return gsap.from([".c-logo", ".c-nav__item"], { duration: 1, scale: 0, ease: "back", stagger: 0.1 });
};

export const heroAnimation = () => {
  return gsap
    .timeline( { stagger: 0.1, delay: 0.5  })
    .from(".c-hero-container__heading", { ease: "back.out(1.7)", transformOrigin: "top left", duration: 1, opacity: 0, scale: 2 })
    .from(".c-hero-container__text", { duration: 1, opacity: 0 })
    .from("#herobtn", { opacity: 0 })
};
