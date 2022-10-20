 $(document).ready(function(){
	
	// $('.top_bt').click(function(){
	// 	$('body,html').animate({'scrollTop':'0'},400)
	// })

	// $('.header .inner').mouseover(function(){
	// 	$('.menu').addClass('scroll01')
	// })
	// $('.header .inner').mouseleave(function(){
	// 	$('.menu').removeClass('scroll01')
	// })


//	$('.gnb>ul>li>a').click(function(){
//		$(this).siblings('div').addClass('active')
//		$(this).addClass('active')
//		$(this).parent().siblings().children('a').removeClass('active')
//		$(this).parent().siblings().children('div').removeClass('active')
//	})
//
//	$('.gnb>ul>li ul li:last-child').click(function(){
//		$(this).parent().parent('div').siblings('a').removeClass('active')
//		$(this).parent().parent('div').removeClass('active')
//	})

//


	// $('.sec01_train').animate({'opacity':'1'},0,function bb(){
	// 	$(this).delay(0).animate({'left':'-1600px'},8500,'linear',function(){
	// 		$(this).css({'left':'500px'})
	// 		$(this).animate({'opacity':'1'},0,bb)
	// 	})
	// })

	// $('.right_scroll span').animate({'opacity':'1'},0,function bb(){
	// 	$(this).delay(0).animate({'top':'145px'},1800,function(){
	// 		$(this).css({'top':'0','opacity':'0'})
	// 		$(this).animate({'opacity':'1'},700,bb)
	// 	})
	// })


 });        






		 $(window).scroll(function(){
			      sc = $(window).scrollTop()
					
					
					if ( sc<21 )
					{
						$('.navi').removeClass('active')
						$('.right_scroll_wrap').removeClass('active')
					}
					if ( sc>21 )
					{
						$('.navi').addClass('active')
						$('.right_scroll_wrap').addClass('active')
					}


		 });


		 $(window).scroll(function(){
			      sc = $(window).scrollTop()
				 $('#sc').html(sc)
					
					
				

			 });
			 
			 
		 


