import {getData} from 'scripts/base/get-data';
import {getItems} from 'scripts/base/utils';
import {render} from 'scripts/base/utils';
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
