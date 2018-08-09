var timer = null,
    index = 0,
    navs = document.getElementById("nav").getElementsByTagName("div"),
    len = navs.length,
    pics = document.getElementById("banner").getElementsByTagName("div");

// 清除定时器,停止自动播放
function stopAutoPlay() {
  if (timer) {
    clearInterval(timer);
  }
}

// 图片自动轮播
function startAutoPlay() {
  timer = setInterval(function () {
    index++;
    if (index >= len) {
      index = 0;
    }
    changeImg();
  }, 1000);
}

function changeImg() {
  for (var i = 0; i < len; i++) {
    navs[i].className = "nav-item";
    pics[i].style.display = "none";
  }
  navs[index].className = "nav-item active";
  pics[index].style.display = "block";
}

function slideImg() {
  var main = document.getElementById("main");
  main.onmouseover = function () {
    stopAutoPlay();
  };
  main.onmouseout = function () {
    startAutoPlay();
  };
  main.onmouseout();

  // 点击导航切换
  for (var i = 0; i < len; i++) {
    navs[i].id = i;
    navs[i].onclick = function () {
      index = this.id;
      changeImg();
    };
  }
}

window.onload = slideImg;