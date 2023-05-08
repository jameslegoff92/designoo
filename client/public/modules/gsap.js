export const navAnimation = () => {
  return gsap.from([".c-nav__item", ".logo"], {duration: 1, scale: 0, ease: "back"});
};
