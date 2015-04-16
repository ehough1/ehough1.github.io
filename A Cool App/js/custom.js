$(document).ready(function(){
  
  $('button#yourNameButton').click(function(){
    $.ajax({
      method: "GET",
      url: "//lit-basin-4940.herokuapp.com/api/yourName"
    }).done(function(response){
      console.log(response);
      $('div#yourName').html("<p>"+response.name+"</p>");
    }).fail(function(msg){
      
    });
  });
  
  $('button#myName').click(function(){
    console.log("button clicked");
    
    var typedName = $('input#myName').val();
    
    $.ajax({
      method: "POST",
      data: {myName: typedName},
      url: "//lit-basin-4940.herokuapp.com/api/myName"
    }).done(function(response){
      console.log(response.allNames);
      var theNamesHtml = '<ul id="allNames">';
      for(var i=0; i < response.allNames.length; i++){
        theNamesHtml += "<li>" +response.allNames[i] + "</li>";
      }
      
      theNamesHtml += "</ul>"
      $('div#myNameResponse').html(theNamesHtml);
    }).fail(function(msg){
      console.log(msg);
    })
  });
  
});
