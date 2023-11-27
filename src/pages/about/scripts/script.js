import 'scripts/script';
import 'scripts/modules/swiper-testimonials';

import {loadData} from './modules/load-data';
import {blogCardsHandler} from 'scripts/modules/blog-cards-handler';
import {videoPlayer} from 'scripts/modules/video-player';

const CARDS_NUMBER = 3;

loadData(CARDS_NUMBER);
blogCardsHandler();

videoPlayer();
