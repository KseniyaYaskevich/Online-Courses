import {render} from 'scripts/modules/utils';
import {createCuratorTemplate} from './curator-template';
import {createEventListTemplate} from './event-list-template';

export const createCoursePageTemplate = (item) => {
  const pageTitle = document.querySelector('.page-header__title');
  const pageAbout = document.querySelector('.about__desc');
  const aboutList = document.querySelector('.about__list');
  const eventList = document.querySelector('.event__list');
  const curatorContainer = document.querySelector('.curator .container');

  pageTitle.innerHTML = item.title;
  pageAbout.innerHTML = item.description;

  item.themes.forEach((theme) => {
    render(aboutList, `<li class="about__item bulleted-list__item">${theme}</li>`);
  });

  render(eventList, createEventListTemplate(item));
  render(curatorContainer, createCuratorTemplate(item));

};
