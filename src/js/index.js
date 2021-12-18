import initContactForm from "./modules/contactForm";
import initToggleButton from "./modules/toggleMenu";
import getAllSections from './modules/intersectionChanger';
import Slider from "./modules/Slider";
const stories = [
  {
    message: 'Frase 1 correspondiente del ponente respecto al tema que va a tratar.',
    author: 'Ponente 1'
  },
  {
    message: 'Frase 2 correspondiente del ponente respecto al tema que va a tratar.',
    author: 'Ponente 2'
  },
  {
    message: 'Frase 3 correspondiente del ponente respecto al tema que va a tratar.',
    author: 'Ponente 3'
  },
  {
    message: 'Frase 4 correspondiente del ponente respecto al tema que va a tratar.',
    author: 'Ponente 4'
  },
  // {
  //   message: 'Frase 5 correspondiente del ponente respecto al tema que va a tratar.',
  //   author: 'Ponente 5'
  // },
  // {
  //   message: 'Frase 6 correspondiente del ponente respecto al tema que va a tratar.',
  //   author: 'Ponente 6'
  // },
  // {
  //   message: 'Frase 7 correspondiente del ponente respecto al tema que va a tratar.',
  //   author: 'Ponente 7'
  // },
  // {
  //   message: 'Frase 8 correspondiente del ponente respecto al tema que va a tratar.',
  //   author: 'Ponente 8'
  // },
];

document.addEventListener('readystatechange', () => {
    if (document.readyState == 'complete') {
        initContactForm('contactForm');
        initToggleButton();
        getAllSections();
        time();
        const slider = new Slider(stories);
        slider.initSlider();
    }
})