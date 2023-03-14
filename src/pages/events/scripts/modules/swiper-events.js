import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const buttonListView = document.querySelector('#view-list');
const buttonGridView = document.querySelector('#view-grid');

const eventsList = document.querySelector('.events__list');

const listViewSettings = {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  allowTouchMove: true,
  loop: false,
  grabCursor: true,
  spaceBetween: 24,

  pagination: {
    el: '.events-swiper__pagination',
    clickable: true,
    bulletClass: 'events-swiper__bullet',
    renderBullet: function (index) {
      return `<span class="events-swiper__bullet">${(index + 1)}</span>`;
    }
  },

  navigation: {
    nextEl: '.events-swiper__button--next',
    prevEl: '.events-swiper__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 3,
      },
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 5,
      },
    },
    820: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 6,
      },
    },
    1270: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 9,
      },
    },
  }
};

const gridViewSettings = {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  allowTouchMove: true,
  loop: false,
  grabCursor: true,
  spaceBetween: 24,

  pagination: {
    el: '.events-swiper__pagination',
    clickable: true,
    bulletClass: 'events-swiper__bullet',
    renderBullet: function (index) {
      return `<span class="events-swiper__bullet">${(index + 1)}</span>`;
    }
  },

  navigation: {
    nextEl: '.events-swiper__button--next',
    prevEl: '.events-swiper__button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 3,
      },
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 3,
      },
    },
    820: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 3,
      },
    },
    1270: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 3,
      },
    },
  }
};

let eventsSwiper = new Swiper('.events__swiper', listViewSettings);
eventsSwiper.update();

buttonGridView.addEventListener('click', () => {
  eventsList.classList.add('events__list--grid');

  eventsSwiper.destroy();
  eventsSwiper = new Swiper('.events__swiper', gridViewSettings);
  eventsSwiper.update();
});

buttonListView.addEventListener('click', () => {
  eventsList.classList.remove('events__list--grid');

  eventsSwiper.destroy();
  eventsSwiper = new Swiper('.events__swiper', listViewSettings);
  eventsSwiper.update();
});
