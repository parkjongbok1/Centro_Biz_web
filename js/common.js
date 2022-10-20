$(document).ready(function(){
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 80) {
    //       $(".header").addClass("active");
    //     } else {
    //       $(".header").removeClass("active");
    //     }
    //   });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 80) {
        $(".header").addClass("active");
      } else {
        $(".header").removeClass("active");
      }
  });

  // $('.quickWrap .toggleBtn').click(function(){
  //   $('.quickWrap').toggleClass('active');
  // });

  $(".side-menu-btn").click(function () {
    $(".side-menu-btn, .meun-bar").toggleClass("active");
  });
});
