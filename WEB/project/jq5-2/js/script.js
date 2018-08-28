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
}
// 弹出登陆框
function showSignin() {
  $('.signIn-btn').addClass('btn-active');
  $('.signUp-btn').removeClass('btn-active');
  $('.signIn-layer').show();
  $('.signUp-layer').hide();
  $('.layer-content').height(350);
  showLayer();
  //登陆表单校验
  $('.account').blur(function () {
    if ($(this).val().length != 11 || isNaN(($(this).val()))) {
      $('.error-msg1').html("请输入正确的邮箱或手机号");
    } else {
      $('.error-msg1').html("");
    }
  });
  $('.passwd').blur(function () {
    var passwd = $(this).val();
    if (passwd.length < 6 || passwd.length > 16) {
      $('.error-msg2').html("请输入6-16位密码，区分大小写，不能用空格");
    } else {
      $('.error-msg2').html("");
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
    if ($(this).val().length != 11 || isNaN(($(this).val()))) {
      $('.error-msg3').html("请输入正确的邮箱或手机号");
    } else {
      $('.error-msg3').html("");
    }
  });
  $('.verifywd').blur(function () {
    if ($(this).val() != "GYyd") {
      $('.error-msg4').html("验证码错误，区分大小写");
    } else {
      $('.error-msg4').html("");
    }
  });
}

$(function () {
  // 下次自动登录默认选中
  ($('#auto-signin')).prop('checked', true);
  // 点击登陆、注册
  $('.signIn-btn').on('click', function () {
    showSignin();
  });
  $('.signUp-btn').on('click', function () {
    showSignUp();
  });
  // top右边栏
  $('.top-right-list').on('mouseover',function () {
    $(this).children(".top-right-list-item").addClass('top-active');
  });
  $('.top-right-list').on('mouseout',function () {
    $(this).children(".top-right-list-item").removeClass('top-active');
  });
  // 购物车
  
});