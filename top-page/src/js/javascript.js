$(function(){
  $(".hamburger-menu").click(function(){
    $("#g-nav").toggleClass('panelactive');
  });
  $(".batu-btn").click(function(){
    $("#g-nav").removeClass('panelactive');
  });
});
