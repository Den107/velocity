$(function () {
  //Slider#1
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt="arr"></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt="arr"></button>',
    responsive: [
      {
        breakpoint: 969,
        settings: {
          arrows: false,
        }
      }
    ],
  });

  //Tabs
  $('.tab').on('click', function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    $('.product-slider').slick('setPosition');
  });

  //Favorite
  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active');
  });

  //Slider#2
  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt="arr"></button>',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt="arr"></button>',
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      }
    ],
  });

  //Form
  $('.filter-style').styler();

  //Drop
  $('.filter__item-drop, .filter__extra').on('click', function () {
    $(this).toggleClass('filter__item-drop--active');
    $(this).next().slideToggle(200);
  });

  //Range
  $('.js-range-slider').ionRangeSlider({
    type: 'double',
    min: 100000,
    max: 500000,
  });

  //View Buttons
  $('.catalog__filter-btngrid').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').removeClass('product-item__wrapper--list');
  });

  $('.catalog__filter-btnline').on('click', function () {
    $(this).addClass('catalog__filter-button--active');
    $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
    $('.product-item__wrapper').addClass('product-item__wrapper--list');
  });

  //Rate
  $(".rate-yo").rateYo({
    ratedFill: "#1c62cd",
    spacing: '7px',
    normalFill: "#C4C4C4"
  });

  //Burger-menu
  $('.menu__btn').on('click', function () {
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  //Footer-drop
  $('.footer__topdrop').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__topdrop--active');
  });

  //Filter-drop
  $('.aside__btn').on('click', function () {
    $(this).next().slideToggle();
  });
});