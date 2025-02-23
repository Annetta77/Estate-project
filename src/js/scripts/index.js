document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.getElementById('burgerButton');
  const navMenu = document.getElementById('nav');
  const navSocial = document.getElementById('nav-social');
  const select = document.getElementById('select');

  burgerButton.addEventListener('click', function () {
    navMenu.classList.toggle('open');
    navSocial.classList.toggle('nav__social-mob-active');
    burgerButton.classList.toggle('open');

    if (select.hasAttribute('multiple')) {
      select.removeAttribute('multiple');
    } else {
      select.setAttribute('multiple', 'multiple');
    }
  });
});
