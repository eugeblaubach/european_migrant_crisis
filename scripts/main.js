$(document).ready(function(){

  document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });

  $(".effect").click(function(){
     $(".overlay").hide();
     $(".textbox").hide();
     $(".overlay").fadeIn(1000);
     $(".textbox").delay(700).fadeIn(1500);
  });

  $(".fasteffect").click(function(){
     $(".textbox").hide();
     $(".textbox").fadeIn(1500);
  });


});
