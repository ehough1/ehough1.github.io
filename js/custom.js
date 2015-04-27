(function ($) {

	new gnMenu( document.getElementById( 'gn-menu' ) );


	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('.gn-menu li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('a.scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	
	//nivo lightbox
	$('.gallery-item a').nivoLightbox({
		effect: 'fadeScale',                             // The effect to use when showing the lightbox
		theme: 'default',                           // The lightbox theme to use
		keyboardNav: true,                          // Enable/Disable keyboard navigation (left/right/escape)
		clickOverlayToClose: true,                  // If false clicking the "close" button will be the only way to close the lightbox
		onInit: function(){},                       // Callback when lightbox has loaded
		beforeShowLightbox: function(){},           // Callback before the lightbox is shown
		afterShowLightbox: function(lightbox){},    // Callback after the lightbox is shown
		beforeHideLightbox: function(){},           // Callback before the lightbox is hidden
		afterHideLightbox: function(){},            // Callback after the lightbox is hidden
		onPrev: function(element){},                // Callback when the lightbox gallery goes to previous item
		onNext: function(element){},                // Callback when the lightbox gallery goes to next item
		errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});

	
})(jQuery);




////////////////////////////////////

   /*Form Submit Ajax Call*/
   
////////////////////////////////////



$(document).ready(function(){
 
  //var endPoint = "http://serene-stream-6052.herokuapp.com";
  var endPoint = "//serene-stream-6052.herokuapp.com";
  
  
   $('button#btnContactUs').click(function(){
	   
	   var name = $('#name').val();
  var email = $('#email').val();
  var subject = $('#subject').val();
  var message = $('#message').val();
  
     
     $.ajax({
        type: "Post",
        url: endPoint + "/api/",
		data: {name: name, email:email, subject:subject, message:message}
      }).done(function(data) {
          console.log( "Received server response: " + data.content );
          //$('#button-one-response').html(data.htmlContent);
		  alert("Message Sent");
        }).fail(function(msg){
          console.log("Ajax fail: " + JSON.stringify(msg));
          //$('#button-one-response').html('<div class="error">Oops we\'ve got an error: <pre>' + JSON.stringify(msg) + '</pre></div>');
		  alert("Ajax Failed "+ JSON.stringify(msg));
        });
       });

});







