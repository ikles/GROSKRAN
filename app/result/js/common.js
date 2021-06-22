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
      focusOnSelect: true,
      responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
      ]
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
      ]
    });
  }



  $('.rews-slider-min .rews-slide').each(function () {
    let wrapp = $(this).find('.rews-info');
    let imgg = $(this).find('.rews-img-w').clone();
    //console.log(imgg);
    wrapp.append(imgg.addClass('two'));
  });





  $(".top-mnu, .top-w").click(function (e) {
    e.stopPropagation();
  });



/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");
});*/


$('.products-form-tit-more').click(function () {
  $(this).toggleClass('on');
  $('.products-form').toggleClass('on');
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


$(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 550) {
          $('#button-up').fadeIn();
        } else {
          $('#button-up').fadeOut();
        }
      });

/** При нажатии на кнопку мы перемещаемся к началу страницы */
$('#button-up').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});





}); //ready
