export const navAnimation = () => {
  return gsap.from([".logo", ".c-nav__item"], {duration: 1, scale: 0, ease: "back", stagger: 0.1});
};
