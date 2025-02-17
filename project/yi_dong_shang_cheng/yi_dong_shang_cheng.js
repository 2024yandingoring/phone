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


// 禁用选中状态
document.addEventListener("selectstart", function (e) {
    e.preventDefault();
})

// 禁用双击变大
document.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });
var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

 


// 底部导航 事件
const contentLeft = document.querySelector('.content_left');
const contentRight = document.querySelector('.content_right');
const loginTimeBox = document.querySelector('.loginTime_box');
const fourBox = document.querySelector('.four_box');
const two_box2 = document.querySelector('.two_box');

// 首页
contentLeft.addEventListener('click',() =>{
    loginTimeBox.style.display = 'none';
    fourBox.style.display = 'block';
    two_box2.style.display = 'block';
    contentLeft.style.color = '#E2231A';
    contentRight.style.color = '#000';
});





//点击登录时，同步账号金额数据
// GitHub 相关配置
// 定义 AERO 变量
const AERO_apen13 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';
// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded_open13 = atob(AERO_apen13);
// 去掉前面的 /0/
const result_open13 = decoded_open13.replace('/0/', '');

const GITHUB_TOKEN_paymentDate5 = result_open13;
const GIST_ID_paymentDate5 = 'a0fa7fab625decc42a4cb6478f863289';
const FILE_NAME_paymentDate5 = 'html_loginTime.excel';

// 获取相关元素
// const contentRight = document.querySelector('.content_right');
const accountUserName = document.querySelector('.Account_id_userName');
const walletId = document.querySelector('.Wallet_id');

// 为 content_right 元素添加点击事件监听器
contentRight.addEventListener('click', async () => {
    loginTimeBox.style.display = 'block';
    fourBox.style.display = 'none';
    two_box2.style.display = 'none';
    contentLeft.style.color = '#000';
    contentRight.style.color = '#E2231A';

    // 检查 Account_id_userName 是否为空
    if (accountUserName.textContent.trim() === '') {
        return; // 如果为空，什么都不执行
    }

    try {
        // 从 GitHub Gist 获取数据
        const response = await fetch(`https://api.github.com/gists/${GIST_ID_paymentDate5}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN_paymentDate5}`
            }
        });
        const data = await response.json();
        const fileContent = data.files[FILE_NAME_paymentDate5].content;
        const tableData = JSON.parse(fileContent);

        // 查找匹配的用户信息
        const matchedUser = tableData.find(user => user.userName === accountUserName.textContent);

        if (matchedUser) {
            // 将对应账号的 wallet 值同步到 Wallet_id 元素
            walletId.textContent = matchedUser.wallet;
        }
    } catch (error) {
        console.error('获取 GitHub Gist 数据时出错:', error);
    }
});
// 底部导航 事件
