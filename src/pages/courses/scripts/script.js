import 'scripts/script';
import 'scripts/modules/swiper-testimonials';

import {loadData} from './modules/load-data';
import {courseCardsHandler} from 'scripts/modules/course-cards-handler';

const CARDS_NUMBER = 17;
const CARDS_PER_STEP = 6;

loadData(CARDS_NUMBER, CARDS_PER_STEP);
courseCardsHandler();
