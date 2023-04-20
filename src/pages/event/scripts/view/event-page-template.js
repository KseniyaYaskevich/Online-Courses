import {render} from 'scripts/base/utils';
import {createEventListTemplate} from './event-list-template';
import {createCuratorTemplate} from './curator-template';

export const createEventPageTemplate = (item) => {
  const pageTitle = document.querySelector('.page-header__title');
  const pageSubtitle = document.querySelector('.page-header__subtitle');
  const eventList = document.querySelector('.about__event');
  const curatorContainer = document.querySelector('.curator .container');

  pageTitle.innerHTML = item.title;
  pageSubtitle.innerHTML = item.type;

  render(eventList, createEventListTemplate(item));
  render(curatorContainer, createCuratorTemplate(item));
};
