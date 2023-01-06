const pageBody = document.querySelector('.page__body');
const toggleButton = pageBody.querySelector('.menu__toggle');
const navbarMenu = pageBody.querySelector('.navbar__menu');

const onToggleButtonClick = () => {
  pageBody.classList.toggle('page__body--lock');
  navbarMenu.classList.toggle('is-opened');
};

toggleButton.addEventListener('click', onToggleButtonClick);
