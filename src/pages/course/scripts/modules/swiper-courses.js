import Swiper, {Navigation,Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const coursesSwiper = new Swiper('.courses__swiper', {
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.courses__button-next',
    prevEl: '.courses__button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1270: {
      slidesPerView: 2,
    },
  },
});

coursesSwiper.update();
