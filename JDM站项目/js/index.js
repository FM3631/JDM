window.onload = function () {
    onscroll();
    clock();
}



var header = document.getElementsByClassName("header")[0];
var banner = document.getElementsByClassName("swiper-container")[0];
//获取banner的高度作为被卷入的高度
var height = banner.offsetHeight;
window.onscroll = function () {
    //获取被卷入的高度
    var top = document.documentElement.scrollTop;
    if (top > height) {
        header.style.background = "rgba(201,21,35,1)"
    } else if (top == 0) {
        header.style.background = "rgba(201,21,35,1)"
    } else {
        var opacty = top / this.height * 0.85;
        header.style.background = 'rgba(201,21,35,' + opacty + ')'
    }
}



// 倒计时
function clock() {
    var spanClock = document.getElementsByClassName("spanBg");
    var times = 11 * 60 * 60;

    var time = setInterval(function () {

        times--;
        var hour = Math.floor(times / 60 / 60);
        var min = Math.floor(times / 60 % 60);
        var sec = Math.floor(times % 60);

        spanClock[0].innerHTML = hour >= 10 ? Math.floor(hour / 10) : 0;
        spanClock[1].innerHTML = hour >= 10 ? hour % 10 : hour;

        spanClock[2].innerHTML = min >= 10 ? Math.floor(min / 10) : 0;
        spanClock[3].innerHTML = min >= 10 ? min % 10 : min;

        spanClock[4].innerHTML = sec > 10 ? Math.floor(sec / 10) : 0;
        spanClock[5].innerHTML = sec >= 10 ? sec % 10 : sec;
    }, 1000)
}

