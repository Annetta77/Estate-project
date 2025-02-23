document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.getElementById('burgerButton');
  const navMenu = document.getElementById('nav');
  const navList = document.getElementById('nav-list');
  const navSocial = document.getElementById('nav-social');
  const select = document.getElementById('select');
  const screenWidth = window.innerWidth;

  function updateSelect() {
    if (screenWidth < 1023) {
      select.setAttribute('multiple', '');
    } else {
      select.removeAttribute('multiple');
    }
  };

  updateSelect(select);

  window.addEventListener('resize', updateSelect);

  burgerButton.addEventListener('click', function () {
    navMenu.classList.toggle('open');
    navList.classList.toggle('open');
    navSocial.classList.toggle('open');
    burgerButton.classList.toggle('open');
  });
});
