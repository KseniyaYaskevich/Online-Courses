import Swiper, {Navigation,Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const blogSwiper = new Swiper('.blog__swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.blog__button-next',
    prevEl: '.blog__button-prev',
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

blogSwiper.update();
