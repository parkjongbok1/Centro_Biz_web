$(document).ready(function(){
    $(".premium_desc").slick({
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2500,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
          { breakpoint: 1850,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
            }
          }, 
          { breakpoint: 1750,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
            }
          },          
          { breakpoint: 1650,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
            }
          },          
          { breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
            }
          }]
    });


    // dormitory_slide01
    let dormitorySlide = $('.dormitory_slide01');
    let sliderCounter = $('.pagingInfo');
    let currentSlideCount;
    let totalSlideCount;
    let calc;
  
    dormitorySlide.slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: $('.dormitory-prev'), //이전 화살표
        nextArrow: $('.dormitory-next'), //다음 화살표
        autoplay: true,
        autoplaySpeed: 3200,
        speed: 800,
        // asNavFor: ".dormitory_title01", //다른 슬라이드 연동 여부
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수   
        fade: true,
    });
   
  
    function slickActive() {

        if ($('.d_item01').hasClass('slick-active')) {
          $('.desc.d_01').addClass('active');
        } else if ($('.d_item02').hasClass('slick-active')) {
          $('.desc.d_02').addClass('active');
        } else if ($('.d_item03').hasClass('slick-active')) {
          $('.desc.d_03').addClass('active');
        } else if ($('.d_item04').hasClass('slick-active')) {
          $('.desc.d_04').addClass('active');
      }
    }
    function slickActive02() {

        if ($('.d_item01').hasClass('slick-active')) {
          $('.desc.d_11').addClass('active');
        } else if ($('.d_item02').hasClass('slick-active')) {
          $('.desc.d_22').addClass('active');
        } else if ($('.d_item03').hasClass('slick-active')) {
          $('.desc.d_33').addClass('active');
        } else if ($('.d_item04').hasClass('slick-active')) {
          $('.desc.d_44').addClass('active');
      }
    }
  
    dormitorySlide.on({
        init: function (event, slick) {
  
        },
        beforeChange: function (event, slick, currentSlide, nextSlide) {
            $('.desc').removeClass('active');
        },
        afterChange: function (event, slick, currentSlide, nextSlide) {
            slickActive();
            slickActive02();
        }
    });

    let updateSliderCounter = function(slick, currentSlide) {
  
        // 현재 페이지 index +1 을 해준 이유는 1부터 시작되게 하게끔
        currentSlideCount = slick.slickCurrentSlide() + 1;
  
        // 전체 슬라이드 페이지 갯수
        totalSlideCount = slick.slideCount;
  
        // 현재 페이지 index / 전체 슬라이드 갯수 나누고 * 100을 해서 퍼센페이지화 시킴
        calc = (currentSlideCount / totalSlideCount) * 100;
  
        $('.pagingInfo').text("0" + currentSlideCount + ' / ' + 0 + totalSlideCount);
        // $('.progress').css('width', calc + '%');
    };
  
  
    dormitorySlide.on('init', function(event, slick) {
        premiuSlide.append(sliderCounter);
        updateSliderCounter(slick);
    });
  
    dormitorySlide.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });
  
});
