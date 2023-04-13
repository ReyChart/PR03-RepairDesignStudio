// SLIDER script

const images = [{
    src: 'pictures/project_img_one.png',
    city: 'Rostov-on-Don <br>LCD admiral',
    apartmentArea: '81 m2',
    repairTime: '3.5 months',
    repairCost: 'Upon request',
    link: 'Rostov-on-Don, Admiral'
  }, {
    src: 'pictures/project_img_two.png',
    city: 'Sochi <br>Thieves',
    apartmentArea: '105 m2',
    repairTime: '4 months',
    repairCost: 'Upon request',
    link: 'Sochi Thieves'
  }, {
    src: 'pictures/project_img_three.png',
    city: 'Rostov-on-Don <br>Patriotic',
    apartmentArea: '93 m2',
    repairTime: '3 months',
    repairCost: 'Upon request',
    link: 'Rostov-on-Don Patriotic'
  }];

function initSlider(options) {
  if (!images || !images.length) return;

  options = options || {
    autoplay: false,
  };

  let sliderImages = document.querySelector('.projects__slider-image');
  let sliderArrows = document.querySelectorAll('.projects__arrow');
  let sliderArrowsPhone = document.querySelectorAll('.area__arrow');
  let sliderDots = document.querySelector('.projects__dote');
  let sliderCity = document.querySelector('.slider__city');
  let sliderAppartment = document.querySelector('.slider__appartment');
  let sliderTime = document.querySelector('.slider__time');
  let sliderCost = document.querySelector('.slider__cost');
  let sliderLink = document.querySelector('.projects__slider-link');

  initImages();
  initArrows();
  initArrowsPhone();
  initInfo();
  initDots();
  initLink();

  if (options.autoplay) {
    initAutoplay();
  }

  function initImages() {
    images.forEach((image, index) => {
      let elementImage = `<img class="projects__image n${index} ${index === 0 ? 'active' : ''}" src="./${image.src}" alt="Our projects" data-index="${index}">`;
      sliderImages.innerHTML += elementImage;
    });
  }

  function initArrows() {
    sliderArrows.forEach(arrow => {
      arrow.addEventListener('click', function() {
        let indexNumber = +sliderImages.querySelector('.active').dataset.index;
        let nextNumber
        if (arrow.classList.contains("arrow__left")) {
          nextNumber = indexNumber === 0 ? images.length - 1 : indexNumber - 1;
        } else {
          nextNumber = indexNumber === images.length -1 ? 0 : indexNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initArrowsPhone() {
    sliderArrowsPhone.forEach(arrow => {
      arrow.addEventListener('click', function() {
        let indexNumber = +sliderImages.querySelector('.active').dataset.index;
        let nextNumber
        if (arrow.classList.contains('area__arrow_left')) {
          nextNumber = indexNumber === 0 ? images.length - 1 : indexNumber - 1;
        } else {
          nextNumber = indexNumber === images.length -1 ? 0 : indexNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="projects__dote_circle n${index} ${index === 0 ? 'active' : ''}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll('.projects__dote_circle').forEach(dot => {
      dot.addEventListener('click', function() {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initInfo() {
    images.forEach((elem, index) => {
      let elementCity = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${elem.city}</p>`;
      let elementAppartment = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${elem.apartmentArea}</p>`;
      let elementTime = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${elem.repairTime}</p>`;
      let elementCost = `<p class="projects__specification-text n${index} ${index === 0 ? 'active' : ''}" data-index="${index}">${elem.repairCost}</p>`;

      sliderCity.innerHTML += elementCity;
      sliderAppartment.innerHTML += elementAppartment;
      sliderTime.innerHTML += elementTime;
      sliderCost.innerHTML += elementCost;
    });
  }

  function initLink() {
    images.forEach((image, index) => {
      let link = `<a class="projects__link n${index} ${index === 0 ? 'active' : ''}" href="#" data-index="${index}">${image.link}</a>`;
      sliderLink.innerHTML += link;
    });
    sliderLink.querySelectorAll('.projects__link').forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        moveSlider(this.dataset.index);
      });
    });
  }

  function moveSlider(num) {
    sliderImages.querySelector('.active').classList.remove('active');
    sliderImages.querySelector('.n' + num).classList.add('active');

    sliderDots.querySelector('.active').classList.remove('active');
    sliderDots.querySelector('.n' + num).classList.add('active');

    sliderCity.querySelector('.active').classList.remove('active');
    sliderCity.querySelector('.n' + num).classList.add('active');

    sliderAppartment.querySelector('.active').classList.remove('active');
    sliderAppartment.querySelector('.n' + num).classList.add('active');

    sliderTime.querySelector('.active').classList.remove('active');
    sliderTime.querySelector('.n' + num).classList.add('active');

    sliderCost.querySelector('.active').classList.remove('active');
    sliderCost.querySelector('.n' + num).classList.add('active');

    sliderLink.querySelector('.active').classList.remove('active');
    sliderLink.querySelector('.n' + num).classList.add('active');
  }

  function initAutoplay() {
    setInterval(() => {
      let indexNumber = +sliderImages.querySelector('.active').dataset.index;
      let nextNumber = indexNumber === images.length - 1 ? 0 : indexNumber +1;
      moveSlider(nextNumber);
    }, options.autoplayInterval);
  }
}

let sliderOptions = {
  autoplay: true,
  autoplayInterval: 5000,
};

document.addEventListener("DOMContentLoaded", function() {
  initSlider(sliderOptions);
});

// ARROW-UP script

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  btnUp.addEventListener();

// BURGER-MENU script 
  
  $(document).ready(function() {
    $('.header__burger-menu').click(function() {
        $('.header__burger-menu').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
    });
});