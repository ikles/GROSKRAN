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


  if ($('.prod-items-slider').length) {
    $('.prod-items-slider').slick({            
      infinite: true,
      slidesToShow: 4,
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
          slidesToShow: 4
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

  if ( $('.scard-tabs').length ) {

    $('.scard-tabs .tabs_control_link').click(function (e) {
      e.preventDefault();

      var item = $(this).closest('.scard-tabs .tabs_control_item'),
      contentItem = $('.scard-tabs .tabs_content_item'),
      itemPosition = item.index();

      contentItem.eq(itemPosition)
      .add(item)
      .addClass('active')
      .siblings()
      .removeClass('active');

    });
  }


 /* $('.ordform-label').click(function (e) {    
    $('.ordform-label-span').removeClass('off');
    $(this).find('.ordform-label-span').addClass('off');  
  })
  */


  $('.scard-min').click(function (e) {
    e.preventDefault();
    $('.scard-min').removeClass('active');
    $(this).addClass('active');
    const big = $('.scard-gal-big img');
    const href = $(this).attr('href');
    big.attr('src', href);
  });


  $( ".ordform-label" ).focusin(function(){
    $(this).find('.ordform-label-span').addClass('off');
  });
  $( ".ordform-label" ).focusout(function() {
    if (! $(this).find('.ordform-input').val().length ) {
      $(this).find('.ordform-label-span').removeClass('off');
    }    
  });


  $('.prod-item .btn, .scard-ord .btn-w100').click(function(e) {
    e.preventDefault();
    $('.modal-overlay_1').fadeIn();    
    $('body').addClass('ohi');
  });




  $('.pop-close, .modal-overlay').click(function(e) {
    e.preventDefault();
    $('.modal-overlay').fadeOut();
    $('body').removeClass('ohi');
  });




  $('.rews-slider-min .rews-slide').each(function () {
    let wrapp = $(this).find('.rews-info');
    let imgg = $(this).find('.rews-img-w').clone();
    //console.log(imgg);
    wrapp.append(imgg.addClass('two'));
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

$(".top-mnu, .top-w, .modal-form__block, .eye-3").click(function (e) {
  e.stopPropagation();
});



$('.products-form-tit-more').click(function () {
  $(this).toggleClass('on');
  $('.products-form').toggleClass('on');
});


if ( $('*[data-fancybox="gallery-1"]').length ) {

$('[data-fancybox="gallery-1"]').fancybox({
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
});
}

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


if ($('select').length) {
  $('select').select2({
    minimumResultsForSearch: -1
  });  
}


}); //ready
