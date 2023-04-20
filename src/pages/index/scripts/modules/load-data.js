import {getData} from 'scripts/base/get-data';
import {getItems} from 'scripts/base/utils';
import {render} from 'scripts/base/utils';
import {createCourseTemplate} from 'scripts/view/course-template';
import {createEventTemplate} from 'scripts/view/event-template';
import {createBlogItemTemplate} from 'scripts/view/blog-item-template';

export const loadData = (cardsNumber, str) => {
  const cardsWrapper = document.querySelector(`.${str}__list`);

  getData(`${str}`).then((data) => {
    const cards = getItems(data, cardsNumber);

    cards.forEach((item) => {
      if (str === 'courses') {
        render(cardsWrapper, createCourseTemplate(item, 'horizontal'));
      }
      if (str === 'events') {
        render(cardsWrapper, createEventTemplate(item));
      }
      if (str === 'blog') {
        render(cardsWrapper, createBlogItemTemplate(item));
      }
    });
  });
};
