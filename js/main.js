$(function(){
  
  $('.slider-blog__inner').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
  });
  
  $(".menu a, .logo__img, .footer__logo-img").on("click", function (e) {
    e.preventDefault();
		var id  = $(this).attr('href'),
    top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
  
  $('.menu__btn, .menu a').on('click', function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });
  
  var mixer = mixitup('.gallery__content');

  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

});