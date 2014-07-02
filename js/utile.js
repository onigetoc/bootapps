$( "#changeStyle a" ).bind('click', function(e) {
	e.preventDefault();
	//$(this).toggleClass("active");
	var styleurl = $(this).data("url");
	//alert(styleurl);
	//$('link[href="'+styleurl+'"]').attr('href',styleurl);
	$("link:first").attr("href", styleurl);
	
	// find a way to set carousel item color
	setTimeout(function(){ 
		var bgcolor = $('body').css('background-color');
		$('.carousel .item').css('background-color', bgcolor);			
	},1000);

});