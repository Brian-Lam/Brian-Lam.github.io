$(document).ready(function() {
	$(".experience-block").click(function() {
		$(".experience-description").hide();
		$(this).find(".experience-description").fadeIn("fast");
	})
});