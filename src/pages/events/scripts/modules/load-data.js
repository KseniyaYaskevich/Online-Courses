import {getData} from 'scripts/modules/get-data';
import {getItems} from 'scripts/modules/utils';
import {render} from 'scripts/modules/utils';
import {createEventTemplate} from 'scripts/view/event-template';

const cardsWrapper = document.querySelector('.events__list');

export const loadData = (cardsNumber) => {
  getData('events').then((data) => {
    const cards = getItems(data, cardsNumber);

    cards.forEach((item) => {
      render(cardsWrapper, createEventTemplate(item, 'swiper-slide'));
    });
  });
};
