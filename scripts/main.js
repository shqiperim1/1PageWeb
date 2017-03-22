$('nav').onePageNav();

$('.menu-icon').click(function() {
	$('nav li').slideToggle();

});

var menu = $('nav li');

$(window).resize(function() {
	var width = $(window).width();

	if (width > 768 && menu.is(':hidden')) {
		menu.removeAttr('style');
	}


});