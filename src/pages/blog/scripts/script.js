import 'scripts/script';

import './modules/swiper-blog';

import {loadData} from './modules/load-data';
import {blogCardsHandler} from 'scripts/modules/blog-cards-handler';

const CARDS_NUMBER = 66;

loadData(CARDS_NUMBER);
blogCardsHandler();
