$('.sliderPanel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 1300,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    touchThreshold: 3000,
    zIndex: 1
}); 


$('.plan-slider').slick({
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      dots: true,
      arrows: false, 
      speed: 1300,
});

$('.gallery-slider').slick({
      centerPadding: '0',
      slidesToShow: 4,
      dots: false,
      arrows: false, 
      speed: 1300,
      autoplay: true,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3, 
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});


$('.testimonal-slider').slick({
      centerPadding: '0',
      slidesToShow: 3,
      dots: true,
      arrows: false, 
      speed: 1300,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2, 
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

$(".open-image").fancybox();


$(document).on('click', '.goto', function(e) {
    e.preventDefault(); 

    $('#expend-header').hide();

    var href =  $(this).attr('href');

    var windowS = $(window).outerWidth();
    
    var data = 0;

    if( windowS <= 768 ){
          data = 0;
    }
    else{
          data = 70;
    } 
    $('html, body').animate({
        scrollTop: $(href).offset().top - data
    }, 1200);
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 300) { 
        $(".main-header").addClass("darkHeader");
    }
    else{
        $(".main-header").removeClass("darkHeader");   
    }
}); //missing );


$('.hamburger a').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href');

    $(id).slideToggle(); 
})