// ui-search
$.fn.uiSearch = function () {
  var ui = $(this);
  $('.ui-search-selected', ui).on('click', function () {
    $('.ui-search-select-list').show();
    return false;
  });
  $('.ui-search-select-list a', ui).on('click', function () {

    $('.ui-search-selected').text($(this).text());
    $('.ui-search-select-list').hide();
    return false;
  });
  $('body').on('click', function () {
    $('.ui-search-select-list').hide();
  });
};
// tab切换
$.fn.uiTabSwitch = function () {
  $('.tab-item').on('click', function () {
    var index = $(this).index();
    $(this).siblings().removeClass('tab-active');
    $(this).addClass('tab-active');
    $('.main-bottom-content').hide().eq(index).show();
  });
};
// 创建表格
$.fn.createTable = function () {
  var week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    totalDay = 49;
  var date = new Date();
  var time = date.getTime();
  var th = ['</tr>','<tr>'],
      td1 = ['<tr>','</tr>'],
      td2 = ['<tr>','</tr>'];
  for (count = 0; count < totalDay; count++) {
    var newDate = new Date(time + (count + 1) * 86400000);
    var d = newDate.getDate(),
      m = newDate.getMonth() + 1,
      w = week[newDate.getDay()],
      y = newDate.getFullYear(),
      _d;
    d = d < 10 ? '0' + d : d;
    m = m < 10 ? '0' + m : m;
    _d = y + '-' + m + '-' + d;
    // 表格每行内容
    th.splice(1,0,'<th>' + w + '<p>' + _d + '</p></th>');
    td1.splice(1,0,'<td></td>');
    td2.splice(1,0,'<td>约满</td>');
  }
  th.reverse();
  var content = ['<table>','</table>'];
  content.splice(1,0,td1.join(''));
  content.splice(1,0,td2.join(''));
  content.splice(1,0,td1.join(''));
  content.splice(1,0,th.join(''));
  $('.mid-content').append(content.join(''));
};
// 预约排班表滑动
$.fn.uiSlider = function () {
  var ui = $('.mid-content'),
    width = parseInt($('.table-mid').width()),
    lShift = 0,
    index = 0;
  var doSlider = function () {
    lShift = index * width * (-1);
    ui.css('left', lShift);
  };
  $('.btn-r').on('click', function () {
    index++;
    if (index > 6) {
      index = 6;
    } else {
      doSlider();
    }
    return false;
  });
  $('.btn-l').on('click', function () {
    index--;
    if (index < 0) {
      index = 0;
    } else {
      doSlider();
    }
    return false;
  });
};
// 页面的脚本逻辑
$(function () {
  // 自动创建表格
  $('.mid-content').createTable();
  // 搜索栏
  $('.ui-search').uiSearch();
  // tab切换
  // 默认展示预约挂号tab
  $('.main-bottom-content').eq(0).show();
  $('.tab').uiTabSwitch();
  $('.main-bottom-content').uiSlider();
});