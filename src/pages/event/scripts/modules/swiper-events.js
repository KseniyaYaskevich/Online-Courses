import Swiper, {Navigation,Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const eventsSwiper = new Swiper('.events__swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.events__button-next',
    prevEl: '.events__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    678: {
      slidesPerView: 2,
    },
    1270: {
      slidesPerView: 3,
    },
  },
});

eventsSwiper.update();
