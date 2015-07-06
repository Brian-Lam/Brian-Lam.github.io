$(document).ready(function() {
	var first_pic = $(".gallery-pic:first").attr("src").replace("thumbnails/", "");
	$("#big-pic").attr("src", first_pic);

	$(".gallery-pic").click(function() {
		var img_url = $(this).attr("src").replace("thumbnails/", "");
		$("#big-pic").attr("src", img_url);
	})
});