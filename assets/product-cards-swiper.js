const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
