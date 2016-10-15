$(function(){
	$('.menu-wrap .submenu').click(function(){
		$(this).addClass('open');
		$(this).find('.arrow').toggleClass('icon-cancel');
		$(this).find('.submenu-wrap').slideToggle();
	})

	$('.menu-button').click(function(e){
		e.stopPropagation();
		$('.body-wrap').addClass('open');
	})

	$('.content-all-wrap').click(function(){
		if( $('.body-wrap').hasClass('open') ){
			$('.body-wrap').removeClass('open');
		}
	})




})
