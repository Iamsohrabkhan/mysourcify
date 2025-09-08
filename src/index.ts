//@ts-nocheck
import './style.css';
import Lenis from 'lenis';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { navAnimation } from './navAnimation.js';
import { initSmoothScroll } from './initLenis.js';
import { scrollTrack200 } from './scrollTrack.js';
import { wordsAnimation } from './wordsAnimations.js';
import { slideIn } from './slideIn.js';
import { linesAnimation } from './linesAnimation.js';



document.addEventListener('DOMContentLoaded', () => {
  const lenis = initSmoothScroll();
  navAnimation();
  scrollTrack200(lenis);
  wordsAnimation();
  slideIn();
  linesAnimation()
});





  // swup.hooks.on('visit:end', (visit) => {
  //   console.log('visit end loaded:', visit.to.url);
  //   window.bricksRunAllFunctions();
  // });