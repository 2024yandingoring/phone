    // every_oe 小程序通用按钮 点击事件 begin 
    var every_oe = document.querySelector(".every_oe"); //主盒子类
    var every_oe_kuozhan = document.querySelector(".every_oe_kuozhan"); //获取扩展盒子类

    var bug_a = 1;
    every_oe.onclick = function () {
        if (bug_a == 1) {
            every_oe_kuozhan.style.display = "block";
            bug_a++;
            //window.location.href = ""; //这里更新点击按钮网址
        } else {
            every_oe_kuozhan.style.display = "none";
            bug_a = 1;
            //window.location.href = ""; //这里更新点击按钮网址
        }
    }

    var btn = document.querySelector(".btn"); //内置文本关闭按钮类
    var two_box = document.querySelector(".two_box"); //内容区域主盒子类
    var three_box = document.querySelector(".three_box"); //内置文本盒子类

    btn.onclick = function () {
        three_box.innerHTML = "";
        three_box.style.display = "none"; //内置文本盒子
        two_box.style.display = "block"; //内容区域盒子
        btn.style.display = "none";
    }
    // every_oe 小程序通用按钮 点击事件 end

 


// 底部导航 事件
const contentLeft = document.querySelector('.content_left');
const contentRight = document.querySelector('.content_right');
const loginTimeBox = document.querySelector('.loginTime_box');
const fourBox = document.querySelector('.four_box');

// 首页
contentLeft.addEventListener('click',() =>{
    loginTimeBox.style.display = 'none';
    fourBox.style.display = 'block';
    contentLeft.style.color = '#E2231A';
    contentRight.style.color = '#000';
});

// 登录
contentRight.addEventListener('click',() =>{
    loginTimeBox.style.display = 'block';
    fourBox.style.display = 'none';
    contentLeft.style.color = '#000';
    contentRight.style.color = '#E2231A';
});
// 底部导航 事件
