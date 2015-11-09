$(document).ready(() => {
  $('.hamburger').click(() => {
		$('.hamburger').toggleClass('open');
    $('.hamburger-container, .hamburger-navbar, .menu-container, #calendar').toggleClass("open");
	});

  $(window).scroll(() => {
    if ($(window).scrollTop() > 90) {
      if (!$('.hamburger-navbar').hasClass('scrolled') && !$('.hamburger-container').hasClass('scrolled')) {
        $('.hamburger-navbar').addClass('scrolled');
        $('.hamburger-container').addClass('scrolled');
      }
    } else {
      if ($('.hamburger-navbar').hasClass('scrolled') && $('.hamburger-container').hasClass('scrolled')) {
        $('.hamburger-navbar').removeClass('scrolled');
        $('.hamburger-container').removeClass('scrolled');
      }
    }
  });
});
