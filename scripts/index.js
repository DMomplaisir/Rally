// Sign up flow, and register

$(function(){

  $('#register').hide();
  $('#sign').click(function(){
    $('#holder').remove();
    $('#register').show(1000);
  });
  $('#signupbutton').click(function(){
    window.location.replace("news.html");
  })


});
