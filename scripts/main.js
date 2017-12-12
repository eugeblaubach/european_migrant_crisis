$(document).ready(function(){

  $(".effect").click(function(){
     $(".overlay").hide();
     $(".text").hide();
     $(".overlay").fadeIn(1000);
     $(".text").delay(700).fadeIn(1500);
  });

  $(".fasteffect").click(function(){
     $(".textbox").hide();
     $(".textbox").fadeIn(1500);
  });


});
