import 'scripts/script';
import 'scripts/modules/spollers';
import './modules/swiper-events';

import {loadData} from './modules/load-data';
import {eventCardsHandler} from 'scripts/modules/event-cards-handler';
import {createEventPageTemplate} from './view/event-page-template';
import {getItem} from 'scripts/base/storage';

const CARDS_NUMBER = 6;

window.addEventListener('load', () => {
  createEventPageTemplate(getItem('event'));
});
