const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav-list');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.header__nav-link');

burger.addEventListener('click', () => {
  nav.classList.toggle('header__nav-list--open');
  burger.classList.toggle('burger--open');
  header.classList.toggle('header--open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('header__nav-list--open');
    burger.classList.remove('burger--open');
  });
})
document.addEventListener('click', (event) => {
  if (nav.classList.contains('header__nav-list--open')) {
    if (!nav.contains(event.target) && !burger.contains(event.target)) {
      nav.classList.remove('header__nav-list--open');
      burger.classList.remove('burger--open');
      header.classList.remove('header--open');
    }
  }
});