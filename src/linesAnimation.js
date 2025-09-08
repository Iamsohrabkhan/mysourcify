import gsap, { ScrollTrigger, SplitText } from 'gsap/all';

export const linesAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  document.querySelectorAll('.lines-animation').forEach((el) => {
    const text = SplitText.create(el, {
      type: 'lines',
      linesClass: 'lines',
      autoSplit: true,
      onSplit: (self) => {
        if (self) {
          gsap.set(self.lines, { yPercent: 10, opacity: 0 });

          gsap.to(self.lines, {
            yPercent: 0,
            opacity: 1,
            stagger: {
              amount: 0.6,
            },
            ease: 'power4.out',
            // duration: 0.5,
            delay: 0,
            scrollTrigger: {
              trigger: el,
              toggleActions: 'play none none none',
              start: '0% 100%',
              end: '100% 0%',
              //   markers: true,
            },
          });
        }
      },
    });
  });
};
