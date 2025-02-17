// 这里是 loginTime_box 登录 我的 注册 js 
//


// 登录框架
document.addEventListener('DOMContentLoaded', function () {
    const loginIng = document.querySelector('.login_ing');
    const registerIng = document.querySelector('.register_ing');
    const loginGoing = document.querySelector('.login_going');
    const registerGoing = document.querySelector('.register_going');
    const registerZhengze = document.querySelector('.register_zhengze');
    const registerApi = document.querySelector('.register_api');
    const registerUserName = document.querySelector('.register_userName');
    const registerPassword = document.querySelector('.register_password');
    const loginUserName = document.querySelector('.login_userName');
    const loginPassword = document.querySelector('.login_password');
    const loginApi = document.querySelector('.login_api');
    const avatarAccountWalletBox = document.querySelector('.avatarAccountWallet_box');
    const accountIdSpan = document.querySelector('.Account_id + span');
    const memberIdSpan = document.querySelector('.memberId_id');
    const walletIdSpan = document.querySelector('.Wallet_id');
    const appkeyEvely = document.querySelector('.appkey_evely');
    const contentRight = document.querySelector('.content_right');
    const loginGo = document.querySelector('.login_go');
    const loginPlatform = document.querySelector('.loginPlatform');
    const exitLogin = document.querySelector('.exitLogin');
    const backendManagement = document.querySelector('.backendManagement'); // 获取 backendManagement 元素
    const address_popup_textarea = document.querySelector('.address_popup_textarea');



    // 定义 AERO 变量
    const AERO = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';

    // 对 GITHUB_TOKEN 进行 Base64 解码
    const decoded = atob(AERO);

    // 去掉前面的 /0/
    const result_orr = decoded.replace('/0/', '');


    // 请将此替换为你自己的 GitHub 个人访问令牌
    const GITHUB_TOKEN = result_orr;
    // const GITHUB_TOKEN =  'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';
    // 这里可以设置一个默认的 Gist ID 或在代码中动态生成
    let GIST_ID = 'a0fa7fab625decc42a4cb6478f863289';


    loginIng.addEventListener('click', function () {
        loginIng.classList.add('active');
        registerIng.classList.remove('active');
        loginGoing.style.display = 'block';
        registerGoing.style.display = 'none';
        loginIng.style.backgroundColor = '#E2231A';
        loginIng.style.color = '#fff';
        registerIng.style.backgroundColor = '#ccc';
        registerIng.style.color = '#000';
    });

    registerIng.addEventListener('click', function () {
        registerIng.classList.add('active');
        loginIng.classList.remove('active');
        registerGoing.style.display = 'block';
        loginGoing.style.display = 'none';
        registerIng.style.backgroundColor = '#0BD107';
        registerIng.style.color = '#fff';
        loginIng.style.backgroundColor = '#ccc';
        loginIng.style.color = '#000';
    });

    registerZhengze.addEventListener('click', function () {
        const userName = registerUserName.value;
        const password = registerPassword.value;
        const userNameRegex = /^([a-zA-Z]+|[0-9]+|[a-zA-Z0-9]+)$/;
        const passwordRegex = /^([a-zA-Z]+|[0-9]+|[a-zA-Z0-9]+)$/;
        const userNameValid = userNameRegex.test(userName);
        const passwordValid = passwordRegex.test(password);

        if (userNameValid) {
            registerUserName.classList.add('animate-bg', 'success');
        } else if (userName === '') {
            registerUserName.classList.remove('animate-bg', 'success');
        } else {
            registerUserName.classList.add('animate-bg');
            registerUserName.classList.remove('success');
        }

        if (passwordValid) {
            registerPassword.classList.add('animate-bg', 'success');
        } else if (password === '') {
            registerPassword.classList.remove('animate-bg', 'success');
        } else {
            registerPassword.classList.add('animate-bg');
            registerPassword.classList.remove('success');
        }

        if (userNameValid && passwordValid) {
            registerZhengze.style.display = 'none';
            registerApi.style.display = 'block';
        } else {
            registerApi.style.display = 'none';
        }
    });

    registerApi.addEventListener('click', async function () {
        const userName = registerUserName.value;
        const password = registerPassword.value;
        const userData = {
            userName: userName,
            password: password,
            memberName: '解忧会员',
            wallet: 0
        };
        // 检查用户名是否已存在
        if (await isUserNameExists(userName)) {
            // 显示错误信息并添加顶部 2px 红色背景动画
            registerUserName.style.borderTop = '2px solid red';
            registerPassword.value = '';
            registerPassword.placeholder = '已存在该用户，请重新注册';
            console.error('用户名已存在，不能注册');
            return;
        }
        registerUser(userData);
        registerUserName.value = '';
        registerPassword.value = '';
        registerUserName.classList.remove('animate-bg', 'success');
        registerPassword.classList.remove('animate-bg', 'success');
        registerApi.style.display = 'none';
        registerZhengze.style.display = 'block';
        loginIng.click();
    });

    loginApi.addEventListener('click', function () {
        const userName = loginUserName.value;
        const password = loginPassword.value;
        loginUser(userName, password);
    });


    async function registerUser(userData) {
        try {
            let gistData = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
                method: 'GET',
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`
                }
            });
            let gist = await gistData.json();
            let users = [];
            if (gist.files && gist.files['html_loginTime.excel'] && gist.files['html_loginTime.excel'].content) {
                users = JSON.parse(gist.files['html_loginTime.excel'].content);
            } else {
                // 如果不存在 html_loginTime.excel 文件，则创建一个
                const newGistData = {
                    description: "User login and registration data",
                    public: false,
                    files: {
                        "html_loginTime.excel": {
                            content: JSON.stringify([userData])
                        }
                    }
                };
                gistData = await fetch(`https://api.github.com/gists`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newGistData)
                });
                gist = await gistData.json();
                GIST_ID = gist.id; // 更新 GIST_ID 为新创建的 Gist 的 ID
                users.push(userData);
            }
            if (gist.files['html_loginTime.excel']) {
                users.push(userData);
                const updatedGist = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        files: {
                            'html_loginTime.excel': {
                                content: JSON.stringify(users)
                            }
                        }
                    })
                });
                const response = await updatedGist.json();
                if (response) {
                    console.log('注册成功');
                } else {
                    console.log('注册失败');
                }
            }
        } catch (error) {
            console.error('注册错误:', error);
            console.log('注册时发生错误，请检查网络或 GitHub 令牌权限');
        }
    }

    async function loginUser(userName, password) {
        try {
            const gistData = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
                method: 'GET',
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`
                }
            });
            const gist = await gistData.json();
            let users = [];
            if (gist.files && gist.files['html_loginTime.excel'] && gist.files['html_loginTime.excel'].content) {
                users = JSON.parse(gist.files['html_loginTime.excel'].content);
            }
            const user = users.find(u => u.userName === userName && u.password === password);
            if (user) {
                // 登录成功，隐藏登录界面
                loginGoing.style.display = 'none';
                avatarAccountWalletBox.style.display = 'block';
                accountIdSpan.textContent = user.userName;
                memberIdSpan.textContent = user.memberName;
                walletIdSpan.textContent = user.wallet;
                loginUserName.value = '';
                loginPassword.value = '';
                loginUserName.placeholder = '请输入账号';
                loginPassword.placeholder = '请输入密码';
                appkeyEvely.textContent = '1';
                contentRight.textContent = '我的';
                // loginGo.style.display = 'none';
                loginGo.style.visibility = 'hidden';
                loginGo.style.opacity = '0';
                loginPlatform.style.display = 'none';
                exitLogin.style.display = 'flex';
                address_popup_textarea.style.display = 'block';


                // 判断用户名是否为 yanding，设置 backendManagement 的显示属性
                if (userName === 'yanding') {
                    backendManagement.style.display = 'flex';
                } else {
                    backendManagement.style.display = 'none';
                }
            } else {
                // 登录失败，清空输入框，修改 placeholder 并移除动画
                loginPassword.value = '';
                appkeyEvely.textContent = '0';
                loginPassword.placeholder = '账户或者密码错误';
                loginUserName.classList.remove('animate-bg', 'success');
                loginPassword.classList.remove('animate-bg', 'success');
                console.log('登录失败，请检查用户名和密码是否正确');
            }
        } catch (error) {
            console.error('登录错误:', error);
            console.log('登录时发生错误，请检查网络或 GitHub 令牌权限');
        }
    }

    async function isUserNameExists(userName) {
        try {
            let gistData = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
                method: 'GET',
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`
                }
            });
            let gist = await gistData.json();
            let users = [];
            if (gist.files && gist.files['html_loginTime.excel'] && gist.files['html_loginTime.excel'].content) {
                users = JSON.parse(gist.files['html_loginTime.excel'].content);
            }
            return users.some(u => u.userName === userName);
        } catch (error) {
            console.error('检查用户名是否存在时出错:', error);
            console.log('检查用户名是否存在时发生错误，请检查网络或 GitHub 令牌权限');
            return false;
        }
    }


    // 登录平台和退出登录 联动事件 
    loginPlatform.addEventListener('click', function () {
        loginGo.style.visibility = 'visible';
        loginGo.style.opacity = '1';
        // loginGo.style.display = 'block';
        loginGoing.style.display = 'block';
    });

    exitLogin.addEventListener('click', function () {
        const myOrder_popup_ulExitLogin = document.querySelector('.myOrder_popup_ul');
        const letter_ulExitLogin = document.querySelector('.letter_ul');
        const shoppingCart_popupUlExitLogin = document.querySelector('.shoppingCart_popup ul');

        accountIdSpan.textContent = '';
        memberIdSpan.textContent = '';
        walletIdSpan.textContent = '';
        appkeyEvely.textContent = '0';
        contentRight.textContent = '登录';

        loginPlatform.style.display = 'flex';
        loginGo.style.visibility = 'hidden';
        loginGo.style.opacity = '0';
        exitLogin.style.display = 'none';
        // 退出登录时，隐藏 backendManagement 元素
        backendManagement.style.display = 'none';

        myOrder_popup_ulExitLogin.innerHTML = '';
        letter_ulExitLogin.innerHTML = '';
        shoppingCart_popupUlExitLogin.innerHTML = '';
        address_popup_textarea.style.display = 'none';
    });

    //登录与注册弹窗 关闭按钮事件
    var login_go_btn = document.querySelector('.login_go_btn');
    login_go_btn.addEventListener('click', function () {
        loginGo.style.visibility = 'hidden';
        loginGo.style.opacity = '0';
        // loginGo.style.display = 'none';

        loginUserName.value = '';
        loginPassword.value = '';
        registerUserName.value = '';
        registerPassword.value = '';

        registerApi.style.display = 'none';
        registerZhengze.style.display = 'block';
        registerGoing.style.display = 'none';
        loginIng.style.backgroundColor = '#E2231A';
        loginIng.style.color = '#fff';
        registerIng.style.backgroundColor = '#ccc';
        registerIng.style.color = '#000';
    });

});
// 登录框架











// 我的信件 框架

// 定义 AERO 变量
const AERO2 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';

// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded2 = atob(AERO2);

// 去掉前面的 /0/
const result_orr2 = decoded2.replace('/0/', '');

const GITHUB_TOKEN_letter_popup = result_orr2;// 请将此替换为你自己的 GitHub 个人访问令牌
const GIST_ID_letter_popup = '585c800c778ca99ca3bdb8f2248dc066'; // 请将此替换为你的 Gist ID

window.addEventListener('DOMContentLoaded', async function () {
    const letterPopup = document.querySelector('.letter_popup');
    const letterPopupCloseBtn = document.querySelector('.letter_popup_btn');
    const letterPopupUl = document.querySelector('.letter_ul');
    const letterPopupTitle = document.querySelector('.letter_popup_title');
    const myLettersBtn = document.querySelector('.myLetters');
    // 不再需要 myLettersText 元素，因为不再使用它来显示新消息通知

    // 显示弹窗的函数
    async function showLetterPopup() {
        try {
            const accountId = document.querySelector('.Account_id_userName').textContent.trim();
            if (accountId === '') {
                letterPopupUl.style.display = 'none';
                letterPopupTitle.textContent = '请先登录平台||信件为空';
            } else {
                letterPopupUl.style.display = 'block';
                letterPopupTitle.textContent = '我的信件/myLetters';
                const gistData = await fetch(`https://api.github.com/gists/${GIST_ID_letter_popup}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `token ${GITHUB_TOKEN_letter_popup}`
                    }
                });
                const gist = await gistData.json();
                let letters = [];
                if (gist.files && gist.files['html_myLetters.excel'] && gist.files['html_myLetters.excel'].content) {
                    letters = JSON.parse(gist.files['html_myLetters.excel'].content);
                } else {
                    // 如果文件不存在，创建文件
                    const newGist = await fetch(`https://api.github.com/gists`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `token ${GITHUB_TOKEN_letter_popup}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            description: 'My Letters Data',
                            public: false,
                            files: {
                                'html_myLetters.excel': {
                                    content: '[]'
                                }
                            }
                        })
                    });
                    letters = [];
                }
                // 筛选出属于当前用户的信件
                const filteredLetters = letters.filter(letter => letter.letter_popup_userName === accountId);
                // 清除原有的数据
                letterPopupUl.innerHTML = '';
                // 为每个信件添加新的 li 元素，最新消息在最上面
                filteredLetters.reverse().forEach(letter => {
                    const newLi = document.createElement('li');
                    const senderNameDiv = document.createElement('div');
                    senderNameDiv.className = 'letter_popup_sender_name';
                    senderNameDiv.textContent = letter.senderName;
                    const timeDiv = document.createElement('div');
                    timeDiv.className = 'letter_popup_time';
                    timeDiv.textContent = letter.time;
                    const contentDiv = document.createElement('div');
                    contentDiv.className = 'letter_popup_content';
                    contentDiv.textContent = letter.content;

                    newLi.appendChild(senderNameDiv);
                    newLi.appendChild(timeDiv);
                    newLi.appendChild(contentDiv);
                    letterPopupUl.appendChild(newLi);
                });

                if (filteredLetters.length === 0) {
                    letterPopupUl.style.display = 'none';
                    letterPopupTitle.textContent = '我的信件/myLetters||信件为空';
                } else {
                    letterPopupUl.style.display = 'block';
                    letterPopupTitle.textContent = '我的信件/myLetters';
                }
            }
            // 显示弹窗
            letterPopup.style.visibility = 'visible';
            letterPopup.style.opacity = '1';
        } catch (error) {
            console.error('获取信件数据时出错:', error);
            letterPopupUl.style.display = 'none';
            letterPopupTitle.textContent = '失败参数||信件为空';
        }
    }

    // 隐藏弹窗
    function hideLetterPopup() {
        letterPopup.style.visibility = 'hidden';
        letterPopup.style.opacity = '0';
    }

    // 为关闭按钮添加点击事件
    letterPopupCloseBtn.addEventListener('click', hideLetterPopup);

    // 为信件按钮添加点击事件
    if (myLettersBtn) {
        myLettersBtn.addEventListener('click', showLetterPopup);
    } else {
        console.error('未找到信件按钮元素');
    }

    // 检查是否有新消息的函数，由于不再需要该功能，可将其移除或保留为空函数
    async function checkNewMessages(accountId) {
        // 这里可以不执行任何操作
    }

    // 在页面加载时检查用户是否已登录，如果已登录则检查新消息
    const accountId = document.querySelector('.Account_id_userName').textContent.trim();
    if (accountId !== '') {
        checkNewMessages(accountId);
    }
});
// 我的信件 框架










// 默认地址 框架
// 获取所需元素
// 获取所需元素
const receiveAddress = document.querySelector('.receiveAddress');
const addressPopup = document.querySelector('#addressPopup');
const addressPopupBtn = document.querySelector('.address_popup_btn');
const addressPopupYouok = document.querySelector('.address_popup_youok');
const addressPopupYes = document.querySelector('.address_popup_yes');
const addressPopupNo = document.querySelector('.address_popup_no');
const addressPopupTextarea = document.querySelector('.address_popup_textarea');
const accountIdUserName = document.querySelector('.Account_id_userName');
const addressPopupReturnParam = document.querySelector('.address_popup_returnParam');
const address_popup_title = document.querySelector('.address_popup_title');


// 定义 AERO 变量
const AERO3 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';

// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded3 = atob(AERO3);

// 去掉前面的 /0/
const result_orr3 = decoded3.replace('/0/', '');

const GITHUB_TOKEN_address_popup = result_orr3;// 请将此替换为你自己的 GitHub 个人访问令牌
const GIST_ID_address_popup = '64b0d117f57199212b58927264bf81d6'; // 请将此替换为你的 Gist ID

// 封装函数，用于获取地址数据
async function fetchAddressData() {
    const accountId = accountIdUserName.textContent.trim();
    if (accountId) {
        try {
            const response = await fetch(`https://api.github.com/gists/${GIST_ID_address_popup}`, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN_address_popup}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch Gist data');
            }
            const gistData = await response.json();
            const addressData = JSON.parse(gistData.files['html_receiveAddress'].content);
            return addressData;
        } catch (error) {
            // console.error(error);
            return {};
        }
    }
    return {};
}

// 封装函数，用于更新地址数据
async function updateAddressData(accountId, newAddress) {
    try {
        const addressData = await fetchAddressData();
        addressData[accountId] = newAddress;
        const response = await fetch(`https://api.github.com/gists/${GIST_ID_address_popup}`, {
            method: 'PATCH',
            headers: {
                'Authorization': `token ${GITHUB_TOKEN_address_popup}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                files: {
                    'html_receiveAddress': {
                        content: JSON.stringify(addressData)
                    }
                }
            })
        });
        if (!response.ok) {
            throw new Error('Failed to update Gist data');
        }
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


// 为 receiveAddress 元素添加点击事件，点击时显示 address_popup 弹窗并请求 API 数据
receiveAddress.addEventListener('click', async function () {
    addressPopup.style.visibility = 'visible';
    addressPopup.style.opacity = '1';
    const accountId = accountIdUserName.textContent.trim();
    if (accountId === '') {
        address_popup_title.textContent = '请先登录平台||收件地址';
        // addressPopupReturnParam.textContent = "请先进行登录";
        // addressPopupReturnParam.style.display = 'block';
        // setTimeout(() => {
        //     addressPopupReturnParam.style.display = 'none';
        // }, 2000);
    } else {
        address_popup_title.textContent = '收件地址/receiveAddress';
        try {
            const addressData = await fetchAddressData();
            const userAddress = addressData[accountId] || '';
            addressPopupTextarea.value = userAddress;
        } catch (error) {
            console.error(error);
        }
    }
});

// 为 address_popup_btn 元素添加点击事件，点击时隐藏 address_popup 弹窗
addressPopupBtn.addEventListener('click', function () {
    addressPopup.style.visibility = 'hidden';
    addressPopup.style.opacity = '0';
});

// 为 address_popup_youok 元素添加点击事件，点击时判断是否登录并执行相应操作
addressPopupYouok.addEventListener('click', function () {
    const accountId = accountIdUserName.textContent.trim();
    if (accountId === '') {
        addressPopupReturnParam.textContent = "请先进行登录";
        addressPopupReturnParam.style.display = 'block';
        setTimeout(() => {
            addressPopupReturnParam.style.display = 'none';
        }, 2000);
    } else {
        addressPopupYouok.style.display = 'none';
        addressPopupYes.style.display = 'block';
        addressPopupNo.style.display = 'block';
        addressPopupTextarea.readOnly = false; // 允许编辑输入框
    }
});

// 为 address_popup_yes 元素添加点击事件，点击时保存修改并更新 API 数据
addressPopupYes.addEventListener('click', async function () {
    const updatedAddress = addressPopupTextarea.value;
    const accountId = accountIdUserName.textContent.trim();
    try {
        const success = await updateAddressData(accountId, updatedAddress);
        if (success) {
            addressPopupReturnParam.textContent = "保存成功！";
        } else {
            addressPopupReturnParam.textContent = "保存异常";
        }
        addressPopupReturnParam.style.display = 'block';
        setTimeout(() => {
            addressPopupReturnParam.style.display = 'none';
        }, 2000);
        addressPopupYes.style.display = 'none';
        addressPopupNo.style.display = 'none';
        addressPopupYouok.style.display = 'block';
        addressPopupTextarea.readOnly = true; // 保存后设为只读
    } catch (error) {
        console.error(error);
    }
});

// 为 address_popup_no 元素添加点击事件，点击时取消编辑状态
addressPopupNo.addEventListener('click', function () {
    addressPopupNo.style.display = 'none';
    addressPopupYes.style.display = 'none';
    addressPopupYouok.style.display = 'block';
    addressPopupTextarea.readOnly = true; // 取消编辑后设为只读
    const accountId = accountIdUserName.textContent.trim();
    fetchAddressData().then(addressData => {
        const userAddress = addressData[accountId] || '';
        addressPopupTextarea.value = userAddress;
    });
});
// 默认地址 框架






// 建议反馈 框架

// 获取元素
const suggestFeedbackBtn = document.querySelector('.suggestFeedback');
const feedbackPopup = document.querySelector('.feedback_popup');
const closeBtn = document.querySelector('.feedback_popup_btn');
const sendBtn = document.querySelector('.feedback_popup_end');
const returnParam = document.querySelector('.feedback_popup_returnParam');
const userNameElement = document.querySelector('.Account_id_userName');
const contactInput = document.querySelector('.contact_information');
const feedbackInput = document.querySelector('.feedback_popup_inputcont');

// 显示弹窗
suggestFeedbackBtn.addEventListener('click', () => {
    feedbackPopup.style.visibility = 'visible';
    feedbackPopup.style.opacity = '1';
});

// 关闭弹窗
closeBtn.addEventListener('click', () => {
    feedbackPopup.style.visibility = 'hidden';
    feedbackPopup.style.opacity = '0';
});

// GitHub 相关配置

// 定义 AERO 变量
const AERO5 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';

// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded5 = atob(AERO5);

// 去掉前面的 /0/
const result_orr5 = decoded5.replace('/0/', '');

const GITHUB_TOKEN_feedback_popup = result_orr5;
const GIST_ID_feedback_popup = '22cbbf0d4be63730b4a221b66aad7d51';
const FILE_NAME = 'html_suggestFeedback.txt';

// 显示返回参数并在 2 秒后隐藏
function showReturnParam(message) {
    returnParam.textContent = message;
    returnParam.style.display = 'block';
    setTimeout(() => {
        returnParam.style.display = 'none';
    }, 2000);
}

// 发送按钮点击事件
sendBtn.addEventListener('click', async () => {
    const feedbackContent = feedbackInput.value.trim();
    if (feedbackContent === '') {
        showReturnParam('反馈内容不能为空，请输入反馈或建议内容。');
        return;
    }

    let userName = userNameElement.textContent.trim();
    if (userName === '') {
        userName = '游客';
    }

    const contact = contactInput.value.trim();

    try {
        // 获取当前 Gist 内容
        const response = await fetch(`https://api.github.com/gists/${GIST_ID_feedback_popup}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN_feedback_popup}`
            }
        });

        if (!response.ok) {
            throw new Error(`请求失败，状态码: ${response.status}`);
        }

        const gistData = await response.json();
        let currentContent = gistData.files[FILE_NAME]?.content || '';

        // 确保 currentContent 结尾有换行符
        if (currentContent && !currentContent.endsWith('\n')) {
            currentContent += '\n';
        }

        // 拼接新的反馈内容
        const newContent = `用户: ${userName}, 联系方式: ${contact}, 反馈内容: ${feedbackContent}\n`;
        currentContent += newContent;

        // 更新 Gist
        const updateResponse = await fetch(`https://api.github.com/gists/${GIST_ID_feedback_popup}`, {
            method: 'PATCH',
            headers: {
                Authorization: `token ${GITHUB_TOKEN_feedback_popup}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                files: {
                    [FILE_NAME]: {
                        content: currentContent
                    }
                }
            })
        });

        if (!updateResponse.ok) {
            throw new Error(`更新 Gist 失败，状态码: ${updateResponse.status}`);
        }

        showReturnParam('发送成功！');
        // 清空输入框
        contactInput.value = '';
        feedbackInput.value = '';
    } catch (error) {
        showReturnParam(`发送异常: ${error.message}`);
    }
});
// 建议反馈 框架





// 免责条款 事件

// 获取触发按钮、弹窗和关闭按钮元素
const exemptionClauseBtn = document.querySelector('.exemption_clause');
const exemptionClausePopup = document.querySelector('.exemption_clause_popup');
const clause_popup = document.querySelector('.exemption_clause_popup_btn');
const backToTopBtn = document.querySelector('.exemption_clause_popup_top');

// 显示弹窗
exemptionClauseBtn.addEventListener('click', () => {
    exemptionClausePopup.style.visibility = 'visible';
    exemptionClausePopup.style.opacity = '1';
});

// 关闭弹窗
clause_popup.addEventListener('click', () => {
    exemptionClausePopup.style.visibility = 'hidden';
    exemptionClausePopup.style.opacity = '0';
});

// 监听滚动事件，控制回顶部按钮的显示与隐藏
const exemptionClausePopupBox = document.querySelector('.exemption_clause_popup_box');
exemptionClausePopupBox.addEventListener('scroll', () => {
    const btnRect = clause_popup.getBoundingClientRect();
    if (btnRect.top < 0) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// 为回顶部按钮添加点击事件
backToTopBtn.addEventListener('click', () => {
    exemptionClausePopupBox.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// 免责条款 事件





// 后台管理 事件
const backendManagementBtn = document.querySelector('.backendManagement');
const backendSystemPopup = document.querySelector('.backendSystem_popup');
const closeBtnBackendSystemPopup = document.querySelector('.backendSystem_popup_btn');
const sidebarBtn = document.querySelector('.sidebar_btn');
const sidebar = document.querySelector('.sidebar');
const backendSystem_popup_title = document.querySelector('.backendSystem_popup_title');
const sidebarOne = document.querySelector('.sidebarOne');
const sidebarTwo = document.querySelector('.sidebarTwo');
const sidebarThree = document.querySelector('.sidebarThree');
const sidebarFour = document.querySelector('.sidebarFour');
const sidebarFive = document.querySelector('.sidebarFive');
const backendSystemPopupHtml = document.querySelector('.backendSystem_popup_html');

//初始颜色
sidebarOne.style.color = '#00A1D6';

//充值系统
sidebarFive.addEventListener('click', () => {
    sidebarOne.style.color = '#000';
    sidebarTwo.style.color = '#000';
    sidebarThree.style.color = '#000';
    sidebarFour.style.color = '#000';
    sidebarFive.style.color = '#00A1D6';
    backendSystem_popup_title.textContent = '后台系统==>rechargeSystem';
    sidebar.classList.remove('show');
    sidebarBtn.classList.remove('follow');
    backendSystemPopupHtml.src = './API_backendManagement/rechargeSystem.html';
});

//我的订单系统
sidebarFour.addEventListener('click', () => {
    sidebarOne.style.color = '#000';
    sidebarTwo.style.color = '#000';
    sidebarThree.style.color = '#000';
    sidebarFour.style.color = '#00A1D6';
    sidebarFive.style.color = '#000';
    backendSystem_popup_title.textContent = '后台系统==>orderManagement';
    sidebar.classList.remove('show');
    sidebarBtn.classList.remove('follow');
    backendSystemPopupHtml.src = './API_backendManagement/orderManagement.html';
});

//建议反馈系统
sidebarThree.addEventListener('click', () => {
    sidebarOne.style.color = '#000';
    sidebarTwo.style.color = '#000';
    sidebarThree.style.color = '#00A1D6';
    sidebarFour.style.color = '#000';
    sidebarFive.style.color = '#000';
    backendSystem_popup_title.textContent = '后台系统==>suggestFeedback';
    sidebar.classList.remove('show');
    sidebarBtn.classList.remove('follow');
    backendSystemPopupHtml.src = './API_backendManagement/suggestFeedback.html';
});

//我的信件系统
sidebarTwo.addEventListener('click', () => {
    sidebarOne.style.color = '#000';
    sidebarTwo.style.color = '#00A1D6';
    sidebarThree.style.color = '#000';
    sidebarFour.style.color = '#000';
    sidebarFive.style.color = '#000';
    backendSystem_popup_title.textContent = '后台系统==>letterManagement';
    sidebar.classList.remove('show');
    sidebarBtn.classList.remove('follow');
    backendSystemPopupHtml.src = './API_backendManagement/letterManagement.html';
});

//登录注册系统
sidebarOne.addEventListener('click', () => {
    sidebarOne.style.color = '#00A1D6';
    sidebarTwo.style.color = '#000';
    sidebarThree.style.color = '#000';
    sidebarFour.style.color = '#000';
    sidebarFive.style.color = '#000';
    backendSystem_popup_title.textContent = '后台系统==>loginRegistration';
    sidebar.classList.remove('show');
    sidebarBtn.classList.remove('follow');
    backendSystemPopupHtml.src = './API_backendManagement/loginRegistrationSystem.html';
});

// 点击“后台管理”按钮显示弹窗
backendManagementBtn.addEventListener('click', () => {
    backendSystemPopup.style.visibility = 'visible';
    backendSystemPopup.style.opacity = '1';
});

// 点击关闭按钮隐藏弹窗和侧边栏
closeBtnBackendSystemPopup.addEventListener('click', () => {
    backendSystemPopup.style.visibility = 'hidden';
    backendSystemPopup.style.opacity = '0';
    sidebar.classList.remove('show');
    sidebarBtn.classList.remove('follow');
    backendSystem_popup_title.textContent = '后台管理/backendManagement';
    sidebarOne.style.color = '#00A1D6';
    sidebarTwo.style.color = '#000';
    sidebarThree.style.color = '#000';
    sidebarFour.style.color = '#000';
    sidebarFive.style.color = '#000';

    backendSystemPopupHtml.src = './API_backendManagement/loginRegistrationSystem.html';
});

// 点击侧边栏按钮切换侧边栏显示状态
sidebarBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        sidebarBtn.classList.remove('follow');
    } else {
        sidebar.classList.add('show');
        sidebarBtn.classList.add('follow');
    }
});
// 后台管理 事件




// 专属客服 事件
const GFService = document.querySelector('.Service');
const platform_customer_service = document.querySelector('.platform_customer_service');
const platform_customer_service_btn = document.querySelector('.platform_customer_service_btn');

// 点击 关闭
platform_customer_service_btn.addEventListener('click', () => {
    platform_customer_service.style.visibility = 'hidden';
    platform_customer_service.style.opacity = '0';
});

// 点击 客服
GFService.addEventListener('click', () => {
    platform_customer_service.style.visibility = 'visible';
    platform_customer_service.style.opacity = '1';
});
// 专属客服 事件








// 购物车弹窗 事件

// 定义 AERO 变量
const AERO6 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';

// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded6 = atob(AERO6);

// 去掉前面的 /0/
const result_orr6 = decoded6.replace('/0/', '');

// GitHub 相关配置
const GITHUB_TOKEN_shoppingCart_popup = result_orr6;
const GIST_ID_shoppingCart_popup = '1ca7ee625bd9f0385ce36dba701f51f6';
const FILE_NAME_shoppingCart_popup = 'html_shoppingCart.txt';

document.addEventListener('DOMContentLoaded', function () {
    const historyBtn_shoppingCart_popup = document.querySelector('.History');
    const accountIdUserName_shoppingCart_popup = document.querySelector('.Account_id_userName');
    const shoppingCartTitle_shoppingCart_popup = document.querySelector('.shoppingCart_popup_box_title');
    const shoppingCartList_shoppingCart_popup = document.querySelector('.shoppingCart_popup ul');
    const closeBtn_shoppingCart_popup = document.querySelector('.shoppingCart_popup_box_btn');
    const shoppingCartPopup_shoppingCart_popup = document.querySelector('.shoppingCart_popup');

    // 页面加载时检查本地存储中的账号 ID
    const storedAccountId = localStorage.getItem('accountId');
    if (storedAccountId && accountIdUserName_shoppingCart_popup) {
        accountIdUserName_shoppingCart_popup.textContent = storedAccountId;
    }

    // 关闭按钮点击事件
    closeBtn_shoppingCart_popup.addEventListener('click', function () {
        shoppingCartPopup_shoppingCart_popup.style.visibility = 'hidden';
        shoppingCartPopup_shoppingCart_popup.style.opacity = '0';
        // 更新标题为正常状态
        shoppingCartTitle_shoppingCart_popup.textContent = '购物车/shoppingCart';

        // 清空购物车列表
        shoppingCartList_shoppingCart_popup.innerHTML = '';
    });

    historyBtn_shoppingCart_popup.addEventListener('click', async () => {
        shoppingCartPopup_shoppingCart_popup.style.visibility = 'visible';
        shoppingCartPopup_shoppingCart_popup.style.opacity = '1';
        const accountId = accountIdUserName_shoppingCart_popup ? accountIdUserName_shoppingCart_popup.textContent.trim() : '';
        // console.log('获取到的账号 ID:', accountId);
        if (accountId === '') {
            shoppingCartTitle_shoppingCart_popup.textContent = '购物车||请先进行登录';
            return;
        }

        try {
            const gistData = await getGistData();
            // console.log('从 Gist 获取的数据:', gistData);
            const accountProducts = findAccountProducts(gistData, accountId);
            // console.log('匹配到的账号商品:', accountProducts);

            if (accountProducts.length === 0) {
                shoppingCartTitle_shoppingCart_popup.textContent = '购物车空空如也,去逛逛吧';
                return;
            }

            // 更新标题为正常状态
            shoppingCartTitle_shoppingCart_popup.textContent = '购物车/shoppingCart';

            // 清空购物车列表
            shoppingCartList_shoppingCart_popup.innerHTML = '';

            // 显示购物车商品
            displayShoppingCartItems(accountProducts, shoppingCartList_shoppingCart_popup);
        } catch (error) {
            console.error('获取 Gist 数据时出错:', error);
        }
    });

    async function getGistData() {
        const response = await fetch(`https://api.github.com/gists/${GIST_ID_shoppingCart_popup}`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN_shoppingCart_popup}`
            }
        });
        const data = await response.json();
        return JSON.parse(data.files[FILE_NAME_shoppingCart_popup].content);
    }

    function findAccountProducts(gistData, accountId) {
        return gistData.filter(item => item.账号 === accountId);
    }

    function displayShoppingCartItems(accountProducts, shoppingCartList) {
        accountProducts.forEach((product, index) => {
            const li = document.createElement('li');

            // 地址文本
            const dizhiBug = document.createElement('div');
            dizhiBug.className = 'receiveAddressBug';
            dizhiBug.textContent = product.地址;
            li.appendChild(dizhiBug);

            // 收件地址
            const receiveAddress = document.createElement('input');
            receiveAddress.className = 'shoppingCart_popup_receiveAddress';
            receiveAddress.placeholder = '收件地址';
            receiveAddress.readOnly = true;
            receiveAddress.value = product.地址;
            li.appendChild(receiveAddress);

            // 创建按钮容器
            const btnContainer = document.createElement('div');
            btnContainer.className = 'shoppingCart_popup_info_btns';

            // 编辑按钮
            const editBtn = document.createElement('button');
            editBtn.className = 'edit-btn';
            editBtn.textContent = '编辑';
            btnContainer.appendChild(editBtn);

            // 保存按钮
            const saveBtn = document.createElement('button');
            saveBtn.className = 'save-btn';
            saveBtn.textContent = '保存';
            saveBtn.style.display = 'none';
            btnContainer.appendChild(saveBtn);

            // 取消按钮
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'cancel-btn';
            cancelBtn.textContent = '取消';
            cancelBtn.style.display = 'none';
            btnContainer.appendChild(cancelBtn);

            li.appendChild(btnContainer);

            // 图片
            const img = document.createElement('img');
            img.className = 'shoppingCart_popup_img';
            img.src = product.图片;
            img.width = 80;
            img.height = 80;
            li.appendChild(img);

            // 创建包裹标题和金额的 div
            const infoDiv = document.createElement('div');
            infoDiv.className = 'shoppingCart_popup_info';

            // 标题
            const title = document.createElement('span');
            title.className = 'shoppingCart_popup_title';
            title.textContent = product.标题;
            infoDiv.appendChild(title);

            // 金额
            const amount = document.createElement('div');
            amount.className = 'shoppingCart_popupAmount';
            amount.textContent = product.金额;
            infoDiv.appendChild(amount);

            // 将包裹好的 div 添加到 li 中
            li.appendChild(infoDiv);

            // 订单号
            const orderNumberBox = document.createElement('div');
            orderNumberBox.className = 'shoppingCart_popupOrderNumber_box';

            const orderNumber = document.createElement('div');
            orderNumber.className = 'shoppingCart_popupOrderNumber';
            orderNumber.textContent = product.订单号;
            orderNumberBox.appendChild(orderNumber);

            const copyOrderNumber = document.createElement('span');
            copyOrderNumber.className = 'shoppingCart_popupOrderNumber_copy';
            copyOrderNumber.textContent = 'copy';
            copyOrderNumber.addEventListener('click', function () {
                copyToClipboard(product.订单号);
            });
            orderNumberBox.appendChild(copyOrderNumber);
            li.appendChild(orderNumberBox);

            // 移除购物车按钮
            const removeBtn = document.createElement('button');
            removeBtn.className = 'removeShoppingCart';
            removeBtn.textContent = '移除购物车';
            removeBtn.addEventListener('click', async function () {
                await removeItemFromCart(accountProducts, index);
                li.remove();
            });
            li.appendChild(removeBtn);

            // copy 修改
            copyOrderNumber.addEventListener('click', () => {
                shoppingCartTitle_shoppingCart_popup.textContent = '订单号copy成功';
                setTimeout(() => {
                    shoppingCartTitle_shoppingCart_popup.textContent = '购物车/shoppingCart';
                }, 2000);
                return;
            });

            // 记录原始地址，用于取消操作
            let originalAddress = product.地址;

            // 编辑按钮点击事件
            editBtn.addEventListener('click', () => {
                // 进入编辑状态
                enterEditMode();
            });

            // 保存按钮点击事件
            saveBtn.addEventListener('click', async () => {
                const newAddress = receiveAddress.value;
                const newAddress2 = dizhiBug.textContent;
                try {
                    // 更新本地数据
                    product.地址 = newAddress;
                    product.地址 = newAddress2;
                    // 更新 Gist 数据
                    await updateGistWithNewAddress(product, newAddress);
                    // 退出编辑状态
                    exitEditMode();
                    shoppingCartTitle_shoppingCart_popup.textContent = '已保存,请关闭此页面重新打开';
                    setTimeout(() => {
                        shoppingCartTitle_shoppingCart_popup.textContent = '购物车/shoppingCart';
                    }, 3000);
                } catch (error) {
                    console.error('更新 Gist 数据时出错:', error);
                }
            });

            // 取消按钮点击事件
            cancelBtn.addEventListener('click', () => {
                // 恢复原始地址
                receiveAddress.value = originalAddress;
                // 退出编辑状态
                exitEditMode();
            });

            // 进入编辑模式的函数
            function enterEditMode() {
                receiveAddress.readOnly = false;
                editBtn.style.display = 'none';
                saveBtn.style.display = 'inline-block';
                cancelBtn.style.display = 'inline-block';
            }

            // 退出编辑模式的函数
            function exitEditMode() {
                receiveAddress.readOnly = true;
                editBtn.style.display = 'inline-block';
                saveBtn.style.display = 'none';
                cancelBtn.style.display = 'none';
            }

            // 更新 Gist 数据的函数
            async function updateGistWithNewAddress(product, newAddress) {
                const gistData = await getGistData();
                const accountId = product.账号;
                const updatedGistData = gistData.map(item => {
                    if (item.账号 === accountId && item.订单号 === product.订单号) {
                        return { ...item, 地址: newAddress };
                    }
                    return item;
                });
                await updateGistData(updatedGistData);
            }

            shoppingCartList.appendChild(li);
        });
    }

    async function removeItemFromCart(accountProducts, index) {
        const gistData = await getGistData();
        const accountId = accountProducts[index].账号;
        const newGistData = gistData.filter(item => !(item.账号 === accountId && item.订单号 === accountProducts[index].订单号));
        await updateGistData(newGistData);
    }

    async function updateGistData(gistData) {
        const content = JSON.stringify(gistData, null, 2);
        const response = await fetch(`https://api.github.com/gists/${GIST_ID_shoppingCart_popup}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN_shoppingCart_popup}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                files: {
                    [FILE_NAME_shoppingCart_popup]: {
                        content
                    }
                }
            })
        });

        if (!response.ok) {
            throw new Error('更新 Gist 数据时出错');
        }
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    // 模拟登录成功函数
    function onLoginSuccess(userInfo) {
        localStorage.setItem('accountId', userInfo.accountId);
        if (accountIdUserName_shoppingCart_popup) {
            accountIdUserName_shoppingCart_popup.textContent = userInfo.accountId;
        }
    }

    // 示例调用登录成功函数，实际使用时替换为真实登录逻辑
    // onLoginSuccess({ accountId: 'your_account_id' });
});
// 购物车弹窗 事件







// 购物车 去支付 事件 begin 
// GitHub 相关配置
const AERO_apen77 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';
const decoded_open77 = atob(AERO_apen77);
const result_open77 = decoded_open77.replace('/0/', '');

const GITHUB_TOKEN_shoppingCart_popup_payNow = result_open77;
const GIST_ID_shoppingCart_popup_payNow = 'a0fa7fab625decc42a4cb6478f863289';
const FILE_NAME_shoppingCart_popup_payNow = 'html_loginTime.excel';
const GIST_ID_shoppingCart_popup_payNow2 = 'ece634c24a9746ef833000c189278ec1';
const FILE_NAME_shoppingCart_popup_payNow2 = 'html_orderTimestamp.txt';
const GIST_ID_shoppingCart_popup_payNow3 = '1ca7ee625bd9f0385ce36dba701f51f6';
const FILE_NAME_shoppingCart_popup_payNow3 = 'html_shoppingCart.txt';

// 获取当前时间并格式化
function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}/${month}/${day}/${hours}:${minutes}:${seconds}`;
}

// 获取元素
const payNowButton = document.querySelector('.payNow');
// const accountIdUserName = document.querySelector('.Account_id_userName');
const shoppingCartPopupBoxTitle = document.querySelector('.shoppingCart_popup_box_title');
const shoppingCartPopup = document.querySelector('.shoppingCart_popup ul');
// const walletId = document.querySelector('.Wallet_id');

payNowButton.addEventListener('click', async () => {
    // 判定 Account_id_userName 是否为空
    if (!accountIdUserName || accountIdUserName.textContent.trim() === '') {
        shoppingCartPopupBoxTitle.textContent = '购物车||请先进行登录';
        return;
    }

    // 判定 .shoppingCart_popup ul 是否为空
    if (!shoppingCartPopup || shoppingCartPopup.innerHTML.trim() === '') {
        shoppingCartPopupBoxTitle.textContent = '购物车空空如也,去逛逛吧';
        return;
    }

    try {
        // 获取 api 表格数据
        const response = await fetch(`https://api.github.com/gists/${GIST_ID_shoppingCart_popup_payNow}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN_shoppingCart_popup_payNow}`
            }
        });
        const gist = await response.json();
        const apiData = JSON.parse(gist.files[FILE_NAME_shoppingCart_popup_payNow].content);

        // 查找匹配的用户
        const user = apiData.find(item => item.userName === accountIdUserName.textContent);
        if (!user) {
            // 这里可以添加处理未找到用户的逻辑
            return;
        }

        // 计算 shoppingCart_popupAmount 总和
        const amounts = Array.from(shoppingCartPopup.querySelectorAll('.shoppingCart_popupAmount'))
            .map(amount => parseFloat(amount.textContent));
        const totalAmount = amounts.reduce((sum, amount) => sum + amount, 0);

        if (user.wallet >= totalAmount) {
            // 更新钱包余额
            user.wallet -= totalAmount;
            if (walletId) {
                walletId.textContent = user.wallet;
            }

            // 更新 api 数据
            const newContent = JSON.stringify(apiData, null, 2);
            await fetch(`https://api.github.com/gists/${GIST_ID_shoppingCart_popup_payNow}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `token ${GITHUB_TOKEN_shoppingCart_popup_payNow}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    files: {
                        [FILE_NAME_shoppingCart_popup_payNow]: {
                            content: newContent
                        }
                    }
                })
            });

            // 修改标题
            shoppingCartPopupBoxTitle.textContent = '付款成功!已清空购物车';
            setTimeout(() => {
                shoppingCartPopupBoxTitle.textContent = '购物车/shoppingCart';
                if (shoppingCartPopup) {
                    shoppingCartPopup.innerHTML = '';
                }
            }, 2000);

            // 获取购物车数据
            const shoppingCartResponse = await fetch(`https://api.github.com/gists/${GIST_ID_shoppingCart_popup_payNow3}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN_shoppingCart_popup_payNow}`
                }
            });
            const shoppingCartGist = await shoppingCartResponse.json();
            const shoppingCartData = JSON.parse(shoppingCartGist.files[FILE_NAME_shoppingCart_popup_payNow3].content);

            // 获取当前登录账号
            const currentAccount = accountIdUserName.textContent;

            // 筛选出与当前账号匹配的购物车记录
            const matchedRecords = shoppingCartData.filter(item => item.账号 === currentAccount);

            // 生成订单数据
            const orderItems = Array.from(shoppingCartPopup.querySelectorAll('li')).map((li, index) => {
                const img = li.querySelector('.shoppingCart_popup_img');
                const amountElement = li.querySelector('.shoppingCart_popupAmount');
                const titleElement = li.querySelector('.shoppingCart_popup_title');

                // 从匹配记录中获取地址和订单号
                const address = matchedRecords[index] ? matchedRecords[index].地址 : '';
                const orderNumber = matchedRecords[index] ? matchedRecords[index].订单号 : '';

                return {
                    账号: accountIdUserName.textContent,
                    地址: address,
                    图片: img ? img.src : '',
                    金额: amountElement ? amountElement.textContent : '',
                    标题: titleElement ? titleElement.textContent : '',
                    订单号: orderNumber,
                    支付时间: getCurrentTime(),
                    订单状态: '待处理',
                    物流单号: '空',
                    客户备注: '空'
                };
            });

            // 获取现有订单数据
            const orderResponse = await fetch(`https://api.github.com/gists/${GIST_ID_shoppingCart_popup_payNow2}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN_shoppingCart_popup_payNow}`
                }
            });
            const orderGist = await orderResponse.json();
            const existingOrderData = JSON.parse(orderGist.files[FILE_NAME_shoppingCart_popup_payNow2].content);

            // 合并新订单数据
            const newOrderData = [...existingOrderData, ...orderItems];
            const newOrderContent = JSON.stringify(newOrderData, null, 2);

            // 更新订单数据到 api
            await fetch(`https://api.github.com/gists/${GIST_ID_shoppingCart_popup_payNow2}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `token ${GITHUB_TOKEN_shoppingCart_popup_payNow}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    files: {
                        [FILE_NAME_shoppingCart_popup_payNow2]: {
                            content: newOrderContent
                        }
                    }
                })
            });

            // 删除对应账号的数据
            const newShoppingCartData = shoppingCartData.filter(item => item.账号 !== currentAccount);
            const newShoppingCartContent = JSON.stringify(newShoppingCartData, null, 2);

            // 更新购物车数据到 api
            await fetch(`https://api.github.com/gists/${GIST_ID_shoppingCart_popup_payNow3}`, {
                method: 'PATCH',
                headers: {
                    Authorization: `token ${GITHUB_TOKEN_shoppingCart_popup_payNow}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    files: {
                        [FILE_NAME_shoppingCart_popup_payNow3]: {
                            content: newShoppingCartContent
                        }
                    }
                })
            });

        } else {
            shoppingCartPopupBoxTitle.textContent = '余额不足,请及时充值！';
            setTimeout(() => {
                shoppingCartPopupBoxTitle.textContent = '购物车/shoppingCart';
            }, 2000);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// 购物车 去支付 事件 end









// 我的订单弹窗事件
// 我的订单弹窗事件
// GitHub 相关配置
// 定义 AERO 变量
const AERO_apen15 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';
// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded_open15 = atob(AERO_apen15);
// 去掉前面的 /0/
const result_open15 = decoded_open15.replace('/0/', '');

const GITHUB_TOKEN_paymentDate66 = result_open15;
const GIST_ID_paymentDate66 = 'ece634c24a9746ef833000c189278ec1';
const FILE_NAME_paymentDate66 = 'html_orderTimestamp.txt';

const orderBtn = document.querySelector('.order');
const myOrderPopup = document.querySelector('.myOrder_popup');
// const accountIdUserName = document.querySelector('.Account_id_userName');
const myOrderPopupTitle = document.querySelector('.myOrder_popup_title');
const myOrderPopupUl = document.querySelector('.myOrder_popup_ul');
const myOrderPopupBtn = document.querySelector('.myOrder_popup_btn');

orderBtn.addEventListener('click', async () => {
    myOrderPopup.style.visibility = 'visible';
    myOrderPopup.style.opacity = '1';

    if (accountIdUserName.textContent === '') {
        myOrderPopupTitle.textContent = '我的订单||请先进行登录';
    } else {
        myOrderPopupTitle.textContent = '我的订单/myOrder';
        try {
            const response = await fetch(`https://api.github.com/gists/${GIST_ID_paymentDate66}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN_paymentDate66}`
                }
            });
            const data = await response.json();
            const fileContent = data.files[FILE_NAME_paymentDate66].content;
            const orders = JSON.parse(fileContent);

            myOrderPopupUl.innerHTML = '';

            // 新增排序逻辑开始
            const userOrders = orders.filter(order =>
                order.账号 === accountIdUserName.textContent
            ).sort((a, b) =>
                new Date(b.支付时间) - new Date(a.支付时间)
            );
            // 新增排序逻辑结束

            let hasOrder = false;
            // 修改为遍历排序后的订单
            userOrders.forEach(order => {
                if (order.账号 === accountIdUserName.textContent) {
                    hasOrder = true;
                    const li = document.createElement('li');

                    const addressDiv = document.createElement('div');
                    addressDiv.classList.add('myOrderAddress');
                    addressDiv.textContent = order.地址;
                    li.appendChild(addressDiv);

                    const productDetailsDiv = document.createElement('div');
                    productDetailsDiv.classList.add('myOrder_productDetails');
                    const img = document.createElement('img');
                    img.src = order.图片;
                    productDetailsDiv.appendChild(img);
                    const span = document.createElement('span');
                    const amountDiv = document.createElement('div');
                    amountDiv.textContent = order.金额;
                    const titleDiv = document.createElement('div');
                    titleDiv.textContent = order.标题;
                    span.appendChild(amountDiv);
                    span.appendChild(titleDiv);
                    productDetailsDiv.appendChild(span);
                    li.appendChild(productDetailsDiv);

                    const dayStatusDiv = document.createElement('div');
                    dayStatusDiv.classList.add('myOrderDayStatus');
                    const daySpan = document.createElement('span');
                    daySpan.classList.add('myOrder_day');
                    daySpan.textContent = order.支付时间;
                    const statusSpan = document.createElement('span');
                    statusSpan.classList.add('myOrderStatus');
                    statusSpan.textContent = order.订单状态;
                    dayStatusDiv.appendChild(daySpan);
                    dayStatusDiv.appendChild(statusSpan);
                    li.appendChild(dayStatusDiv);

                    const orderNumberBoxDiv = document.createElement('div');
                    orderNumberBoxDiv.classList.add('myOrder_popupNumber_box');
                    const orderNumberDiv = document.createElement('div');
                    orderNumberDiv.classList.add('myOrder_popupNumber');
                    orderNumberDiv.textContent = order.订单号;
                    const orderNumberCopySpan = document.createElement('span');
                    orderNumberCopySpan.classList.add('myOrder_popupNumber_copy');
                    orderNumberCopySpan.textContent = 'copy';
                    orderNumberCopySpan.addEventListener('click', () => {
                        navigator.clipboard.writeText(orderNumberDiv.textContent).then(() => {
                            myOrderPopupTitle.textContent = '订单号copy成功';
                            setTimeout(() => {
                                myOrderPopupTitle.textContent = '我的订单/myOrder';
                            }, 2000);
                        }).catch(err => {
                            console.error('复制订单号失败: ', err);
                        });
                    });
                    orderNumberBoxDiv.appendChild(orderNumberDiv);
                    orderNumberBoxDiv.appendChild(orderNumberCopySpan);
                    li.appendChild(orderNumberBoxDiv);

                    const logisticsNumberBoxDiv = document.createElement('div');
                    logisticsNumberBoxDiv.classList.add('myOrder_popupNumber_box2');
                    const logisticsNumberDiv = document.createElement('div');
                    logisticsNumberDiv.classList.add('myOrder_popupNumber2');
                    logisticsNumberDiv.textContent = order.物流单号;
                    const logisticsNumberCopySpan = document.createElement('span');
                    logisticsNumberCopySpan.classList.add('myOrder_popupNumber_copy2');
                    logisticsNumberCopySpan.textContent = 'copy';
                    logisticsNumberCopySpan.addEventListener('click', () => {
                        navigator.clipboard.writeText(logisticsNumberDiv.textContent).then(() => {
                            myOrderPopupTitle.textContent = '物流单号copy成功';
                            setTimeout(() => {
                                myOrderPopupTitle.textContent = '我的订单/myOrder';
                            }, 2000);
                        }).catch(err => {
                            console.error('复制物流单号失败: ', err);
                        });
                    });
                    logisticsNumberBoxDiv.appendChild(logisticsNumberDiv);
                    logisticsNumberBoxDiv.appendChild(logisticsNumberCopySpan);
                    li.appendChild(logisticsNumberBoxDiv);

                    const customerRemarkDiv = document.createElement('div');
                    customerRemarkDiv.classList.add('myOrderCustomerRemark');
                    customerRemarkDiv.textContent = order.客户备注;
                    li.appendChild(customerRemarkDiv);

                    myOrderPopupUl.appendChild(li);
                }
            });

            if (!hasOrder) {
                myOrderPopupTitle.textContent = '您还没有任何订单记录';
            }

        } catch (error) {
            console.error('获取订单数据失败: ', error);
        }
    }
});

myOrderPopupBtn.addEventListener('click', () => {
    myOrderPopup.style.visibility = 'hidden';
    myOrderPopup.style.opacity = '0';
});
// 我的订单弹窗事件












// 充值弹窗事件
// 对 GITHUB_TOKEN 进行 Base64 解码
const AERO_apen25_2_6 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';
const GITHUB_TOKEN_recharge_popup = atob(AERO_apen25_2_6).replace('/0/', '');

// 定义 Gist 相关信息
const GIST_CONFIG = {
    loginTime: {
        id: 'a0fa7fab625decc42a4cb6478f863289',
        fileName: 'html_loginTime.excel'
    },
    rechargeAmount: {
        id: '0dcc63159a35bfc1412918abb9f94ea4',
        fileName: 'html_rechargeAmount.txt'
    },
    logDate: {
        id: 'ad268ed6363d959c587fa9328ffa245c',
        fileName: 'html_rechargeAmount_logDate.txt'
    }
};

// 显示充值提示信息
function showRechargeMessage(message, duration = 2000) {
    const rechargeModalReturn = document.querySelector('.rechargeModalreturn');
    rechargeModalReturn.style.display = 'block';
    rechargeModalReturn.textContent = message;
    setTimeout(() => {
        rechargeModalReturn.style.display = 'none';
    }, duration);
}

// 点击充值金额触发事件
document.querySelectorAll('.rechargeAmount').forEach(button => {
    button.addEventListener('click', () => {
        const accountUserName = document.querySelector('.Account_id_userName').textContent.trim();
        const rechargePopup = document.querySelector('.recharge_popup');
        const rechargePopupTitle = document.querySelector('.recharge_popup_title');

        const showPopup = () => {
            rechargePopup.style.visibility = 'visible';
            rechargePopup.style.opacity = '1';
        };

        if (accountUserName === '') {
            showPopup();
            rechargePopupTitle.textContent = '充值||请先进行登录';
        } else {
            showPopup();
            rechargePopupTitle.textContent = '充值/recharge';
        }
    });
});

// 点击关闭按钮隐藏弹窗
document.querySelectorAll('.recharge_popup_btn').forEach(button => {
    button.addEventListener('click', () => {
        const rechargePopup = document.querySelector('.recharge_popup');
        rechargePopup.style.visibility = 'hidden';
        rechargePopup.style.opacity = '0';
    });
});

// 点击确认充值按钮
document.querySelectorAll('.rechargeModalBtn').forEach(button => {
    button.addEventListener('click', async () => {
        const rechargeNumber = document.getElementById('rechargeModalNumber').value;
        const accountUserName = document.querySelector('.Account_id_userName').textContent.trim();

        try {
            // 获取 html_rechargeAmount.txt 文件内容
            const rechargeAmountContent = await getGistFileContent(GIST_CONFIG.rechargeAmount.id, GIST_CONFIG.rechargeAmount.fileName);

            // 查找匹配的卡号
            const matchedCard = rechargeAmountContent.find(card => card["卡号"] === rechargeNumber);

            if (!matchedCard) {
                showRechargeMessage('卡号无效,请检查卡号正确性');
                // 清空输入框内容
                document.getElementById('rechargeModalNumber').value = '';
                return;
            }

            // 获取 html_loginTime.excel 文件内容
            const loginTimeContent = await getGistFileContent(GIST_CONFIG.loginTime.id, GIST_CONFIG.loginTime.fileName);

            // 查找匹配的用户
            const matchedUser = loginTimeContent.find(user => user.userName === accountUserName);

            if (!matchedUser) {
                showRechargeMessage('请先进行登录');
                return;
            }

            // 增加钱包金额
            matchedUser.wallet += 100;

            // 删除匹配的卡号
            const newRechargeAmountContent = rechargeAmountContent.filter(card => card !== matchedCard);

            // 更新 html_loginTime.excel 文件
            await updateGistFile(GIST_CONFIG.loginTime.id, GIST_CONFIG.loginTime.fileName, JSON.stringify(loginTimeContent));
            // 更新 html_rechargeAmount.txt 文件
            await updateGistFile(GIST_CONFIG.rechargeAmount.id, GIST_CONFIG.rechargeAmount.fileName, JSON.stringify(newRechargeAmountContent));

            // 显示充值成功信息
            showRechargeMessage('充值成功！');
            // 清空输入框内容
            document.getElementById('rechargeModalNumber').value = '';

            // 更新钱包显示
            document.querySelector('.Wallet_id').textContent = matchedUser.wallet;

            // 保存充值记录到 html_rechargeAmount_logDate.txt
            const logDateContent = await getGistFileContent(GIST_CONFIG.logDate.id, GIST_CONFIG.logDate.fileName);
            const logEntry = {
                account: accountUserName,
                card: matchedCard["卡号"],
                amount: 100
            };
            logDateContent.push(logEntry);
            await updateGistFile(GIST_CONFIG.logDate.id, GIST_CONFIG.logDate.fileName, JSON.stringify(logDateContent));

        } catch (error) {
            console.error('充值过程中出现错误:', error);
            showRechargeMessage('充值过程中出现错误，请稍后重试');
        }
    });
});

// 获取 Gist 文件内容的函数
async function getGistFileContent(gistId, fileName) {
    try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN_recharge_popup}`
            }
        });
        if (!response.ok) {
            const responseText = await response.text();
            throw new Error(`获取 Gist 文件失败: ${response.status} ${response.statusText}, 响应内容: ${responseText}`);
        }
        const data = await response.json();
        return JSON.parse(data.files[fileName].content);
    } catch (error) {
        console.error('获取 Gist 文件内容时出错:', error);
        throw error;
    }
}

// 更新 Gist 文件内容的函数
async function updateGistFile(gistId, fileName, content) {
    try {
        const response = await fetch(`https://api.github.com/gists/${gistId}`, {
            method: 'PATCH',
            headers: {
                Authorization: `token ${GITHUB_TOKEN_recharge_popup}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                files: {
                    [fileName]: {
                        content: content
                    }
                }
            })
        });
        if (!response.ok) {
            const responseText = await response.text();
            throw new Error(`更新 Gist 文件失败: ${response.status} ${response.statusText}, 响应内容: ${responseText}`);
        }
    } catch (error) {
        console.error('更新 Gist 文件时出错:', error);
        throw error;
    }
}
// 充值弹窗事件










// 提现弹窗事件
// GitHub 相关配置
const AERO_apen25_2_7 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';
const decoded_open25_2_7 = atob(AERO_apen25_2_7);
const result_open25_2_7 = decoded_open25_2_7.replace('/0/', '');

const GITHUB_TOKEN_withdraw = result_open25_2_7;
const GIST_ID_withdraw = 'a0fa7fab625decc42a4cb6478f863289';
const FILE_NAME_withdraw = 'html_loginTime.excel';

// 获取元素
const withdrawAmountBtn = document.querySelector('.withdrawAmount');
const withdrawPopup = document.querySelector('.withdraw_popup');
// const accountIdUserName = document.querySelector('.Account_id_userName');
const withdrawPopupAmount = document.querySelector('.withdraw_popup_amount');
const withdrawPopupTitle = document.querySelector('.withdraw_popup_title');
const promptVariableVXCopy = document.querySelector('.promptVariable_VX_copy');
const promptVariableVX = document.querySelector('.promptVariable_VX');
const promptVariableYXCopy = document.querySelector('.promptVariable_YX_copy');
const promptVariableYX = document.querySelector('.promptVariable_YX');
const withdrawPopupBtn = document.querySelector('.withdraw_popup_btn');

// 点击显示提现弹窗
withdrawAmountBtn.addEventListener('click', async () => {
    withdrawPopup.style.visibility = 'visible';
    withdrawPopup.style.opacity = 1;

    const userName = accountIdUserName.textContent.trim();
    if (userName === '') {
        withdrawPopupAmount.textContent = '请先登录账号';
    } else {
        try {
            const response = await fetch(`https://api.github.com/gists/${GIST_ID_withdraw}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN_withdraw}`
                }
            });
            const gistData = await response.json();
            const fileContent = gistData.files[FILE_NAME_withdraw].content;
            const users = JSON.parse(fileContent);
            const user = users.find(u => u.userName === userName);
            if (user) {
                withdrawPopupAmount.textContent = `您可提现余额为:${user.wallet} 元`;
            } else {
                withdrawPopupAmount.textContent = '未找到对应的用户信息';
            }
        } catch (error) {
            console.error('获取数据失败:', error);
            withdrawPopupAmount.textContent = '获取数据失败，请稍后重试';
        }
    }
});

// 复制微信
promptVariableVXCopy.addEventListener('click', () => {
    const textToCopy = promptVariableVX.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        withdrawPopupTitle.textContent = '微信copy成功';
        setTimeout(() => {
            withdrawPopupTitle.textContent = '提现/withdraw';
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
    });
});

// 复制邮箱
promptVariableYXCopy.addEventListener('click', () => {
    const textToCopy = promptVariableYX.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        withdrawPopupTitle.textContent = '邮箱copy成功';
        setTimeout(() => {
            withdrawPopupTitle.textContent = '提现/withdraw';
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
    });
});

// 关闭弹窗
withdrawPopupBtn.addEventListener('click', () => {
    withdrawPopup.style.visibility = 'hidden';
    withdrawPopup.style.opacity = 0;
});
// 提现弹窗事件

