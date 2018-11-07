'use strict';

(function () {
  var mainNav = document.querySelector('.main-nav');
  var mainNavToggle = document.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav--no-js');

  mainNavToggle.addEventListener('click', function () {
    mainNav.classList.toggle('main-nav--opened');
    mainNav.classList.toggle('main-nav--closed');
  });

})();
