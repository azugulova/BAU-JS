$(document).ready(function(){
});


$('li').hover(
	function() {
		$(this).children().show();
	}, function() {
		$(this).children().hide();
	}

);

$('li').click( function() {
	var prev = $('.current-menu-item');
	prev.removeClass('.current-menu-item');
	$(this).addClass('.current-menu-item');
	});

