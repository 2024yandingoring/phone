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



// 示例：使用令牌进行 API 请求
async function makeApiCall() {
    try {
        // 假设 GIST_ID 是一个已定义的变量
        const GIST_ID = 'a0fa7fab625decc42a4cb6478f863289';// 这里只是示例，实际需正确定义
        const response = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log('API 返回的数据:', data);
    } catch (error) {
        console.error('API 请求出错:', error);
    }
}

makeApiCall();

    // 请将此替换为你自己的 GitHub 个人访问令
   
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







        // 示例：使用令牌进行 API 请求
        async function makeApiCall() {
            try {
                const response = await fetch('https://api.github.com/gists/${GIST_ID}', {
                    headers: {
                        'Authorization': `Bearer ${GITHUB_TOKEN_letter_popup}`
                    }
                });
                const data = await response.json();
                console.log('API 返回的数据:', data);
            } catch (error) {
                console.error('API 请求出错:', error);
            }
        }

        makeApiCall();




// 我的信件 框架

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

 // 示例：使用令牌进行 API 请求
        async function makeApiCall() {
            try {
                const response = await fetch('https://api.github.com/gists/${GIST_ID}', {
                    headers: {
                        'Authorization': `Bearer ${GITHUB_TOKEN_address_popup}`
                    }
                });
                const data = await response.json();
                console.log('API 返回的数据:', data);
            } catch (error) {
                console.error('API 请求出错:', error);
            }
        }

        makeApiCall();


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

 // 示例：使用令牌进行 API 请求
        async function makeApiCall() {
            try {
                const response = await fetch('https://api.github.com/gists/${GIST_ID}', {
                    headers: {
                        'Authorization': `Bearer ${GITHUB_TOKEN_feedback_popup}`
                    }
                });
                const data = await response.json();
                console.log('API 返回的数据:', data);
            } catch (error) {
                console.error('API 请求出错:', error);
            }
        }

        makeApiCall();

// GitHub 相关配置
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




 // 示例：使用令牌进行 API 请求
        async function makeApiCall() {
            try {
                const response = await fetch('https://api.github.com/gists/${GIST_ID}', {
                    headers: {
                        'Authorization': `Bearer ${GITHUB_TOKEN_shoppingCart_popup}`
                    }
                });
                const data = await response.json();
                console.log('API 返回的数据:', data);
            } catch (error) {
                console.error('API 请求出错:', error);
            }
        }

        makeApiCall();



// 购物车弹窗 事件





// GitHub 相关配置
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
                shoppingCartTitle_shoppingCart_popup.textContent = '购物车||购物车为空';
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
                shoppingCartTitle_shoppingCart_popup.textContent = '购物车||copy成功';
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
                try {
                    // 更新本地数据
                    product.地址 = newAddress;
                    // 更新 Gist 数据
                    await updateGistWithNewAddress(product, newAddress);
                    // 退出编辑状态
                    exitEditMode();
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
