import initContactForm from "./modules/contactForm";
import initToggleButton from "./modules/toggleMenu";
import getAllSections from './modules/intersectionChanger';
import Slider from "./modules/Slider";
// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';


import time from "./modules/timedown"
const listaPonentes = [
  {
    "nombres": "Amparito",
    "lugarTrabajo": "Empresa A",
    "foto": "Foto_AmparitoAcevedo.jpg",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo doloremque amet corporis et illum. Quo fuga incidunt atque, id explicabo ipsam voluptates rem, minima deserunt esse a ratione sapiente."
  },
  {
    "nombres": "Amparito",
    "lugarTrabajo": "Empresa A",
    "foto": "Foto_AmparitoAcevedo.jpg",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo doloremque amet corporis et illum. Quo fuga incidunt atque, id explicabo ipsam voluptates rem, minima deserunt esse a ratione sapiente."
  }
];
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
  }
];

document.addEventListener('readystatechange', () => {
  console.log(stories);
    if (document.readyState == 'complete') {
        initContactForm('contactForm');
        initToggleButton();
        getAllSections();
        time();
        // const slider = new Slider(stories);
        // Swiper.use([Navigation, Pagination]);
        // const swiper = new Swiper('.swiper-container', {
        //   effect: 'coverflow',
        //   grabCursor: true,
        //   centeredSlides: true,
        //   slidesPerView: 'auto',
        //   coverflowEffect: {
        //     rotate: 50,
        //     stretch: 0,
        //     depth: 100,
        //     modifier: 1,
        //     slideShadows: true,
        //   },
        //   pagination: {
        //     el: '.swiper-pagination',
        //   },
        // });
        // slider.initSlider();
    }
})