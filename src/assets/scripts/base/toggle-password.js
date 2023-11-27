export const togglePassword = () => {
  const passwordButtons = document.querySelectorAll('.form-modal__show-password');
  const passwordInputs = document.querySelectorAll('input[type="password"]');
  const passwordSvgs = document.querySelectorAll('.form-modal__show-password svg use');
  const spritePath = 'assets/images/sprite.svg';

  passwordButtons.forEach((button, index) => {

    const onPasswordButtonClick = () => {
      if (passwordInputs[index].getAttribute('type') === 'password') {
        passwordInputs[index].setAttribute('type', 'text');
        passwordSvgs[index].setAttribute('xlink:href', `${spritePath}#closedEye`);
      } else {
        passwordInputs[index].setAttribute('type', 'password');
        passwordSvgs[index].setAttribute('xlink:href', `${spritePath}#eye`);
      }
    };

    button.addEventListener('click', onPasswordButtonClick);
  });
};
