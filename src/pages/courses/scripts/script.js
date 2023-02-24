import 'scripts/script';
import 'scripts/modules/swiper-testimonials';
import 'scripts/modules/click-on-course-cards';

import {loadData} from './modules/load-data';

const CARDS_NUMBER = 17;
const CARDS_PER_STEP = 6;

loadData(CARDS_NUMBER, CARDS_PER_STEP);
