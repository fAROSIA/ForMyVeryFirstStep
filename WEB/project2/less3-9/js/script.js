$(document).ready(function () {
	// 限定gallery图片高度
	$(window).resize(function () { 
		if ($(window).width() < 768) {
			var h1 = $(".img-thumbnail")[3].getBoundingClientRect().height.toFixed(2)-2;
			$(".spec").height(h1);
		} else {
			var h2 = $(".img-thumbnail")[0].getBoundingClientRect().height.toFixed(2);
			$(".spec").height(h2);
		}
	});
});