function clickOrHover(){


	$('li').hover(
		function() {
			if ($(window).width() > 990){
				var currentHover= $(this).children();
				$('.sub-menu').fadeOut();	
				currentHover.fadeIn();

			} else {

			}
		}
		, function(){
			if ($(window).width() > 990){
				$('.sub-menu').fadeOut();
			} else {

			}	
		}
		);


	$('a').click( 
		function() {
			if ($(window).width() > 990){
				$('.current-menu-item').removeClass('current-menu-item');
				$(this).parent().addClass('current-menu-item');
			} else {

			}	

		});


	if ($(window).width() <= 990){

		$('li').click(function() {
			if ($(this).children().next().is(':visible')) {
				$(this).children().next().hide();
			} else {
				$(this).children().next().show();
			}
		});

	} else {

	}

}



$(document).ready(function(){

	clickOrHover();



 $('#mobile-button').click(function(){
 	var menu = $('#menu-container');
	 menu.show();
	 $('#mobile-close').show();
	 $('#mobile-button').hide();
 });


 $('#mobile-close').click(function(){
  	var menu = $('#menu-container');
	 menu.hide();
	 $('#mobile-close').hide();
	 $('#mobile-button').show();
 });

 $(window).resize(function(){
 	if($(window).width() > 991)
 	{
 		$('#mobile-close').hide();
 		$('#mobile-button').hide();	
 	} else {
 		$('#mobile-button').show();			
 	}
 })

});







