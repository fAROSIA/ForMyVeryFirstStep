// 登陆窗弹出事件
// 显出弹出层
function showLayer() {
  // 显出遮罩层
  $('#layer-mask').show();
  // 显出弹出层窗体
  $('#layer-pop').show();
  // 点击关闭
  $('.layer-close').on('click', function () {
    hideLayer();
  });
}
// 隐藏弹出层
function hideLayer() {
  // 隐藏遮罩层
  $('#layer-mask').hide();
  // 隐藏弹出层窗体
  $('#layer-pop').hide();
  // 清除表单内容
  $('.signIn-layer :input').not(':button').val('');
  $('.signUp-layer :input').not(':button').val('');
  $('.err-msg').html('');
}
// 弹出登陆框
function showSignIn() {
  $('.signIn-btn').addClass('btn-active');
  $('.signUp-btn').removeClass('btn-active');
  $('.signIn-layer').show();
  $('.signUp-layer').hide();
  $('.layer-content').height(350);
  showLayer();
  //登陆表单校验
  $('.account').blur(function () {
    if ($(this).val() !== '' && $(this).val().length != 11 || isNaN(($(this).val()))) {
      $('.error-msg1').html('请输入正确的邮箱或手机号');
    } else {
      $('.error-msg1').html('');
    }
  });
  $('.passwd').blur(function () {
    var passwd = $(this).val();
    if (passwd !== '' && passwd.length < 6 || passwd.length > 16) {
      $('.error-msg2').html('请输入6-16位密码，区分大小写，不能用空格');
    } else {
      $('.error-msg2').html('');
    }
  });
}
// 弹出注册框
function showSignUp() {
  $('.signUp-btn').addClass('btn-active');
  $('.signIn-btn').removeClass('btn-active');
  $('.signUp-layer').show();
  $('.signIn-layer').hide();
  $('.layer-content').height(320);
  showLayer();
  // 注册表单校验
  $('.account-signUp').blur(function () {
    if ($(this).val() !== '' && $(this).val().length != 11 || isNaN(($(this).val()))) {
      $('.error-msg3').html('请输入正确的邮箱或手机号');
    } else {
      $('.error-msg3').html('');
    }
  });
  $('.verifywd').blur(function () {
    if ($(this).val() !== '' && $(this).val() != 'GYyd') {
      $('.error-msg4').html('验证码错误，区分大小写');
    } else {
      $('.error-msg4').html('');
    }
  });
}

// ui-slider
$.fn.uiSlider = function () {
  var ui = $(this);
  var wrap = $('.ui-slider-wrap');
  var btn_prev = $('.ui-slider-arrow .left', ui);
  var btn_next = $('.ui-slider-arrow .right', ui);
  var items = $('.ui-slider-wrap .item', ui);
  var tips = $('.ui-slider-process .item', ui);
  var current = 0;
  var size = items.size();
  var width = items.eq(0).width();
  var enableAuto = true;
  // 鼠标移动到图片上不滚动
  ui
    .on('mouseover', function () {
      enableAuto = false;
    })
    .on('mouseout', function () {
      enableAuto = true;
    });
  // 具体操作
  wrap
    .on('move_prev', function () {
      if (current <= 0) {
        current = size;
      }
      current -= 1;
      wrap.triggerHandler('move_to', current);
    })
    .on('move_next', function () {
      if (current >= size - 1) {
        current = -1;
      }
      current += 1;
      wrap.triggerHandler('move_to', current);
    })
    .on('move_to', function (evt, index) {
      wrap.css('left', index * width * (-1));
      tips.removeClass('item_focus').eq(index).addClass('item_focus');
      current = index;
    })
    .on('auto_move', function () {
      setInterval(function () {
        if (enableAuto) {
          wrap.triggerHandler('move_next');
        }
      }, 2000);
    })
    .triggerHandler('auto_move');

  // 事件
  btn_prev.on('click', function () {
    wrap.triggerHandler('move_prev');
  });
  btn_next.on('click', function () {
    wrap.triggerHandler('move_next');
  });
  tips.on('click', function () {
    var index = $(this).index();
    wrap.triggerHandler('move_to', index);
  });
};
// 切换floor层 tab
$.fn.uiTabSwitch = function () {
  $('.floor-title .others a').on('click', function () {
    var index = $(this).index();
    $(this).siblings().removeClass('others-active');
    $(this).addClass('others-active');
    $(this).parents('.floor-content').children('.floor-list').removeClass('floor-active').eq(index).addClass('floor-active');
  });
};
// floor导航
$.fn.uiFloorNav = function () {
  var windowHeight = $(window).height();
  var ele = $('.left-nav');
  $(window).on('scroll', function () {
    var top = $(window).scrollTop();
    var f2 = $('.floor-title .caption').eq(1).offset().top - top;
    if ( f2 < windowHeight) {
      ele.show();
    } else {
      ele.hide();
    }
    $('.floor-content').each(function(index,element) {
      var
    });
  });
};
// 回到顶部
$.fn.uiBackTop = function () {
  $('.back-to-top').on('click', function () {
    $(window).scrollTop(0);
  });
};

$(function () {
  // 下次自动登录默认选中
  ($('#auto-signin')).prop('checked', true);
  // 点击登陆、注册
  $('.signIn-btn').on('click', function () {
    showSignIn();
  });
  $('.signUp-btn').on('click', function () {
    showSignUp();
  });
  // 轮播图
  $('.ui-slider').uiSlider();
  // floor层
  // 切换tab
  $('.floor-title').uiTabSwitch();
  // floor导航
  $('.left-nav').uiFloorNav();
  // 回到顶部
  $('.right-nav').uiBackTop();
});