import 'scripts/script';
import 'scripts/modules/swiper-testimonials';

import './modules/countdown';
import './modules/spollers';
import './modules/swiper-courses';

import {loadData} from './modules/load-data';
import {courseCardsHandler} from 'scripts/modules/course-cards-handler';
import {createCoursePageTemplate} from './view/course-page-template';
import {getItem} from 'scripts/base/storage';

const CARDS_NUMBER = 6;

loadData(CARDS_NUMBER);
courseCardsHandler();

window.addEventListener('load', () => {
  createCoursePageTemplate(getItem('course'));
});
