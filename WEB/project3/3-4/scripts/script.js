$(function () {
	// 绑定键入搜索项、按下回车事件
	$('.header-search').bind('input propertychange', ajaxGet).bind('keyup', function (event) {
		if (event.keyCode == "13") {
			refresher();
			return false;
		}
	});
	var search;
	// 搜索栏ajax获取数据并以下拉展示
	function ajaxGet() {
		var list = $('.list');
		search = $.trim($('.header-search-input').val());
		if (search == "") {
			list.hide();
			return;
		}
		$.ajax({
			type: "GET",
			url: "./search.json",
			data: {
				"Query": search
			},
			dateType: "json",
			success: function (data, textStatus, jqXHR) {
				// 清空下来列表项
				list.html('');
				$.each(data, function (i) {
					// 搜索值与Query匹配开始动态加载html
					var res = data[i][0];
					if (search === res.Query) {
						// 方法一
						// switch (res.Query) {
						// 	case "鞋":
						// 		$.each(res.Results[0].Suggests, function (index, element) {
						// 			list.append($("<li></li>").text(element.Txt));
						// 		});
						// 		list.show();
						// 		break;
						// 	case "音速3":
						// 		$.each(res.Results[0].Suggests, function (index, element) {
						// 			list.append($("<li></li>").text(element.Txt));
						// 		});
						// 		list.show();
						// 		break;
						// }
						// 方法二 js模板
						var $html = template('search', res.Results[0]);
						list.html($html).show();
					}
				});
			}
		});
	}
	// 回车后页面动态加载搜索匹配内容
	var commodityContainer = $('.commodityContainer'),
		primeContent = commodityContainer.html();

	function refresher() {
		if ($('.header-search-input').val() == "") {
			commodityContainer.html(primeContent);
		}
		$.ajax({
			type: "GET",
			url: "./basketballShoes.json",
			data: {
				"Query": search
			},
			dateType: "json",
			success: function (data, textStatus, jqXHR) {
				$.each(data, function (i) {
					var res_ = data[i][0];
					if (search === res_.Query) {
						commodityContainer.html('');
						var $html = template('basketBallShoes', res_.Results[0]);
						commodityContainer.html($html).show();
					}
				});
			}
		});

	}
});