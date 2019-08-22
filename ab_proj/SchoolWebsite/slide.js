$(".toggle, main").click(function(){
  $(".flyout, .opener, main").toggleClass("hidden");
  $(".toggle").toggleClass("active");
});