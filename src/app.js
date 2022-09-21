$(document).ready(() => {
  /*CAROUSEL MENU*/

  const slickOptions = {
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Next</button>',
  };
  $(".slider").slick(slickOptions);
});
