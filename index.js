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
// every_oe 小程序通用按钮 点击事件 end




document.addEventListener('touchstart', function (event) {
    // 判断事件触发元素是否不包含 four_box 类
    if (!event.target.closest('.four_box') && event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });
var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    // 判断事件触发元素是否不包含 four_box 类
    if (!event.target.closest('.four_box')) {
        var now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }
}, false);



// 第三层盒子 内置浏览器 begin 
var btn_ifa = document.querySelector(".btn_ifa"); //获取内置浏览器关闭按钮类
var four_box = document.querySelector(".four_box"); //获取内置浏览器主盒子类
var four_box_suimg = document.querySelector(".four_box_suimg"); //获取img内置竖屏+竖屏图片类


btn_ifa.addEventListener('click', function () {
    document.body.style.zoom = 1;
    four_box.style.display = "none";
    four_box_suimg.src = "";
});

// 第三层盒子 内置浏览器 end


// 内容区域，长文本显示和隐藏begin
// var three_box_box_text = document.getElementsByClassName("three_box_box_text"); //获取内容文本类

// document.querySelectorAll('.quanwen').forEach(function (element) {
//     element.addEventListener('click', function () {
//         // 移除所有元素的 'active' 类
//         document.querySelectorAll('.quanwen').forEach(function (el) {
//             el.classList.remove('active');
//         });
//         // 给被点击的元素添加 'active' 类
//         this.classList.add('active');
//     });
// });

const textElement = document.querySelector('.three_box_box_text');
const expandButton = document.querySelector('.expand');
const shouQiButton = document.querySelector('.shouQi');

expandButton.addEventListener('click', function () {
    textElement.classList.add('expanded');
    expandButton.style.display = 'none';
    shouQiButton.style.display = 'inline-block';
});

shouQiButton.addEventListener('click', function () {
    textElement.classList.remove('expanded');
    expandButton.style.display = 'inline-block';
    shouQiButton.style.display = 'none';
});
// 内容区域，长文本显示和隐藏begin




// loader.js 完整代码
(function () {
    // 1. 立即创建加载提示
    const statusEl = document.createElement('div');
    statusEl.id = 'load-status';
    statusEl.innerHTML = `
        <span class="wave-text">
      <span>i</span><span>m</span><span>a</span><span>g</span><span>e</span><span>B</span><span>i</span><span>n</span><span>d</span><span>i</span><span>n</span><span>g</span><span>s</span><span>.</span><span>j</span><span>s</span><span>正</span><span>在</span><span>加</span><span>载</span>
      <span class="dot">·</span>
      <span class="dot">·</span>
      <span class="dot">·</span>
    </span>
        `;
    document.body.appendChild(statusEl);

    // 2. 创建独立script标签加载主文件
    const script = document.createElement('script');
    script.src = './pengyouquan_js/imageBindings/imageBindings.js?v=2025_2_16';

    // 3. 监听加载过程
    let loaded = 0;
    const startTime = Date.now();

    script.onload = () => {
        statusEl.innerHTML = `
        <span class="wave-text loaded-text">
          imageBindings.js已加载完成！✓
        </span>
      `;
        setTimeout(() => {
            statusEl.style.opacity = '0';
            setTimeout(() => statusEl.remove(), 500);
        }, 2000);
    };

    // 4. 高频模拟进度（实际项目需用XHR获取真实进度）
    const progressSimulator = setInterval(() => {
        if (loaded >= 100) clearInterval(progressSimulator);
        loaded = Math.min(100, loaded + Math.random() * 3);
    }, 50);

    // 5. 开始加载主文件
    document.head.appendChild(script);
})();
