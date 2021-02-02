$(document).ready(function(){
	
	function resize_sreen(){
		$win_width=$(window).width();
		if($(".foot_1").length){
			var $hei_foot_1=$(".foot_1").outerHeight(); 
			$(".form_ct").css({"min-height": Number($hei_foot_1)+"px"});
		}
	}
		
	resize_sreen();	
	
	$(window).resize(function() {
	  	resize_sreen();
	});
	
	$(window).load(function() {
	  	resize_sreen();
	});
	
	/***********************************************************************************/
	
	if($(".click_s").length){
		$(".click_s").click(function() {
			$(".form_s").addClass("active");
			$('body').addClass('fixbody');
		});	
		$(".close_form_s").click(function() {
			$(".form_s").removeClass("active");
			$('body').removeClass('fixbody');
		});	
	}
	
	/***********************************************************************************/
	
	if($(".swiper1").length){
		var swiper1 = new Swiper('.swiper1', {	
			autoplay: {
				delay: 5000,
			},
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,					
			},
			speed: 700,
			effect: 'fade',
		});
	}
	
	if($(".swiper2").length){
		var swiper2 = new Swiper('.swiper2', {
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,					
			},
			autoplay: {
				delay: 2000,
			},
			speed: 500,
			slidesPerView: 6,
			spaceBetween: 18,
			breakpoints: {
				1024: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				812: {
					slidesPerView: 4,
					spaceBetween: "2%",
				},
				667: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: "3%",
				},
				480: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: "3%",
				},
			}
		});
	}
	
	if($(".swiper3").length){
		var swiper3 = new Swiper('.swiper3', {	
			navigation: {
				nextEl: '.swiper-button-next-3',
				prevEl: '.swiper-button-prev-3',
			},		
			watchOverflow: true,
			preloadImages: false,
			lazy: {
				loadPrevNext: true,					
			},
			autoplay: {
				delay: 5000,
			},
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 20,
			breakpoints: {
				812: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: "3%",
				},
				568: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: "2%",
				},
				480: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: "3%",
				},
			}
		});
	}
	
	if($(".swiper4").length){
		var galleryTop2 = new Swiper('.gallery-top2', {
			effect: 'fade',
		});
		var galleryThumbs2 = new Swiper('.gallery-thumbs2', {			
			centeredSlides: true,
			slidesPerView: 'auto',
			slideToClickedSlide: true,
		});
		galleryTop2.controller.control = galleryThumbs2;
		galleryThumbs2.controller.control = galleryTop2;
	}
	
	/***********************************************************************************/	
	
	if($(".fcb_vd").length){
		$('.fcb_vd').fancybox();
	}	
	
	if($(".album_ga").length){
		$('.album_ga').fancybox();
	}
	
	if($(".fcb_login").length){
		$('.fcb_login').fancybox({
			iframe : {
				css : {
					width : '300px',
					height: '200px'
				}
			}
		});
	}
	
	/***********************************************************************************/	
	
	$("a[href='#neo_ct']").click(function() {
		$('html, body').animate({
			scrollTop: $("#neo_ct").offset().top - 0
		}, 500);
		return false;
	});	
		
	/***********************************************************************************/	
	
	
	$(".click_lang").click(function(){
		var val_lang=$(this).attr("val_lang");	 
		var val_link=$(this).attr("val_link");	 
		$.get('librarys/sec.php?kieu=1&giatri='+val_lang,function(data){
			window.location.href = val_link;
		});
	});
	
	/***********************************************************************************/	
	
	if($(".back_top_top").length){
		$(window).scroll(function(){
			if ($(this).scrollTop() > 0) {
				$('.back_top_top').attr("style","display: block");
			} else {
				$('.back_top_top').attr("style","display: none");
			}
		});
		$(".back_top_top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			});
		});
	}
	
	/***********************************************************************************/	
	
	function goBack() {
		window.history.back();
	}
	
	/***********************************************************************************/	
	
	$(".icon_mb").click(function(e) {
		$val=$(".icon_mb").attr("val");
		if($val==0){
			$(".menu_mobile").attr("style","visibility: visible;");
			$(this).attr("val",1);
			$('body').addClass("ad_body");
		}
	});
	$(".close_mb").click(function() {
		$(".menu_mobile").removeAttr("style");
		$(".icon_mb").attr("val",0);
		$('body').removeClass("ad_body");
	});
	
});