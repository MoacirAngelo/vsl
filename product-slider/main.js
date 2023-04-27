jQuery(document).ready(function ($) {
  const owl = $("#owl-demo-2");

  owl.owlCarousel();
  $("#next").click(function () {
    owl.trigger('next.owl.carousel');
	});
	$("#prev").click(function () {
    owl.trigger('prev.owl.carousel', [200]);
	})
});

