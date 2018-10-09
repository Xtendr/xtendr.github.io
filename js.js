$(".floating-button").on('click', function() {
  $(".floating-button").toggleClass("rotate-45deg");
  $(".off-canvas").toggleClass("off-canvas-back");
});

$("li img").on('click', function() {
  $(".floating-button").toggleClass("rotate-45deg");
  $(".off-canvas").toggleClass("off-canvas-back");
});

$(".profile-img img").hover(function(){
	$(".bottom-off-canvas").toggleClass("bottom-off-canvas-back");
});

$(".bottom-off-canvas").hover(function(){
	$(".bottom-off-canvas").toggleClass("bottom-off-canvas-back");
});
