$(function () {
    var timer = null,
        index = 0,
        dots = $('#dots span'),
        pics = $('#banner div'),
        prev = $('#prev'),
        next = $('#next'),
        len = pics.length;

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
        }, 2000);
    }

    // 封装图片改变函数
    function changeImg() {
        dots.removeClass('active');
        dots.eq(index).addClass('active');
        pics.css('display', 'none');
        pics.eq(index).css('display', 'block');
    }

    // 各事件行为
    function slideImg() {
        var main = $('#main');
        // 鼠标移入移出
        main.mouseover(function () {
            stopAutoPlay();
        });
        main.mouseout(function () {
            startAutoPlay();
        });
        // 页面加载完后自启动轮播
        main.mouseout();
        // 点击圆点事件
        dots.each(function(i) {
            $(this).attr('id',i);
        });
        dots.on('click', function (event) {
            index = $(event.target).attr('id');
            changeImg();
          });
        // 下一张、上一张点击事件
        next.click(function () {
            index++;
            if (index >= len) index = 0;
            changeImg();
        });
        prev.click(function () {
            index--;
            if (index < 0) index = len - 1;
            changeImg();
        });
    }
    slideImg();
});