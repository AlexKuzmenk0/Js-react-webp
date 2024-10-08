'use strict';


//* Работа с Табами

window.addEventListener('DOMContentLoaded', () => {
  let tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');
  
  //* Скрываем табы
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  };

  //* Показываем табы
  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  };

  //* Вызываем функции
  hideTabContent();
  showTabContent();

  //* Вызываем обработчик события ('click')
  tabsParent.addEventListener('click', function (event) {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        };
      });
    };
  });


  //* Работа с таймером
  const deadLine = '2024-07-30';

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  function getZero(num) {
    if (num >= 0 && num < 10){
      return `0${num}`;
    }else {
      return num;
    };
  };

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();
    
    function updateClock() {
      const t = getTimeRemaining(endTime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0){
        clearInterval(timeInterval);
      };
    };
  };

  setClock('.timer', deadLine);

  //* Modal
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
    // btn.addEventListener('click', () => {
    //   modal.classList.add('show');
    //   modal.classList.remove('hide');
    //   // modal.classList.toggle('show');
    //   document.body.style.overflow = 'hidden';
    // });
  });

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  };

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  };

   
  // modalCloseBtn.addEventListener('click', () => {
  //   modal.classList.add('hide');
  //   modal.classList.remove('show');
  //   // modal.classList.toggle('show');
  //   document.body.style.overflow = '';
  // });

  //* При клике на любую область окно(modal) закрывается
  modal.addEventListener('click', (e) => {
    if(e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(); 
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) { 
        closeModal();
    }
  });

  //* вызов окна(modal) через определенное время
  const modalTimerId = setTimeout(openModal, 50000);

  function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);

  //* Используем классы для карточек
  class MenuCards {
    constructor(src, alt, tittle, descr, price, parentSelector, ... classes) {
      this.src = src;
      this.alt = alt;
      this.tittle =  tittle;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 23;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const elem = document.createElement('div');

      if(this.classes.length === 0) {
        this.classes = 'menu__item';
        elem.classList.add(this.classes);
      } else{
        this.classes.forEach(className => elem.classList.add(className));
      }
      elem.innerHTML = `
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.tittle}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;
      this.parent.append(elem);
    }
  }

  const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok){
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  }; 

  // getResource('http://localhost:3000/menu')
  //   .then(data => {
  //     data.forEach(({img, altimg, title, descr, price}) => {
  //       new MenuCards(img, altimg, title, descr, price, '.menu .container').render();
  //     });
  //   });

  axios.get('http://localhost:3000/menu')
    .then(data => {
      data.data.forEach(({img, altimg, title, descr, price}) => {
        new MenuCards(img, altimg, title, descr, price, '.menu .container').render();
      });
    });


  new MenuCards(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu .container',
  ).render();

  new MenuCards(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум"',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    '.menu .container',
    'menu__item',
    'big'
  ).render();

  new MenuCards(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    21,
    '.menu .container',
    'menu__item'
  ).render();

  //* Forms
  const forms = document.querySelectorAll('form');
  const message = {
    loeading: 'load',
    succes: 'Thanks, it will be OK',
    failure: 'Fail...'
  }

  // forms.forEach(item => {
  //   bindPostData(item);
  // });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
    
    return await res.json();
  }; 

  function bindPostData(form) {
    form.addEventListener('submit'), (e) =>  {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.textContent = message.loeading;
      form.append(statusMessage);

      const request = new XMLHttpRequest();
      request.open('POST', 'server.php'); 

      const formData = new FormData(form);

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
      .then(data => {
        console.log(data);
        showThanksModal(message.succes);
        form.reset();
        statusMessage.remove();
      }).catch(() => {
          showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      })
    };
  };

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog ');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>×</div>
        <div class="modal__tittle">${message}</div>
      </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }

  //* Slider

  let slideIndex = 1;
  let offSet = 0;
  const slides = document.querySelectorAll('.offer__slide'),
      slider = document.querySelector('.offer__slider'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current'),
      slidesWrapper = document.querySelector('.offer__slider-wrapper'),
      slidesField = document.querySelector('.offer__slider-inner'),
      width = window.getComputedStyle(slidesWrapper).width;


  //! Сложная версия (Carousel)
  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  //   current.textContent = `0${slideIndex}`;
  // } else {
  //   total.textContent = slides.length;
  //   current.textContent = slideIndex;
  // }
  // // Ростягиваем слайды на всю ширину
  // slidesField.style.width = 100 * slides.length + "%";
  // slidesField.style.display = "flex";
  // slidesField.style.transition = "0.5 all";

  // slidesWrapper.style.overflow = 'hidden';

  // slides.forEach(slide => {
  //   slide.style.width = width;
  // })

  // next.addEventListener('click', () => {
  //   if (offSet == +width.slice(0, width.length - 2) * (slides.length - 1)){
  //     offSet = 0;
  //   }else {
  //     offSet += +width.slice(0, width.length - 2); 
  //   }
  //   slidesField.style.transform = `translateX(-${offSet}px)`;

  //   if(slideIndex == slides.length) {
  //     slideIndex = 1;
  //   }else {
  //     slideIndex++;
  //   }

  //   if(slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   }else {
  //     current.textContent = slideIndex;
  //   }
  // })


  // prev.addEventListener('click', () => {
  //   if (offSet == 0){
  //     offSet = +width.slice(0, width.length - 2) * (slides.length - 1)
  //   } else {
  //     offSet -= +width.slice(0, width.length - 2); 
  //   }
  //  slidesField.style.transform = `translateX(-${offSet}px)`;

  //  if(slideIndex == slides.length) {
  //   slideIndex = slide.length;
  // }else {
  //   slideIndex--;
  // }

  //  if(slides.length < 10) {
  //   current.textContent = `0${slideIndex}`;
  // }else {
  //   current.textContent = slideIndex;
  // }
  // })
  //!
  //! Точки под слайдером
  slider.style.position = 'relative';

  const indicators = document.createElement('ol'),
        dots = [];
  indicators.classList.add('carousel-indicators');
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;

  slider.append(indicators);

  for(let i = 0; i < slides.length; i++){
    const dot = document.createElement('li');
    dot.setAttribute('data-style-to', i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;
    if(i == 0) {
      dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
  }
  //!


  //! Простая версия
  showSlides(slideIndex);

  if (slides.length < 10) {
      total.textContent = `0${slides.length}`;
  } else {
      total.textContent = slides.length;
  }

  function showSlides(n) {
      if (n > slides.length) {
          slideIndex = 1;
      }
      if (n < 1) {
          slideIndex = slides.length;
      }

      slides.forEach((item) => item.style.display = 'none');
      slides[slideIndex - 1].style.display = 'block';
      
      if (slides.length < 10) {
          current.textContent =  `0${slideIndex}`;
      } else {
          current.textContent =  slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = '.5');
      dots [slideIndex - 1].style.opacity = 1;
  }

  function plusSlides (n) {
      showSlides(slideIndex += n);
  }

  prev.addEventListener('click', function(){
      plusSlides(-1);
  });

  next.addEventListener('click', function(){
      plusSlides(1);
  });
  //!

  //!Calculator
  const result = document.querySelector('.calculating__result span');

  let sex, height, weight, age, ratio;

  if(localStorage.getItem('sex')){
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
  }

  if(localStorage.getItem('ratio')){
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
      elem.classList.remove(activeClass);
      if(elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }
      if(elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
        elem.classList.add(activeClass);
      }
    });
  };

  initLocalSettings('#gender div', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big div','calculating__choose-item_active');

  function calcTotal(){
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '____';
      return;
    }

    if (sex === 'female'){
      result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else{
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
  };
  calcTotal();

  function getStaticIformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
      elem.addEventListener('click', (e) => {
        if(e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }
  
        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });
  
        e.target.classList.add(activeClass);
  
        calcTotal();
      });
    })
  };

  getStaticIformation('#gender div', 'calculating__choose-item_active');
  getStaticIformation('.calculating__choose_big div','calculating__choose-item_active');

  function getDinamicInformation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {

      if(input.value.match(/\D/g)) {
        input.style.border = '1px solid red';
      } else {
        input.style.border = 'none';
      }

      switch(input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      };
      calcTotal();
    });
  };

  getDinamicInformation('#height');
  getDinamicInformation('#weight');
  getDinamicInformation('#age');
  //!

}); 
 
