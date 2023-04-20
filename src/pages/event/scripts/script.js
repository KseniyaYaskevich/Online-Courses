import 'scripts/script';
import './modules/swiper-events';

import {loadData} from './modules/load-data';
import {eventCardsHandler} from 'scripts/modules/event-cards-handler';
import {spollers} from 'scripts/modules/spollers';
import {createEventPageTemplate} from './view/event-page-template';
import {getItem} from 'scripts/base/storage';

const CARDS_NUMBER = 6;

loadData(CARDS_NUMBER);
eventCardsHandler();
spollers();

window.addEventListener('load', () => {
  createEventPageTemplate(getItem('event'));
});
