const spollerButtons = document.querySelectorAll('.spoller__button');
const spollerContents = document.querySelectorAll('.spoller__text');

spollerButtons.forEach((button, index) => {

  const spollerButtonOnClick = () => {
    spollerContents[index].classList.toggle('spoller__text--active');
    spollerButtons[index].classList.toggle('spoller__button--active');
  };

  button.addEventListener('click', spollerButtonOnClick);
});
