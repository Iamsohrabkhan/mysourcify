import gsap, { ScrollTrigger, SplitText } from 'gsap/all';

export const wordsAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  document.querySelectorAll('.words-animation').forEach((el) => {
    const text = SplitText.create(el, {
      type: 'words, lines',
      mask: 'lines',
      wordsClass: 'word++',
      linesClass: 'lines',
      autoSplit: true,
      onSplit: (self) => {
        if (self) {
          gsap.set(self.words, { yPercent: 100 });

          gsap.to(self.words, {
            yPercent: 0,
            stagger: 0.04,
            ease: 'power3.out',
            duration: 0.71,
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
