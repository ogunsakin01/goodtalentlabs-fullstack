$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  responsiveClass: false,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    660:{
      items: 1
    },
    1000: {
      items: 2,
      loop: false,
    },
  },
});
