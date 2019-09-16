$(document).ready(function(){
/*
	Códigos de invocação dos plugins.
*/
	$('.collapsible').collapsible();
	
	$('.sidenav').sidenav();

	$('.parallax').parallax();



	 var nav = $('.navbar-fixed');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

});























