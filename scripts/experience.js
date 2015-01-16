$(document).ready(function(){
	$(".info-less").click(function() {
		$(this).next(".job-description").fadeToggle("fast");
	})
})