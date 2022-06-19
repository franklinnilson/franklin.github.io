import MenuMobile from './modules/menu-mobile.js';
import ScrollAnima from './modules/scroll-anima.js';
import SlideNav from './modules/slide.js';
import textEffect from './modules/text.js';
import cursorEffect from './modules/cursor.js';
import konamiEffect from './modules/konami.js';


const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();

const slide2 = new SlideNav('.slide2', '.slide2-wrapper');
// slide.addControl('.custom-controls');

textEffect(['FRONTEND DEVELOPER', 'BACKEND DEVELOPER', 'UX|UI DESIGNER'], 'console');
cursorEffect();
konamiEffect();

