$(function () {
	var ele = $('.clip'),
		nav = $('header>nav');
	ele.click(function (event) {
		if (nav.css('top') == '-103px') {
			nav.animate({
				top: '41px'
			}, 700);
		} else {
			nav.animate({
				top: '-103px'
			}, 700);
		}
	});
});