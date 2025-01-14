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
