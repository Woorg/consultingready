import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';

// import 'ion-rangeslider';
// import Dropzone from 'dropzone';
// import 'magnific-popup';
// import slick from 'slick-carousel';
// import "jquery-mask-plugin";
// import bound from 'bounds.js';



(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #82B93C',
    'color: #fff',
    'display: inline-block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.56',
    'text-align: left',
    'font-size: 14px',
    'font-weight: 400'
  ].join(';');

  console.log('%c developed by igor gorlov gorlov https://webjeb.ru', styles);

  // Lazyload images

  let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    load_delay: 50,
    use_native: true
  });


  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }
  
  $(function() {

    // Header

    // const $header = $('.header');

    // console.log($header.scrollTop());
    // $header.scrollTop();


    // $(window).on('scroll', function () {
    //   if( $(window).scrollTop() >= $header.outerHeight() ) {
    //     $header.addClass('header_fixed');
    //   } else {
    //     $header.removeClass('header_fixed');
    //   }
    // });


    // if( $(window).scrollTop() >= $header.outerHeight() ) {
    //   $header.addClass('header_fixed');
    // } else {
    //   $header.removeClass('header_fixed');
    // }


    // Nav

    // const $navButton = $('.nav__button');

    // $navButton.on('click', function (e) {
    //   e.preventDefault();

    //   $(this).parent().toggleClass('nav_open');
    // });


    // $(document).on('click', function(e) {
    //   if (!$(e.target).closest('.header__nav.nav_open').length) {
    //     $('.header__nav.nav').removeClass('nav_open');
    //   }
    // });


    // Nav to section

    // $('.header__nav a').on( 'click', function(e) {
    //   e.preventDefault();
    //   let _scroll = $(this).attr('href');
    //   if (_scroll != '#' && $(_scroll).length) {
    //     $('html, body').animate({ scrollTop: $(_scroll).offset().top - 150  }, 300);
    //   }
    // });


    // Typograf

    const tp = new Typograf({locale: ['ru', 'en-US']});
    const serviceText = document.querySelector('.services__text');
    const heroText = document.querySelector('.hero__text');

    serviceText.innerHTML = tp.execute(serviceText.innerHTML);
    heroText.innerHTML = tp.execute(heroText.innerHTML);




    // Hero slider

    const $heroSlider = $('.hero__slider');

    if ($heroSlider.length) {

      $heroSlider.slick({
        slidesToShow: 1,
        dots: false,
        arrows: true,
        speed: 600,
        // infinite: false,
        fade: true,
        waitForAnimate: false,
        adaptiveHeight: true,
        // appendArrows: '.hero__nav-buttons',
        // prevArrow: '.hero__arrow_prev',
        // nextArrow: '.hero__arrow_next',
      });

    }

    // Practice slider

    const $practiceSlider = $('.practice__slider');

    if ($practiceSlider.length) {

      $practiceSlider.slick({
        slidesToShow: 1,
        dots: false,
        arrows: true,
        speed: 600,
        // infinite: false,
        fade: true,
        waitForAnimate: false,
        adaptiveHeight: true,
        appendArrows: '.practice__slider-nav',
        // prevArrow: '.hero__arrow_prev',
        // nextArrow: '.hero__arrow_next',
      });

    }

    // Trust carousel

    const $trustCarousel = $('.trust__carousel');

    if ($trustCarousel.length) {

      $trustCarousel.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 600,
        // infinite: false,
        // fade: true,
        lazyLoad: 'progressive',
        touchMove: true,
        focusOnSelect: true,
        waitForAnimate: true,
        adaptiveHeight: true,
        appendArrows: '.trust__carousel-nav',
        // prevArrow: '.hero__arrow_prev',
        // nextArrow: '.hero__arrow_next',
      });

    }

    // Faq

    const $question = $('.faq__item');

    $question.on('click', function () {
      $(this).siblings().removeClass('faq__item_open');
      $(this).toggleClass('faq__item_open');
    });

    // Tabs

    // $('.tabs__nav li').click(function(e) {
    //   e.preventDefault();
    //   var a = $(this),
    //   parent = a.parents('.tabs'),
    //   nav = parent.children('.tabs__nav').children('li'),
    //   box = parent.children('.tabs__content').children('div');

    //   if (!a.hasClass('active')) {
    //     a.addClass('active')
    //       .siblings().removeClass('active');

    //     box.eq(a.index()).addClass('active')
    //       .siblings().removeClass('active');
    //   }
    // });



    // Phone Mask

    // $('.form__field_phone input').mask("+7(999)999-99-99", {
    //   placeholder: "номер телефона"
    // });


    // Popup

    // $('.popup-open').magnificPopup({
    //   type: 'inline',
    //   midClick: true
    // });

     
    // Gallery
    

    // $('.gallery__link').magnificPopup({
    //   type: 'image',
    //   gallery: {
    //     enabled: true
    //   }
    // });
   

  });

})(jQuery);
