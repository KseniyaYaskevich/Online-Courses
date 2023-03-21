import 'scripts/script';
import 'scripts/modules/swiper-testimonials';

import './modules/benefits-tabs';
import './modules/swiper-team';

import {loadData} from './modules/load-data';
import {courseCardsHandler} from 'scripts/modules/course-cards-handler';
import {eventCardsHandler} from 'scripts/modules/event-cards-handler';

const CARDS_NUMBER = 6;

loadData(CARDS_NUMBER);
courseCardsHandler();
