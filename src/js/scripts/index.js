document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.getElementById('burgerButton');
  const navMenu = document.getElementById('nav');
  const navList = document.getElementById('nav-list');
  const navSocial = document.getElementById('nav-social');

  burgerButton.addEventListener('click', function () {
    navMenu.classList.toggle('open');
    navList.classList.toggle('open');
    navSocial.classList.toggle('open');
    burgerButton.classList.toggle('open');
  });
});
