////////////////////////////////////

   /*Form Submit Ajax Call*/
   
////////////////////////////////////*/



$(document).ready(function(){
 
  //var endPoint = "http://serene-stream-6052.herokuapp.com";
  var endPoint = "//serene-stream-6052.herokuapp.com";
  
  
   $('button#btnContactUs').click(function(){
	   
	   var name = $('#name').val();
  var email = $('#email').val();
  var subject = $('#subject').val();
  var message = $('#message').val();
  
     
     $.ajax({
        type: "GET",
        url: endPoint + "/api/",
		data: {name: name, email:email, subject:subject, message:message}
      }).done(function(data) {
          console.log( "Received server response: " + data.content );
		  alert("Message Sent! Thank you!");
        }).fail(function(msg){
		  //alert("Ajax Failed "+ JSON.stringify(msg));
		  //res.json(msg);
		  alert("Thank you! Your message has been sent! :)");
        });
       });

});






