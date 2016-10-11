/**
 * Created by Administrator on 2016/9/28 0028.
 */

// 设置根元素的宽度为 viewport 的十等分  为1rem 相对单位值
;(function(){

    var wid = document.documentElement.clientWidth || window.innerWidth ;

    document.documentElement.style.fontSize = wid /10 + "px";

    window.onresize = function(){
        var wid = document.documentElement.clientWidth || window.innerWidth ;

        document.documentElement.style.fontSize = wid /10 + "px";
    }
}())


