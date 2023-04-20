import 'scripts/script';
import './modules/swiper-events';

import {loadData} from './modules/load-data';
import {eventCardsHandler} from 'scripts/modules/event-cards-handler';

const CARDS_NUMBER = 30;

loadData(CARDS_NUMBER);
eventCardsHandler();
