
// 登陆窗弹出事件

// 显出弹出层
function showLayer () {
  // 显出遮罩层
  $("#layer-mask").show();
  // 显出弹出层窗体
  $("#layer-pop").show();
  // 点击关闭
  $(".layer-close").on("click",function(){
    hideLayer();
  });
}

// 隐藏弹出层
function hideLayer () {
  // 隐藏遮罩层
  $("#layer-mask").hide();
  // 隐藏弹出层窗体
  $("#layer-pop").hide();
}

// 弹出登陆框
function showSignin () {
  $(".signIn-btn").addClass('btn-active');
  $(".signUp-btn").removeClass('btn-active');
  $(".signIn-layer").show();
  $(".signUp-layer").hide();
  $(".layer-content").height(330);
  showLayer();
}

// 弹出注册框
function showSignUp () {
  $(".signUp-btn").addClass('btn-active');
  $(".signIn-btn").removeClass('btn-active');
  $(".signUp-layer").show();
  $(".signIn-layer").hide();
  $(".layer-content").height(300);
  showLayer();
}

$(function () {
  // 下次自动登录默认选中
  ($("#auto-signin")).prop('checked',true);
  // 点击登陆、注册
  $(".signIn-btn").on("click",function(){
    showSignin();
  });
  $(".signUp-btn").on("click",function(){
    showSignUp();
  });
  
});