import initContactForm from "./modules/contactForm";
import initToggleButton from "./modules/toggleMenu";
import getAllSections from './modules/intersectionChanger';

import time from "./modules/timedown"

document.addEventListener('readystatechange', () => {
    if (document.readyState == 'complete') {
        initContactForm('contactForm');
        initToggleButton();
        getAllSections();
        time();
    }
})