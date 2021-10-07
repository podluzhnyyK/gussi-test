/* eslint-disable no-const-assign */
/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  spaceBetween: 30,
  effect: 'fade',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function(swiper, current, total) {
      return '0' + current + ' — ' + '0' + total;
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// question
const items = document.querySelectorAll('.question-choice');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
