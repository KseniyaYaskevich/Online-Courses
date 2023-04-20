import {getData} from 'scripts/base/get-data';
import {getItems} from 'scripts/base/utils';
import {render} from 'scripts/base/utils';

import {createBlogItemTemplate} from 'scripts/view/blog-item-template';
import {sortCards} from './sort-cards';

const cardsWrapper = document.querySelector('.blog__list');

export const loadData = (cardsNumber) => {
  getData('blog').then((data) => {
    const cards = getItems(data, cardsNumber);
    cards.forEach((card) =>
      render(cardsWrapper, createBlogItemTemplate(card, 'swiper-slide')));
    sortCards(cards);
  });
};
