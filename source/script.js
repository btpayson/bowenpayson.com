$(document).ready(function(){
	$('.navigation-bar').hover(function()
		{
			$(this).fadeTo('fast',.75);
/* 			$(this).animate({height: '+=10px'}); */
		},
	    function()
	    {
	        $(this).fadeTo('fast',1);
/* 			$(this).animate({height: '-=10px'}); */
	    });
});