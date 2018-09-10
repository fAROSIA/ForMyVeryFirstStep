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
// 页面的脚本逻辑
$(function () {
  // 搜索栏
  $('.ui-search').uiSearch();
  // tab切换
  // 默认展示预约挂号tab
  $('.main-bottom-content').eq(0).show();
  $('.tab').uiTabSwitch();
});