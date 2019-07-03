// 获取非行间样式 - 浏览器兼容性问题
function getStyle(obj,name){
    if(obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj,false)[name];
    }
};

//数组数字sort
function NumSort(arr) {
    return arr.sort(function(n1,n2){
        return (n1-n2);
    });
}

//timer数字时钟
function tick (){
    var oDiv = document.getElementById("timer");
    var aImg = oDiv.getElementsByTagName("img");
    var oDate = new Date();
    var str = oDate.toLocaleTimeString();
    for(var i=0; i<aImg.length; i++){
        if(i === 2 || i === 5){
            continue;
        }
        //src path
        //charAt 解决兼容性问题
        aImg[i].src = "./src/Image/digital_" + str.charAt(i) +".png"
    }
};
setInterval(tick,1000);
tick();

//定时器应用 - 动态移动
window.onload = function (){
    setInterval(function(){
        var oDiv = document.getElementById("div1");
        oDiv.style.left = oDiv.offsetLeft + 10 + "px";
    },500);
};