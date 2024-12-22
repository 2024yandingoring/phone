// every_oe 小程序通用按钮 点击事件 begin 
var every_oe = document.querySelector(".every_oe"); //主盒子类

every_oe.onclick =function(){
    window.location.href = ""; //这里更新点击按钮网址
}
// every_oe 小程序通用按钮 点击事件 end

// two_box 第二个li头像和头部导航栏触动事件 begin
var two_box_hend = document.querySelector(".two_box_hend"); //获取头像类
var three_box_head = document.querySelector(".three_box_head"); //获取内容区域头像类

//监控Windows滑动事件，top顶部值
window.addEventListener("scroll",function(event){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollTop >= 190){ //第二个li背景图里面的head
        // console.log("渐变");
        two_box_hend.style.transition = "opacity 0.8s";
        two_box_hend.style.opacity = "0";
    }else{
        // console.log("不在范围");
        two_box_hend.style.transition = "opacity 0.8s";
        two_box_hend.style.opacity = "1";
    }
})

// two_box 第二个li头像和头部导航栏触动事件 end

// 第三层盒子 内置浏览器 begin 
var btn_ifa = document.querySelector(".btn_ifa"); //获取内置浏览器关闭按钮类
var four_box = document.querySelector(".four_box"); //获取内置浏览器主盒子类
var four_box_ifa = document.querySelector(".four_box_ifa"); //获取ifa浏览器类

btn_ifa.onclick = function(){
    four_box.style.display = "none";
    four_box_ifa.src = "";
}
// 第三层盒子 内置浏览器 end


