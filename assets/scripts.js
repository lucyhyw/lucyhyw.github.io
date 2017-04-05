$("#projects-link").click(function() {
	const $destination = $("#experience");
	$("html, body").animate({scrollTop: $destination.offset().top + 20}, 600);

});

$(document).ready(function() {
	$('#header #title').animate({opacity: 1}, "slow", function() {
		$('#header #description').animate({opacity: 1}, "slow");
	});
	
	$('#experience-container').css({"opacity": 0, "top": "-20px"});
});

$(window).scroll(function() {
	const $destination = $("#experience");
	if ($(this).scrollTop() > $destination.offset().top - (0.5 * $(this).height())) {
		$("#experience-container").animate({opacity: 1, "top": "20px"}, 600);
	}
})