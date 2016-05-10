function createEvent(){
	if ($(window).width() > 990){

			$('li').hover(
				function() {
					var currentHover= $(this).children();
					$('.sub-menu').fadeOut();	
					currentHover.fadeIn();

				}, function(){
					$('.sub-menu').fadeOut();	
				}
				);


			$('a').click( 
				function() {
					$('.current-menu-item').removeClass('current-menu-item');
					$(this).parent().addClass('current-menu-item');
				});

		} else {

			$('li').click( 
				function() {
					$('.sub-menu').slideUp();	
					$(this).children().slideDown();				
				});
		}

}



$(document).ready(function(){

	createEvent();

	$(window).resize(function(){
		$('li').unbind();
		createEvent();

	});	


	$('#mobile-button').click(function(){
		var menu = $('#menu-container');
		if (menu.is(':visible') ) {
			menu.hide();
		} else {
			menu.show();
		}
	});


		

});






