import gsap, { ScrollTrigger, SplitText } from 'gsap/all';

export const navAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  let split = SplitText.create('.nav-item-chilld', {
    type: 'chars',
    charsClass: 'char',
    onSplit: (curr) => {
      if (curr.elements) {
        // const navItem = document.querySelectorAll('.nav-item-chilld');
        curr.elements.forEach((currr) => {
          currr.addEventListener('mouseenter', () => {
            currr.parentElement.classList.add('scale-1');

            const char = currr.querySelectorAll('.char');
            gsap.to(char, {
              yPercent: -100,
              duration: 0.7,
              stagger: {
                amount: 0.09,
              },
              ease: 'power4.out',
            });
          });
          currr.addEventListener('mouseleave', () => {
            currr.parentElement.classList.remove('scale-1');

            const char = currr.querySelectorAll('.char');
            gsap.to(char, {
              yPercent: 0,
              duration: 0.7,
              stagger: {
                amount: 0.09,
              },
              ease: 'power4.out',
            });
          });
        });
      }
    },
  });
};
