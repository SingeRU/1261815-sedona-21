var navMain = document.querySelector('.main-nav__container');
var navToggle = document.querySelector('.main-nav__toggle');
var navClose = document.querySelector('.main-nav__close');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__container--closed')) {
    navMain.classList.remove('main-nav__container--closed');
    navMain.classList.add('main-nav__container--opened');
  } else {
    navMain.classList.add('main-nav__container--closed');
    navMain.classList.remove('main-nav__container--opened');
  }
});

navClose.addEventListener('click', function() {
  navMain.classList.remove('main-nav__container--opened');
  navMain.classList.add('main-nav__container--closed');
});
