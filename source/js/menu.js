'use strict';

(function () {
  var mainNav = document.querySelector('.main-nav');
  var mainNavToggle = document.querySelector('.main-nav__toggle');

  var goodsCardButton = document.querySelector('.goods-card__button');
  var addToBasket = document.querySelector('.add-to-basket');
  var itemCardToBasket = document.querySelectorAll('.item-card__to-basket');

  mainNav.classList.remove('main-nav--no-js');

  mainNavToggle.addEventListener('click', function () {
    mainNav.classList.toggle('main-nav--opened');
    mainNav.classList.toggle('main-nav--closed');
  });

  var showModal = function () {
    addToBasket.classList.remove('hidden');
    var sizesButton = addToBasket.querySelector('.sizes__button');
    sizesButton.addEventListener('click', function (e) {
      e.preventDefault();
      addToBasket.classList.add('hidden');
    });
  };
  if (goodsCardButton) {
    goodsCardButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      showModal();
    });
  }

  if (itemCardToBasket) {
    itemCardToBasket.forEach(function (it) {
      it.addEventListener('click', function (evt) {
        evt.preventDefault();
        showModal();
      });
    });
  }

})();
