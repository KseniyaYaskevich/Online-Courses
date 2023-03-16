import 'scripts/script';
import 'scripts/modules/spollers';

import {createEventPageTemplate} from './view/event-page-template';
import {getItem} from 'scripts/base/storage';

window.addEventListener('load', () => {
  createEventPageTemplate(getItem('event'));
});
