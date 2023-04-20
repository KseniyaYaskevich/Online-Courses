import {getData} from 'scripts/base/get-data';
import {getItems} from 'scripts/base/utils';
import {createCards} from './create-cards';
import {sortCards} from './sort-cards';

export const loadData = (cardsNumber, cardsPerStep) => {

  getData('courses').then((data) => {
    const cards = getItems(data, cardsNumber);

    createCards(cards, cardsPerStep);
    sortCards(cards, cardsPerStep);
  });
};
