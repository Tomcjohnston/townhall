$(document).ready(function() {
    $(".").css("display", "none").hide();
    $("header").delay(600).fadeIn(250);
    
    $('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
    console.log("yeet");
});

$( ".t, .h" ).click(function() {
    $(".menubar").addClass("menubar-show");
});
    

