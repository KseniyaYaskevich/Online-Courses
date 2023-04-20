export const scroll = () => {
  const toTopBtn = document.querySelector('#button-to-top');

  const scrollToTop = () => {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  toTopBtn.addEventListener('click', scrollToTop);
};
