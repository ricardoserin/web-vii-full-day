class Slider {
  constructor(stories) {
    this.stories = stories;
    this.previousSlider = 0;
    this.activeSlider = 1;
    this.nextSlider = 2;
    // this.nextSlider2 = 3;
    // this.nextSlider3 =1;
    // this.nextSlider4 = 2;
    // this.nextSlider5 = 0;
    // this.nextSlider6 = 1;
    // this.nextSlider7 = 2;
  }

  static #removeClasslist(element) {
    Array.from(element.classList).forEach((elementClass) => {
      element.classList.remove(elementClass);
    })
  }

  static #createSliderItem(storie) {
    const sliderItem = document.createElement('div');
    const sliderMessage = document.createElement('p');
    const sliderStorieAuthor = document.createElement('div');
  
    sliderItem.classList.add('customer-stories__item');
    sliderMessage.classList.add('customer-stories__message');
    sliderStorieAuthor.classList.add('customer-stories__customer-name');
    
    sliderMessage.textContent = storie.message;
    sliderStorieAuthor.textContent = storie.author;
  
    sliderItem.appendChild(sliderMessage);
    sliderItem.appendChild(sliderStorieAuthor);
  
    return sliderItem;
  }

  #createSliderControl(id) {
    const sliderControl = document.createElement('div');
    sliderControl.classList.add('customer-stories__control');
    
    sliderControl.addEventListener('click', () => {
      this.#resetInterval();
      this.moveSliderTo(id);
      this.#cleanSliderElements();
      this.#updateElementClasses();
      this.#updateControlStyles();
      this.#startInterval();
    })
    return sliderControl;
  }

  #startInterval() {
    this.interval = setInterval(() => {
      this.#cleanSliderElements();
      this.moveSlider();
      this.#updateElementClasses();
      this.#updateControlStyles();
    }, 5000)
  }

  #resetInterval() {
    clearInterval(this.interval);
  }

  #updateControlStyles() {
    this.sliderControls.forEach((control, index) => {
      if (index === this.activeSlider) {
        control.classList.add('customer-stories__control--active');
      } else {
        control.classList.remove('customer-stories__control--active');
      }
    })
  }

  #cleanSliderElements() {
    Slider.#removeClasslist(this.sliderItems[this.activeSlider]); 
    Slider.#removeClasslist(this.sliderItems[this.previousSlider]); 
    Slider.#removeClasslist(this.sliderItems[this.nextSlider]);
    // Slider.#removeClasslist(this.sliderItems[this.nextSlider2]);
    // Slider.#removeClasslist(this.sliderItems[this.nextSlider3]); 
    // Slider.#removeClasslist(this.sliderItems[this.nextSlider4]); 
    // Slider.#removeClasslist(this.sliderItems[this.nextSlider5]); 
    // Slider.#removeClasslist(this.sliderItems[this.nextSlider6]);
    // Slider.#removeClasslist(this.sliderItems[this.nextSlider7]);
  }

  #updateElementClasses() {
    this.sliderItems[this.activeSlider].classList.add('customer-stories__item');
    this.sliderItems[this.activeSlider].classList.add('customer-stories__item--active');
    this.sliderItems[this.previousSlider].classList.add('customer-stories__item');
    this.sliderItems[this.previousSlider].classList.add('customer-stories__item--left');
    this.sliderItems[this.nextSlider].classList.add('customer-stories__item');
    this.sliderItems[this.nextSlider].classList.add('customer-stories__item--right');
    // this.sliderItems[this.nextSlider2].classList.add('customer-stories__item');
    // this.sliderItems[this.nextSlider2].classList.add('customer-stories__item--right');
    // this.sliderItems[this.nextSlider3].classList.add('customer-stories__item');
    // this.sliderItems[this.nextSlider3].classList.add('customer-stories__item--left');
    // this.sliderItems[this.nextSlider4].classList.add('customer-stories__item');
    // this.sliderItems[this.nextSlider4].classList.add('customer-stories__item--left');
    // this.sliderItems[this.nextSlider5].classList.add('customer-stories__item');
    // this.sliderItems[this.nextSlider5].classList.add('customer-stories__item--left');
    // this.sliderItems[this.nextSlider6].classList.add('customer-stories__item');
    // this.sliderItems[this.nextSlider6].classList.add('customer-stories__item--left');
    // this.sliderItems[this.nextSlider7].classList.add('customer-stories__item');
    // this.sliderItems[this.nextSlider7].classList.add('customer-stories__item--left');
  }
  
  initSlider() {
    this.sliderElement = document.getElementById('customerStoriesSlider');
    this.sliderControl = document.getElementById('sliderControl');
    this.sliderControls = this.stories.map((storie, index) => {
      const sliderControl = this.#createSliderControl(index);
      this.sliderControl.appendChild(sliderControl);
      return sliderControl;
    })
    this.sliderItems = this.stories.map((storie) => {
      const sliderItem = Slider.#createSliderItem(storie);
      this.sliderElement.appendChild(sliderItem);
      return sliderItem;
    })
    this.#cleanSliderElements();
    this.#updateElementClasses();
    this.#updateControlStyles();
    this.#startInterval();
  }

  moveSlider() {
    this.activeSlider++;
    this.previousSlider++;
    this.nextSlider++;
    // this.nextSlider2++;
    // this.nextSlider3++;
    // this.nextSlider4++;
    // this.nextSlider5++;
    // this.nextSlider6++;
    // this.nextSlider7++;
    if (this.activeSlider >= this.sliderItems.length) this.activeSlider = 0;
    if (this.previousSlider >= this.sliderItems.length) this.previousSlider = 0;
    if (this.nextSlider >= this.sliderItems.length) this.nextSlider = 0;
    // if (this.nextSlider2 >= this.sliderItems.length) this.nextSlider2 = 0;
    // if (this.nextSlider3 >= this.sliderItems.length) this.nextSlider3 = 0;
    // if (this.nextSlider4 >= this.sliderItems.length) this.nextSlider4 = 0;
    // if (this.nextSlider5 >= this.sliderItems.length) this.nextSlider5 = 0;
    // if (this.nextSlider6 >= this.sliderItems.length) this.nextSlider6 = 0;
    // if (this.nextSlider7 >= this.sliderItems.length) this.nextSlider7 = 0;
  }

  moveSliderTo(num) {
    this.activeSlider = num;
    this.previousSlider = num - 1;
    this.nextSlider = num + 1;
    // this.nextSlider2 = num -1;
    // this.nextSlider3 = num +3;
    // this.nextSlider4 = num +4;
    // this.nextSlider5 = num +5;
    // this.nextSlider6 = num +6;
    // this.nextSlider7 = num +7;
    if (this.activeSlider >= this.sliderItems.length) this.activeSlider = 0;
    if (this.previousSlider < 0) this.previousSlider = 2;
    if (this.nextSlider >= this.sliderItems.length) this.nextSlider = 0;
    // if (this.nextSlider2 >= this.sliderItems.length) this.nextSlider2 = 0;
    // if (this.nextSlider3 >= this.sliderItems.length) this.nextSlider3 = 0;
    // if (this.nextSlider4 >= this.sliderItems.length) this.nextSlider4 = 0;
    // if (this.nextSlider5 >= this.sliderItems.length) this.nextSlider5 = 0;
    // if (this.nextSlider6 >= this.sliderItems.length) this.nextSlider6 = 0;
    // if (this.nextSlider7 >= this.sliderItems.length) this.nextSlider7 = 0;
  }
}

export default Slider;
