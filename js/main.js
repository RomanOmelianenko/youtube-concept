const swiper = new Swiper(".channel-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: ".channel-button-next",
    prevEl: ".channel-button-prev",
  },
});
