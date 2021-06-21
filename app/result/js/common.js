jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    $('.top-w').toggleClass('bef');
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
      $('.top-w').removeClass('bef');
    }
  });

  if ( $('.top-slider').length ) {
    $('.top-slider').slick({            
      infinite: true,      
      slidesToShow: 1,
      speed: 600,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      cssEase: 'ease-out',
      dots: true,
      
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
      ]
    });
  }

  if ( $('.works-slider').length ) {
    $('.works-slider').slick({            
      infinite: true,      
      slidesToShow: 1,
      speed: 600,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      cssEase: 'ease-out',
      dots: false,
      
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
      ]
    });
  }


  if ($('.slider-for').length) {

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,    
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: false,
      focusOnSelect: true
    });
  }

  if ($('.discounts-slider').length) {
    $('.discounts-slider').slick({            
      infinite: true,
      slidesToShow: 1,
      speed: 600,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      cssEase: 'ease-out',
      dots: true,
      
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
      ]
    });
  }

if ($('.customers-slider').length) {
    $('.customers-slider').slick({            
      infinite: true,
      slidesToShow: 4,
      speed: 600,
      slidesToScroll: 1,
      autoplay: false,
      centerPadding: '130px',
      autoplaySpeed: 4000,
      cssEase: 'ease-out',
      dots: true,
      
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,          
        }
      }
      ]
    });
  }



  $('.rews-slider-min .rews-slide').each(function () {
    let wrapp = $(this).find('.rews-info');
    let imgg = $(this).find('.rews-img-w').clone();
    //console.log(imgg);
    wrapp.append(imgg);
  });





$(".top-mnu, .top-w").click(function (e) {
  e.stopPropagation();
});



$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});


$('.link').click(function(e) {
  $('.modal-overlay_1').fadeIn();
  e.preventDefault();
  $('body').addClass('ohi');    
});

$('.pop-close, .modal-overlay').click(function(e) {
  e.preventDefault();
  $('.modal-overlay').fadeOut();
  $('body').removeClass('ohi');
});

/*$('[data-fancybox="gallery-1"]').fancybox({
  arrows: true,
  infobar: false,
  smallBtn: false,
  toolbar: false,
  iframe : {
    css : {
      width : '950px'
    }
  },    
  slideClass: "myClass",
  baseClass: "myclass"
});*/


$('.top-mnu-li._parent a').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('on');
  $(this).next().toggleClass('on');
});


}); //ready
