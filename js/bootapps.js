$(document).ready(function() {

	/* toggle-nav */
	$( ".showLeft" ).click(function(e) {
		e.preventDefault();
		$("#ba-spmenu-s1").toggleClass("ba-spmenu-open");
		$("#ba-overlay").toggleClass("ba-show");
		
	});
	
	$( ".showRight" ).click(function(e) {
		e.preventDefault();
		$("#ba-spmenu-s2").toggleClass("ba-spmenu-open");
		$("#ba-overlay").toggleClass("ba-show");
		
	});
	
	$( ".showLeftPush" ).click(function() {
		//$(this).toggleClass("active");
		$("body").toggleClass("ba-spmenu-push-toright");
		$("#ba-spmenu-s1").toggleClass("ba-spmenu-open");
		
	});


	$('.carousel').carousel({
	  interval: false
	})

	
}); //ready end

/* Fix scroll bounce on iPhone iPad */
$('.ba-scroll').each(function(){
	new ScrollFix($(this).get(0));
	//console.log($(this).get( 0 ));
});

/* iPad IOS 7 Landscape 20px fix */
if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && !window.navigator.standalone) {
    $('html').addClass('ipad ios7');
}

/* PREVENT TOUCHMOVE EXCEPT SCOLL CLASS */
var handleMove = function (e) {
	if (!$(e.target).closest('.ba-scroll, .ba-scroll-x').length) { e.preventDefault(); }
}
document.addEventListener('touchmove', handleMove, true);

$(".height").click(function(){
 // alert($("#header").height());
});

/* Hide overlay */
$('#ba-overlay, #ba-spmenu-s1 a, #ba-spmenu-s2 a').click(function() {	
	//$(this).removeClass('ba-show');
	$('#ba-overlay').removeClass('ba-show');
	$("#ba-spmenu-s1").removeClass("ba-spmenu-open");
	$("#ba-spmenu-s2").removeClass("ba-spmenu-open");
});


/* Make button active on click/touch */
$('.nav li').click(function() {	
	$('.nav li').removeClass("active");
	$(this).addClass('active');
});

$('.ba-nav-tab a').click(function() {	
	$('.ba-nav-tab a').removeClass("active");
	$(this).addClass('active');
});

$('#footer a').click(function() {	
	$('#footer a').removeClass("active");
	$(this).addClass('active');
});

/* Hide back button */
$('.ba-hide-bck').click(function() {	
	$('#ba-bck').addClass('ba-hide');
});
/* Show back button */
$('.ba-show-bck').click(function() {	
	$('#ba-bck').removeClass("ba-hide");
});

/* FLOATING ALERT */
ba_alert = function () {}
ba_alert.notify = function (message, notify, timeout) {
    $('<div id="ba-alert" class="alert alert-' + notify + ' fade in"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + message + '&nbsp;&nbsp;</div>').appendTo('body');
    setTimeout(function () {
        $(".alert").alert('close');
    }, timeout);

}
// How to use: ba_alert.notify('Your text goes here <strong>html text</strong>', 'success', 4000);

// $(selector)[0].scrollHeight // peut etre utile pour mettre prevent default quand la zone the scroll est non scrollable
function androScroll() {
  $('.ba-scroll').scroll(function(){

    if($(this).scrollTop()==0){

		thisID = $(this).attr('id');
		//preventmove(thisID);
		//$('#'+thisID).scrollTop($('#'+thisID).scrollTop()+1);
		
		setTimeout(function(){ 
		//alert('scroll to 0');
		setupScroll(); 
		//$('#'+thisID).animate({"scrollTop": 50}, "fast"); // Width jQuery animate
		$('#'+thisID).scrollTop($('#'+thisID).scrollTop()+1);
		
		},500);
    }
  });
}


// default is slide, option: slide2, fade, pop, scaleslide
function baTransition(trans) {
	   $('#homecarousel').addClass('carousel-'+trans);
}

	// pas utilisé en ce moment, test pour empêcher Android de montrer la bar adress quand scrolltop to zero
	function preventmove(element) {
		document.getElementById(element).addEventListener('touchmove', function (e) {e.preventDefault();}, false);
		document.getElementById(element).addEventListener('touchstart', function (e) {e.preventDefault();}, false);
		//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
		//document.addEventListener('touchstart', function (e) { e.preventDefault(); }, false);
		setTimeout(function () {	
			document.getElementById(element).addEventListener('touchmove', function (e) {e.preventDefault();}, true);
			document.getElementById(element).addEventListener('touchstart', function (e) {e.preventDefault();}, true);
			//document.addEventListener('touchmove', function (e) { e.preventDefault(); }, true);
			//document.addEventListener('touchstart', function (e) { e.preventDefault(); }, true);									
		}, 2000); 
	}