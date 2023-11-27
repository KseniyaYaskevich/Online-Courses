import {trapTabKey} from './trap-tab-key';

export const menu = () => {
  const pageBody = document.querySelector('.page__body');
  const navbarMenu = pageBody.querySelector('.navbar__menu');
  const toggleButton = pageBody.querySelector('.menu__toggle');
  let lastFocusedElement;

  const closeMenu = () => {
    pageBody.classList.remove('page__body--lock');
    navbarMenu.classList.remove('is-opened');

    lastFocusedElement.focus();
  };

  const onToggleButtonClick = () => {
    pageBody.classList.toggle('page__body--lock');
    navbarMenu.classList.toggle('is-opened');

    if (navbarMenu.classList.contains('is-opened')) {
      lastFocusedElement = document.activeElement;

      trapTabKey(navbarMenu);

      navbarMenu.addEventListener('keydown', (e) => {
        if (e.keyCode === 27 || e.key === 'Escape' || e.key === 'Esc') {
          closeMenu();
        }
      });
    }
  };

  toggleButton.addEventListener('click', onToggleButtonClick);
};
