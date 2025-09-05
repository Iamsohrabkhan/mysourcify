import { gsap } from 'gsap';

export function scrollTrack200() {
  let lastScrollY = 0;
  let isHidden = false;

  window.addEventListener('scroll', () => {
    const currentY = window.scrollY;

    if (currentY > 200 && currentY > lastScrollY && !isHidden) {
      isHidden = true;
      gsap.to('.Navbar', {
        yPercent: -120, // move navbar up (hide)
        duration: 0.4,
        overwrite: true,
      });
    } else if (currentY < lastScrollY && isHidden) {
      isHidden = false;
      gsap.to('.Navbar', {
        yPercent: 0, // bring navbar back
        duration: 0.4,
        overwrite: true,
      });
    }

    lastScrollY = currentY;
  });
}
