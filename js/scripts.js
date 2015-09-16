$(document).ready(function() {
  $('.hamburger').click(function(){
		$(this).toggleClass('open');
    $('.hamburger-container, .menu-container').toggleClass("open");
	});
});
