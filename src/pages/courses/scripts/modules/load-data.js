import {getData} from 'scripts/modules/get-course-data';
import {getItems} from 'scripts/modules/utils';
import {createCards} from './create-cards';
import {sortCards} from './sort-cards';

export const loadData = (cardsNumber, cardsPerStep) => {

  getData().then((data) => {
    const cards = getItems(data, cardsNumber);

    createCards(cards, cardsPerStep);
    sortCards(cards, cardsPerStep);
  });
};
