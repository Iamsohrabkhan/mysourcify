import gsap, { ScrollTrigger } from 'gsap/all';

export const slideIn = () => {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll('.slide-in-wrapper').forEach((parent) => {
    const boxes = Array.from(parent.querySelectorAll('.slide-in'));

    // Get number of columns from CSS grid
    const computedStyle = window.getComputedStyle(parent);
    const columns = computedStyle.getPropertyValue('grid-template-columns').split(' ').length;

    // Group children into rows
    for (let i = 0; i < boxes.length; i += columns) {
      const rowItems = boxes.slice(i, i + columns);

      gsap.from(rowItems, {
        y: 30,
        opacity: 0,
        duration: 0.2,
        ease: 'power4.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: rowItems[0], // trigger when first item of the row is visible
          start: 'top 85%',
          toggleActions: 'play none none none',
          // markers: true, // remove after testing

        },
      });
    }
  });
};
