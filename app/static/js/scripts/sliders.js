function _sliderImages () {
  $('.tickets-slider--x3').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    nextArrow: '<button class="btn--prev"></button>',
    prevArrow: '<button class="btn--next"></button>',
    dots: true,
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false,
            dots: true,
            centerMode: false,
            adaptiveHeight: true
          }
        }
      ]
  });
  $('.tickets-slider--x4').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    nextArrow: '<button class="btn--prev"></button>',
    prevArrow: '<button class="btn--next"></button>',
    dots: true,
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false,
            dots: true,
            centerMode: false,
            adaptiveHeight: true
          }
        }
      ]
  });
  $('.jsCardSlider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    centerPadding: '15px',
    nextArrow: '<button class="btn--prev"></button>',
    prevArrow: '<button class="btn--next"></button>',
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false,
            dots: true,
            centerMode: false,
            adaptiveHeight: true
          }
        }
      ]
  });
  $('.jsCardSliderShort').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    centerPadding: '10px',
    nextArrow: '<button class="btn--prev"></button>',
    prevArrow: '<button class="btn--next"></button>',
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: false,
            dots: true,
            centerMode: false,
            adaptiveHeight: true
          }
        }
      ]
  });
}

function _sliderCards () {
  $('.jsSliderCards').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  centerMode: true,
  variableWidth: true,
  dots: true,
  centerPadding: '15px',
  nextArrow: '<button class="btn--prev"></button>',
  prevArrow: '<button class="btn--next"></button>',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: false,
      }
    },
    {
      breakpoint: 1010,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerMode: true,
      }
    }
  ]});


  $('.jsSliderCardsLearn').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    variableWidth: false,
    dots: true,
    centerPadding: '15px',
    nextArrow: '<button class="btn--prev"></button>',
    prevArrow: '<button class="btn--next"></button>',
    responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            centerMode: false,
          }
        },
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            centerMode: false,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerMode: true,
          }
        }
      ]
  });
}

$(document).ready(
    _sliderImages(),
    _sliderCards()
)