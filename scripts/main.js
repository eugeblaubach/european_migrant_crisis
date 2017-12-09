$(document).ready(function(){

  window.addEventListener("scroll", preventMotion, false);
  window.addEventListener("touchmove", preventMotion, false);

  function preventMotion(event)
  {
      event.preventDefault();
      event.stopPropagation();
  }

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
