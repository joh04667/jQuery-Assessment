$(function(){

var clickCount = 0

$('.generate').on('click', function() {
  clickCount ++;

  var counter = "<h4>" + clickCount + "</h4>";
  var deleteButton = "<button class=\"delete\">Delete</button>";
  var changeButton = "<button class='change'>Change</button>";
  $('.newbuttons').append("<div class='container'>" + counter + deleteButton + changeButton + "</div>");
  $('.container h4').text(clickCount);
});


$(document).on('click', '.delete', function(){
 $(this).parent().remove();
});

$(document).on('click', '.change', function(){
 $(this).parent().toggleClass('red');

});







}); // end page ready
