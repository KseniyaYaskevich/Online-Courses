const tabButtons = document.querySelectorAll('.tabs-nav__button');
const tabContents = document.querySelectorAll('.tabs-content__item');

tabButtons.forEach((button, index) => {

  const buttonOnClick = () => {
    if (!tabContents[index].classList.contains('tabs-content__item--active')) {
      tabContents.forEach((content) => {
        content.classList.remove('tabs-content__item--active');
      });
      tabButtons.forEach((btn) => {
        btn.classList.remove('tabs-nav__button--active');
      });
    }
    tabContents[index].classList.add('tabs-content__item--active');
    tabButtons[index].classList.add('tabs-nav__button--active');
  };

  button.addEventListener('click', buttonOnClick);
});
