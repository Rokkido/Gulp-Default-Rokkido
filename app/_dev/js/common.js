;document.addEventListener('DOMContentLoaded', () => {

	// menu btn
	$('.header-main .menu-wrap button.menu').click(function(){
		$(this).toggleClass('active');
		$('.header-main nav').toggleClass('active');
	});


	// scroll to block
	$('[data-scroll-from]').click(function(e){
		e.preventDefault();
		var scroll = $(this).attr('data-scroll-from');

		$('html, body').animate({
			scrollTop: $('[data-scroll-to='+scroll+']').offset().top - $('.header-main').outerHeight()
		}, 1000);
	});


	// Hide menu
	function hideMobMenu(){
		$('.header-main .menu-wrap button.menu').removeClass('active');
		$('.header-main nav').removeClass('active');
	}

	$(window).scroll(hideMobMenu);

});