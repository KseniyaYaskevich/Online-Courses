import {getData} from 'scripts/modules/get-data';
import {getItems} from 'scripts/modules/utils';
import {render} from 'scripts/modules/utils';
import {createBlogItemTemplate} from 'scripts/view/blog-item-template';

const cardsWrapper = document.querySelector('.blog__list');

export const loadData = (cardsNumber) => {
  getData('blog').then((data) => {
    const cards = getItems(data, cardsNumber);

    cards.forEach((item) => {
      render(cardsWrapper, createBlogItemTemplate(item, 'swiper-slide'));
    });
  });
};
