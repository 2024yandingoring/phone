// 商品资料 框架

const waterfallFlowJs_1_25_1 = document.querySelector('.waterfallFlowJs_1_25_1');
const openProduct = document.querySelector('.openProduct');
const openProduct_box_btn = document.querySelector('.openProduct_box_btn');
const openProductShoppingCart = document.querySelector('.openProductShoppingCart');
const openProductShoppingCart_btn = document.querySelector('.openProductShoppingCart_btn');
const waterfallFlowJs_1_25_2 = document.querySelector('.waterfallFlowJs_1_25_2');
const openProductNov_sev = document.querySelector('.openProductNov_sev');
const openProduct_html = document.querySelector('.openProduct_html');






// 商品点开框架 延升 ==> 购物车 加入购物车 begin
// GitHub 相关配置

// 定义 AERO 变量
const AERO_apen = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';

// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded_open = atob(AERO_apen);

// 去掉前面的 /0/
const result_open = decoded_open.replace('/0/', '');

const GITHUB_TOKEN_openProductShoppingCart_going = result_open;
const GIST_ID__openProductShoppingCart_going = '1ca7ee625bd9f0385ce36dba701f51f6';
const FILE_NAME_openProductShoppingCart_going = 'html_shoppingCart.txt';

// 获取按钮元素
const submitButton = document.querySelector('.openProductShoppingCart button');
// 获取账号 ID 元素
// const accountIdElement = document.querySelector('.Account_id_userName');
// 获取标题元素
const titleElement = document.querySelector('.openProductShoppingCart_title');
// 获取图片元素
const imgElement_Cart = document.querySelector('.openProductShoppingCart_productDetails img');
// 获取地址输入框元素
const addressInput = document.querySelector('.openProductShoppingCart_input');
// 获取商品标题元素
const titleElement_Cart = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
// 获取商品金额元素
const priceElement_Cart = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');

// 为按钮添加点击事件监听器
submitButton.addEventListener('click', async () => {
    const accountId = accountIdElement.textContent.trim();
    const address = addressInput.value.trim();

    if (accountId === '') {
        // 账号 ID 为空，显示提示信息
        titleElement.textContent = '请先进行登录';
        titleElement.style.display = 'block';
        setTimeout(() => {
            titleElement.style.display = 'none';
        }, 2000);
        return;
    }

    if (address === '') {
        // 收件人地址为空，显示提示信息
        titleElement.textContent = '请填写收件人地址';
        titleElement.style.display = 'block';
        setTimeout(() => {
            titleElement.style.display = 'none';
        }, 2000);
        return;
    }

    try {
        // 获取当前 Gist 文件内容
        const response = await fetch(`https://api.github.com/gists/${GIST_ID__openProductShoppingCart_going}`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN_openProductShoppingCart_going}`
            }
        });

        if (!response.ok) {
            throw new Error(`请求失败，状态码: ${response.status}`);
        }

        const gistData = await response.json();
        const fileContent = gistData.files[FILE_NAME_openProductShoppingCart_going].content;

        let existingOrders = [];
        if (fileContent.trim() !== '') {
            try {
                existingOrders = JSON.parse(fileContent);
            } catch (parseError) {
                console.error('解析 Gist 文件内容时出现错误:', parseError);
                // 可以选择清空现有订单数据，或者根据需求进行其他处理
                existingOrders = [];
            }
        }

        // 生成订单号
        let orderNumber;
        do {
            const today = new Date();
            const datePart = today.toISOString().slice(0, 10).replace(/-/g, '');
            const randomPart = Math.floor(Math.random() * 900) + 100;
            orderNumber = `JY${datePart}${randomPart}`;
        } while (existingOrders.some(order => order.订单号 === orderNumber));

        // 收集数据
        const newOrder = {
            账号: accountId,
            订单号: orderNumber,
            图片: imgElement_Cart.src,
            地址: address,
            标题: titleElement_Cart.textContent,
            金额: parseFloat(priceElement_Cart.textContent.replace('￥', ''))
        };

        // 添加新订单到现有订单列表
        existingOrders.push(newOrder);

        // 更新 Gist 文件内容
        const updatedContent = JSON.stringify(existingOrders, null, 2);
        const updateResponse = await fetch(`https://api.github.com/gists/${GIST_ID__openProductShoppingCart_going}`, {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN_openProductShoppingCart_going}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                files: {
                    [FILE_NAME_openProductShoppingCart_going]: {
                        content: updatedContent
                    }
                }
            })
        });

        if (!updateResponse.ok) {
            throw new Error(`更新 Gist 失败，状态码: ${updateResponse.status}`);
        }

        titleElement.textContent = '已加入购物车';
        titleElement.style.display = 'block';
        setTimeout(() => {
            titleElement.style.display = 'none';
        }, 2000);
        return;
    } catch (error) {
        console.error('写入数据时出现错误:', error);
    }
});
// 商品点开框架 延升 ==> 购物车 加入购物车 bend






//  商品点开框架 延升 ==> 联系客服 事件
openProductNov_sev.addEventListener('click', () => {
    platform_customer_service.style.visibility = 'visible';
    platform_customer_service.style.opacity = '1';
});

//  商品点开框架 延升 ==> 购物车 关闭按钮 事件
openProductShoppingCart_btn.addEventListener('click', () => {
    openProductShoppingCart.style.visibility = 'hidden';
    openProductShoppingCart.style.opacity = '0';
});

// 商品点开框架 延升 框架关闭按钮 事件
openProduct_box_btn.addEventListener('click', () => {
    openProduct.style.visibility = 'hidden';
    openProduct.style.opacity = '0';
    openProduct_html.src = '';
});

//  商品点开框架 延升 ==> 我要购买 关闭按钮 事件
const purchaseDate_btn = document.querySelector('.purchaseDate_btn');
const purchaseDate_bbt = document.querySelector('.purchaseDate');
const openProduct_html2 = document.querySelector('.openProduct_html');
purchaseDate_btn.addEventListener('click', () => {
    purchaseDate_bbt.style.visibility = 'hidden';
    purchaseDate_bbt.style.opacity = '0';
    openProduct_html.src = '';
});





//  商品点开框架 我要购买 事件 begin
// GitHub 相关配置
// 定义 AERO 变量
const AERO_apen3 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';
// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded_open3 = atob(AERO_apen3);
// 去掉前面的 /0/
const result_open3 = decoded_open3.replace('/0/', '');

const GITHUB_TOKEN_openProductNov_go = result_open3;
const GIST_ID_openProductNov_go = '64b0d117f57199212b58927264bf81d6';
const FILE_NAME_openProductNov_go = 'html_receiveAddress';

// 获取点击按钮元素
const openProductNov_go = document.querySelector('.openProductNov_go');
// 获取账号 ID 元素
const accountIdElement2 = document.querySelector('.Account_id_userName');
// 获取输入框元素
const purchaseDate_input = document.querySelector('.purchaseDate_input');

// 为按钮添加点击事件监听器
openProductNov_go.addEventListener('click', async () => {
    purchaseDate_bbt.style.visibility = 'visible';
    purchaseDate_bbt.style.opacity = '1';
    // 获取账号 ID
    const accountId = accountIdElement2.textContent.trim();

    try {
        // 发起请求获取 Gist 数据
        const response = await fetch(`https://api.github.com/gists/${GIST_ID_openProductNov_go}`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN_openProductNov_go}`
            }
        });

        if (!response.ok) {
            throw new Error(`请求失败，状态码: ${response.status}`);
        }

        // 解析响应数据
        const gistData = await response.json();
        // 获取指定文件名的文件内容
        const fileContent = gistData.files[FILE_NAME_openProductNov_go].content;
        // 解析文件内容为 JSON 对象
        const addressData = JSON.parse(fileContent);

        // 检查账号 ID 是否存在于数据中
        if (addressData.hasOwnProperty(accountId)) {
            // 如果存在，将对应地址填充到输入框中
            purchaseDate_input.value = addressData[accountId];
        } else {
            // 如果不存在，清空输入框
            purchaseDate_input.value = '';
        }
    } catch (error) {
        // 处理错误，可根据需求进行提示
        console.error('获取数据时出现错误:', error);
    }
});
//  商品点开框架 我要购买 事件 end







//  商品点开框架 加购物车 事件 begin
// GitHub 相关配置
// 定义 AERO 变量
const AERO_apen2 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';
// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded_open2 = atob(AERO_apen2);
// 去掉前面的 /0/
const result_open2 = decoded_open2.replace('/0/', '');

const GITHUB_TOKEN_openProductNov_shop = result_open2;
const GIST_ID_openProductNov_shop = '64b0d117f57199212b58927264bf81d6';
const FILE_NAME_openProductNov_shop = 'html_receiveAddress';

// 获取点击按钮元素
const shopButton = document.querySelector('.openProductNov_shop');
// 获取账号 ID 元素
const accountIdElement = document.querySelector('.Account_id_userName');
// 获取输入框元素
const inputElement = document.querySelector('.openProductShoppingCart_input');

// 为按钮添加点击事件监听器
shopButton.addEventListener('click', async () => {
    openProductShoppingCart.style.visibility = 'visible';
    openProductShoppingCart.style.opacity = '1';
    // 获取账号 ID
    const accountId = accountIdElement.textContent.trim();

    try {
        // 发起请求获取 Gist 数据
        const response = await fetch(`https://api.github.com/gists/${GIST_ID_openProductNov_shop}`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN_openProductNov_shop}`
            }
        });

        if (!response.ok) {
            throw new Error(`请求失败，状态码: ${response.status}`);
        }

        // 解析响应数据
        const gistData = await response.json();
        // 获取指定文件名的文件内容
        const fileContent = gistData.files[FILE_NAME_openProductNov_shop].content;
        // 解析文件内容为 JSON 对象
        const addressData = JSON.parse(fileContent);

        // 检查账号 ID 是否存在于数据中
        if (addressData.hasOwnProperty(accountId)) {
            // 如果存在，将对应地址填充到输入框中
            inputElement.value = addressData[accountId];
        } else {
            // 如果不存在，清空输入框
            inputElement.value = '';
        }
    } catch (error) {
        // 处理错误，可根据需求进行提示
        console.error('获取数据时出现错误:', error);
    }
});
//  商品点开框架 加购物车 事件 end








// 商品点开框架 去支付 事件 begin 
//支付里面的 取消点击事件
const paymentDateCancelAction = document.querySelector('.paymentDateCancelAction');
// const paymentDate = document.querySelector('.paymentDate');




// 获取按钮元素
const purchaseButton = document.querySelector('.purchaseDate_going');

// 获取相关元素
const accountUserNamePaymentDate = document.querySelector('.Account_id_userName');
const purchaseTitle = document.querySelector('.purchaseDate_title');
const purchaseInput = document.querySelector('.purchaseDate_input');
const paymentDate = document.querySelector('.paymentDate');
const paymentDateAccountName = document.querySelector('.paymentDateAccountName');
const paymentDateAddress = document.querySelector('.paymentDateAddress');
const paymentDateProductImg = document.querySelector('.paymentDate_productDetails img');
const purchaseProductImg = document.querySelector('.purchaseDate_productDetails img');
const paymentDateAmount = document.querySelector('.paymentDate_productDetails span div:nth-child(1)');
const purchaseAmount = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
const paymentDateTitle = document.querySelector('.paymentDate_productDetails span div:nth-child(2)');
const purchaseProductTitle = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
const paymentDateOrder = document.querySelector('.paymentDateOrder');
const paymentDateDay = document.querySelector('.paymentDate_day');
const paymentDateStatus = document.querySelector('.paymentDateStatus');
const paymentDateBalance = document.querySelector('.paymentDateBalance');

// GitHub 相关配置
// 定义 AERO 变量
const AERO_apen10 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';
// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded_open10 = atob(AERO_apen10);
// 去掉前面的 /0/
const result_open10 = decoded_open10.replace('/0/', '');

const GITHUB_TOKEN_paymentDate1 = result_open10;
const GIST_ID_paymentDate1 = 'a0fa7fab625decc42a4cb6478f863289';
const FILE_NAME_paymentDate1 = 'html_loginTime.excel';

// 为按钮添加点击事件监听器
purchaseButton.addEventListener('click', async () => {
    if (accountUserNamePaymentDate.textContent.trim() === '') {
        purchaseTitle.style.display = 'block';
        purchaseTitle.textContent = '请先进行登录';
        setTimeout(() => {
            purchaseTitle.style.display = 'none';
        }, 2000);
    } else {
        if (purchaseInput.value.trim() === '') {
            purchaseTitle.style.display = 'block';
            purchaseTitle.textContent = '请输入正确地址';
            setTimeout(() => {
                purchaseTitle.style.display = 'none';
            }, 2000);
        } else {
            // 显示支付弹窗
            paymentDate.style.visibility = 'visible';
            paymentDate.style.opacity = '1';

            // 同步账号信息
            paymentDateAccountName.textContent = accountUserNamePaymentDate.textContent;

            // 同步地址信息
            paymentDateAddress.textContent = purchaseInput.value;

            // 同步图片信息
            paymentDateProductImg.src = purchaseProductImg.src;

            // 同步金额信息
            paymentDateAmount.textContent = purchaseAmount.textContent.replace('￥', '');

            // 同步标题信息
            paymentDateTitle.textContent = purchaseProductTitle.textContent;

            // 生成订单号
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const randomNum = String(Math.floor(Math.random() * 900) + 100);
            paymentDateOrder.textContent = `JY${year}${month}${day}${randomNum}`;

            // 获取当前时间
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            paymentDateDay.textContent = `${year}/${month}/${day}/${hours}:${minutes}:${seconds}`;

            // 设置订单状态
            paymentDateStatus.textContent = '待处理';

            // 从 GitHub Gist 获取数据
            try {
                const response = await fetch(`https://api.github.com/gists/${GIST_ID_paymentDate1}`, {
                    headers: {
                        Authorization: `token ${GITHUB_TOKEN_paymentDate1}`
                    }
                });
                const data = await response.json();
                const fileContent = data.files[FILE_NAME_paymentDate1].content;
                const tableData = JSON.parse(fileContent);

                // 查找匹配的用户信息
                const matchedUser = tableData.find(user => user.userName === paymentDateAccountName.textContent);
                if (matchedUser) {
                    paymentDateBalance.textContent = matchedUser.wallet;
                }
            } catch (error) {
                console.error('获取 GitHub Gist 数据时出错:', error);
            }
        }
    }
});




// GitHub 相关配置
// 定义 AERO 变量
const AERO_apen11 = 'LzAvZ2l0aHViX3BhdF8xMUJONFFGUkEwa2ZmV00zbHJkZTc4XzJXSHBqMkdCZ2dCYjVRcEVJekN3Q245TDVxT2U3UjNUblBtVHNuOWVlTklKSFNRQk1IRGJPSWhXanQz';
// 对 GITHUB_TOKEN 进行 Base64 解码
const decoded_open11 = atob(AERO_apen11);
// 去掉前面的 /0/
const result_open11 = decoded_open11.replace('/0/', '');

const GITHUB_TOKEN_paymentDate2 = result_open11;
const GIST_ID_paymentDate2 = 'a0fa7fab625decc42a4cb6478f863289';
const FILE_NAME_paymentDate2 = 'html_loginTime.excel';
const GIST_ID_paymentDate3 = 'ece634c24a9746ef833000c189278ec1';
const FILE_NAME_paymentDate3 = 'html_orderTimestamp.txt';

// 获取相关元素
const payButton = document.querySelector('.paymentDatePaymentDate');
const cancelButton = document.querySelector('.paymentDateCancelAction');
const paymentDateReturnValue = document.querySelector('.paymentDate_return_value');
const paymentOptions = document.querySelectorAll('input[name="payment"]');
// const paymentDateBalance = document.querySelector('.paymentDateBalance');
const amountElement = document.querySelector('.paymentDate_productDetails span div:nth-child(1)');
// const paymentDate = document.querySelector('.paymentDate');
const purchaseDateTitle = document.querySelector('.purchaseDate_title');
// const paymentDateAccountName = document.querySelector('.paymentDateAccountName');
// const paymentDateAddress = document.querySelector('.paymentDateAddress');
// const paymentDateProductImg = document.querySelector('.paymentDate_productDetails img');
// const paymentDateTitle = document.querySelector('.paymentDate_productDetails span div:nth-child(2)');
// const paymentDateOrder = document.querySelector('.paymentDateOrder');
// const paymentDateDay = document.querySelector('.paymentDate_day');
// const paymentDateStatus = document.querySelector('.paymentDateStatus');
const paymentDateRemark = document.querySelector('.paymentDateRemark');
const logisticsOrderNumber = document.querySelector('.LogisticsOrderNumber');

// 生成唯一订单号
function generateUniqueOrderNumber(existingOrderNumbers) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    let randomNum;
    let newOrderNumber;
    do {
        randomNum = String(Math.floor(Math.random() * 900) + 100);
        newOrderNumber = `JY${year}${month}${day}${randomNum}`;
    } while (existingOrderNumbers.includes(newOrderNumber));
    return newOrderNumber;
}

// 为付款按钮添加点击事件监听器
payButton.addEventListener('click', async () => {
    const selectedPaymentMethod = Array.from(paymentOptions).find(option => option.checked).value;

    if (selectedPaymentMethod === 'alipay') {
        paymentDateReturnValue.style.display = 'block';
        paymentDateReturnValue.textContent = '支付宝方式暂未开通，请用钱包付款';
        setTimeout(() => {
            paymentDateReturnValue.style.display = 'none';
        }, 2000);
    } else if (selectedPaymentMethod === 'wechatpay') {
        paymentDateReturnValue.style.display = 'block';
        paymentDateReturnValue.textContent = '微信付款方式暂未开通，请用钱包付款';
        setTimeout(() => {
            paymentDateReturnValue.style.display = 'none';
        }, 2000);
    } else if (selectedPaymentMethod === 'JIEYOU') {
        const balance = parseFloat(paymentDateBalance.textContent);
        const amount = parseFloat(amountElement.textContent);

        if (balance >= amount) {
            try {
                // 获取 GitHub Gist 中的用户数据
                const userDataResponse = await fetch(`https://api.github.com/gists/${GIST_ID_paymentDate2}`, {
                    headers: {
                        Authorization: `token ${GITHUB_TOKEN_paymentDate2}`
                    }
                });
                const userData = await userDataResponse.json();
                const userFileContent = userData.files[FILE_NAME_paymentDate2].content;
                let tableData = JSON.parse(userFileContent);

                // 获取 GitHub Gist 中的订单数据
                const orderDataResponse = await fetch(`https://api.github.com/gists/${GIST_ID_paymentDate3}`, {
                    headers: {
                        Authorization: `token ${GITHUB_TOKEN_paymentDate2}`
                    }
                });
                const orderData = await orderDataResponse.json();
                const orderFileContent = orderData.files[FILE_NAME_paymentDate3].content;
                let existingOrders = JSON.parse(orderFileContent);

                // 获取现有的订单号数组
                const existingOrderNumbers = existingOrders.map(order => order.订单号);

                // 确保订单号唯一
                let orderNumber = paymentDateOrder.textContent;
                if (existingOrderNumbers.includes(orderNumber)) {
                    orderNumber = generateUniqueOrderNumber(existingOrderNumbers);
                    paymentDateOrder.textContent = orderNumber;
                }

                // 找到匹配的用户
                const matchedUserIndex = tableData.findIndex(user => user.userName === paymentDateAccountName.textContent);
                if (matchedUserIndex!== -1) {
                    // 扣除余额
                    tableData[matchedUserIndex].wallet -= amount;

                    // 更新 GitHub Gist 中的用户数据
                    const updatedUserFileContent = JSON.stringify(tableData);
                    const updateUserResponse = await fetch(`https://api.github.com/gists/${GIST_ID_paymentDate2}`, {
                        method: 'PATCH',
                        headers: {
                            Authorization: `token ${GITHUB_TOKEN_paymentDate2}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            files: {
                                [FILE_NAME_paymentDate2]: {
                                    content: updatedUserFileContent
                                }
                            }
                        })
                    });

                    // 隐藏支付弹窗
                    paymentDate.style.visibility = 'hidden';
                    paymentDate.style.opacity = '0';

                    // 显示付款成功提示
                    purchaseDateTitle.style.display = 'block';
                    purchaseDateTitle.textContent = '付款成功！去看看其它商品吧。';
                    setTimeout(() => {
                        purchaseDateTitle.style.display = 'none';
                    }, 2000);

                    // 生成新的订单数据
                    const newOrder = {
                        "账号": paymentDateAccountName.textContent,
                        "地址": paymentDateAddress.textContent,
                        "图片": paymentDateProductImg.src,
                        "金额": amountElement.textContent,
                        "标题": paymentDateTitle.textContent,
                        "订单号": orderNumber,
                        "支付时间": paymentDateDay.textContent,
                        "订单状态": paymentDateStatus.textContent,
                        "物流单号": logisticsOrderNumber? logisticsOrderNumber.textContent : '',
                        "客户备注": paymentDateRemark.value
                    };

                    // 将新订单添加到现有订单数组中
                    existingOrders.push(newOrder);

                    // 更新 GitHub Gist 中的订单数据
                    const updatedOrderFileContent = JSON.stringify(existingOrders);
                    const updateOrderResponse = await fetch(`https://api.github.com/gists/${GIST_ID_paymentDate3}`, {
                        method: 'PATCH',
                        headers: {
                            Authorization: `token ${GITHUB_TOKEN_paymentDate2}`,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            files: {
                                [FILE_NAME_paymentDate3]: {
                                    content: updatedOrderFileContent
                                }
                            }
                        })
                    });
                }
            } catch (error) {
                console.error('处理支付时出错:', error);
            }
        } else {
            paymentDateReturnValue.style.display = 'block';
            paymentDateReturnValue.textContent = '您的余额不足,请先进行充值！';
            setTimeout(() => {
                paymentDateReturnValue.style.display = 'none';
            }, 2000);
        }
    }
    // 清空备注内容
    paymentDateRemark.value = '';
});

// 为取消按钮添加点击事件监听器
cancelButton.addEventListener('click', () => {
    // 清空备注内容
    paymentDateRemark.value = '';
    paymentDate.style.visibility = 'hidden';
    paymentDate.style.opacity = '0';
});
// 商品点开框架 去支付 事件 end











// 历史记录 事件
// 获取相关元素
const customerBtn = document.querySelector('.Customer');
const historyPopup = document.querySelector('.historyRecord_popup');
const historyRecord_popup_btn = document.querySelector('.historyRecord_popup_btn');
const historyRecord_popup_ul_btn = document.querySelector('.historyRecord_popup_ul_btn');
const recordList = document.querySelector('.historyRecord_popup_ul');

// 显示弹窗
customerBtn.addEventListener('click', () => {
    historyPopup.style.opacity = 1;
    historyPopup.style.visibility = 'visible';
});

// 关闭弹窗
historyRecord_popup_btn.addEventListener('click', () => {
    historyPopup.style.opacity = 0;
    setTimeout(() => {
        historyPopup.style.visibility = 'hidden';
    }, 300);
});

// 清空记录
historyRecord_popup_ul_btn.addEventListener('click', () => {
    recordList.innerHTML = '';
});

// 删除单个记录
recordList.addEventListener('click', (event) => {
    if (event.target.classList.contains('historyRecord_popup_li_info_btn')) {
        const li = event.target.closest('.historyRecord_popup_li');
        li.remove();
    }
});
// 历史记录 事件








// 1/25/1一个商品资料点击
waterfallFlowJs_1_25_1.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/HuaWeiPura70.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sel5fuGAGKVYa1WR3DEwLS22V6CrxsPd1mpsq6bs*s4CpzWD8MN.2GDho1.DqAQWooUBnW1VGv5GZCZipOA0uC0!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥4498',
        标题: '华为 pura70',
        规格: ['黑色12GB+256GB', '冰晶蓝色12GB+256GB', '樱玫红色12GB+256GB', '雪域白色12GB+256GB'],
        规格对应图片: {
            '黑色12GB+256GB': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sel5fuGAGKVYa1WR3DEwLS22V6CrxsPd1mpsq6bs*s4CpzWD8MN.2GDho1.DqAQWooUBnW1VGv5GZCZipOA0uC0!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '冰晶蓝色12GB+256GB': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SV1gLYH0oF2KU8OT5.8C8.sGuh0zfqvS6uOIFwwsclP4JJEudVrUYYWhZVKe3I4EUtwbhx*icf7NrUspIMF3*RA!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '樱玫红色12GB+256GB': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SXds1AEj9ow40KEOuQzalSolS9fNmEn4Tu6oc3yW8qQhuOG7gzCQwoLfH*ak5NepnvsJKI94YFS*icSIG*RKlOE!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '雪域白色12GB+256GB': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SfCMVoCo2sEHl.JEOAn19VjuD.KsaCUJdi7nflKlbcmckiA5UAkrRhNQGj3lX7n8B*onDlqLgXzN6sGESP.faLA!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '黑色12GB+256GB': '￥4498',
            '冰晶蓝色12GB+256GB': '￥4848',
            '樱玫红色12GB+256GB': '￥4999',
            '雪域白色12GB+256GB': '￥4848'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表



    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sel5fuGAGKVYa1WR3DEwLS22V6CrxsPd1mpsq6bs*s4CpzWD8MN.2GDho1.DqAQWooUBnW1VGv5GZCZipOA0uC0!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥4498',
        标题: '华为 pura70',
        规格: ['黑色12GB+256GB', '冰晶蓝色12GB+256GB', '樱玫红色12GB+256GB', '雪域白色12GB+256GB'],
        规格对应图片: {
            '黑色12GB+256GB': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sel5fuGAGKVYa1WR3DEwLS22V6CrxsPd1mpsq6bs*s4CpzWD8MN.2GDho1.DqAQWooUBnW1VGv5GZCZipOA0uC0!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '冰晶蓝色12GB+256GB': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SV1gLYH0oF2KU8OT5.8C8.sGuh0zfqvS6uOIFwwsclP4JJEudVrUYYWhZVKe3I4EUtwbhx*icf7NrUspIMF3*RA!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '樱玫红色12GB+256GB': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SXds1AEj9ow40KEOuQzalSolS9fNmEn4Tu6oc3yW8qQhuOG7gzCQwoLfH*ak5NepnvsJKI94YFS*icSIG*RKlOE!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '雪域白色12GB+256GB': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SfCMVoCo2sEHl.JEOAn19VjuD.KsaCUJdi7nflKlbcmckiA5UAkrRhNQGj3lX7n8B*onDlqLgXzN6sGESP.faLA!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '黑色12GB+256GB': '￥4498',
            '冰晶蓝色12GB+256GB': '￥4848',
            '樱玫红色12GB+256GB': '￥4999',
            '雪域白色12GB+256GB': '￥4848'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表









    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_1_25_1 = document.querySelectorAll('.waterfallFlowJs_1_25_1');
    waterfallFlowJs_1_25_1.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});

// 1/25/2一个商品资料点击
waterfallFlowJs_1_25_2.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/KanJian.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SeVJGADiQhi0R5AVYfH5cfIU4Y3AAGN4jShstjVPdm*fTd*04rOPq.*RMjsvsmYl6uibJqtERjrwP4.8iGhaXno!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥28.88',
        标题: '柴静《看见》',
        规格: ['全新正版'],
        规格对应图片: {
            '全新正版': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SeVJGADiQhi0R5AVYfH5cfIU4Y3AAGN4jShstjVPdm*fTd*04rOPq.*RMjsvsmYl6uibJqtERjrwP4.8iGhaXno!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '全新正版': '￥28.88'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表







    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SeVJGADiQhi0R5AVYfH5cfIU4Y3AAGN4jShstjVPdm*fTd*04rOPq.*RMjsvsmYl6uibJqtERjrwP4.8iGhaXno!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥28.88',
        标题: '柴静《看见》',
        规格: ['全新正版'],
        规格对应图片: {
            '全新正版': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SeVJGADiQhi0R5AVYfH5cfIU4Y3AAGN4jShstjVPdm*fTd*04rOPq.*RMjsvsmYl6uibJqtERjrwP4.8iGhaXno!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '全新正版': '￥28.88'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表








    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_1_25_2 = document.querySelectorAll('.waterfallFlowJs_1_25_2');
    waterfallFlowJs_1_25_2.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});

// 资料点击
const waterfallFlowJs_2_17_1 = document.querySelector('.waterfallFlowJs_2_17_1');
waterfallFlowJs_2_17_1.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/HuoZhe.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*STj5NmYPfjWlsJQt6Bx53UQbxZQJgRIX.npDpcCIFs8tJswkJQ8KiMOqFNbBhmPMGCN1OcAlQbULXnp4GgH3*f4!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥23',
        标题: '余华《活着》',
        规格: ['全新正版'],
        规格对应图片: {
            '全新正版': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*STj5NmYPfjWlsJQt6Bx53UQbxZQJgRIX.npDpcCIFs8tJswkJQ8KiMOqFNbBhmPMGCN1OcAlQbULXnp4GgH3*f4!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5'
        },
        规格对应金额: {
            '全新正版': '￥23'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表







    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*STj5NmYPfjWlsJQt6Bx53UQbxZQJgRIX.npDpcCIFs8tJswkJQ8KiMOqFNbBhmPMGCN1OcAlQbULXnp4GgH3*f4!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥23',
        标题: '余华《活着》',
        规格: ['全新正版'],
        规格对应图片: {
            '全新正版': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*STj5NmYPfjWlsJQt6Bx53UQbxZQJgRIX.npDpcCIFs8tJswkJQ8KiMOqFNbBhmPMGCN1OcAlQbULXnp4GgH3*f4!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5'
        },
        规格对应金额: {
            '全新正版': '￥23'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表








    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_2_17_1 = document.querySelectorAll('.waterfallFlowJs_2_17_1');
    waterfallFlowJs_2_17_1.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});

// 资料点击
const waterfallFlowJs_2_17_2 = document.querySelector('.waterfallFlowJs_2_17_2');
waterfallFlowJs_2_17_2.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/ZhiJin.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWgzA1AEjPTGv1OsBQpBj.cmh8fK9yaNojTGyzxrjc38cjSBpz6mW8mMXpsfg4DA.V1Fkuan6a5.P5dIB6vMZqw!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥29.90',
        标题: '植护大包抽纸',
        规格: ['20大包','40大包','60大包','80大包'],
        规格对应图片: {
            '20大包': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWgzA1AEjPTGv1OsBQpBj.cmh8fK9yaNojTGyzxrjc38cjSBpz6mW8mMXpsfg4DA.V1Fkuan6a5.P5dIB6vMZqw!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '40大包':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWgzA1AEjPTGv1OsBQpBj.cmh8fK9yaNojTGyzxrjc38cjSBpz6mW8mMXpsfg4DA.V1Fkuan6a5.P5dIB6vMZqw!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '60大包':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWgzA1AEjPTGv1OsBQpBj.cmh8fK9yaNojTGyzxrjc38cjSBpz6mW8mMXpsfg4DA.V1Fkuan6a5.P5dIB6vMZqw!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '80大包':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWgzA1AEjPTGv1OsBQpBj.cmh8fK9yaNojTGyzxrjc38cjSBpz6mW8mMXpsfg4DA.V1Fkuan6a5.P5dIB6vMZqw!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '20大包': '￥29.90',
            '40大包': '￥59.80',
            '60大包': '￥89.70',
            '80大包': '￥119.60'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表







    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWgzA1AEjPTGv1OsBQpBj.cmh8fK9yaNojTGyzxrjc38cjSBpz6mW8mMXpsfg4DA.V1Fkuan6a5.P5dIB6vMZqw!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥29.90',
        标题: '植护大包抽纸',
        规格: ['20大包','40大包','60大包','80大包'],
        规格对应图片: {
            '20大包': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWgzA1AEjPTGv1OsBQpBj.cmh8fK9yaNojTGyzxrjc38cjSBpz6mW8mMXpsfg4DA.V1Fkuan6a5.P5dIB6vMZqw!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '40大包':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWgzA1AEjPTGv1OsBQpBj.cmh8fK9yaNojTGyzxrjc38cjSBpz6mW8mMXpsfg4DA.V1Fkuan6a5.P5dIB6vMZqw!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '60大包':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWgzA1AEjPTGv1OsBQpBj.cmh8fK9yaNojTGyzxrjc38cjSBpz6mW8mMXpsfg4DA.V1Fkuan6a5.P5dIB6vMZqw!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '80大包':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWgzA1AEjPTGv1OsBQpBj.cmh8fK9yaNojTGyzxrjc38cjSBpz6mW8mMXpsfg4DA.V1Fkuan6a5.P5dIB6vMZqw!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '20大包': '￥29.90',
            '40大包': '￥59.80',
            '60大包': '￥89.70',
            '80大包': '￥119.60'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表








    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_2_17_2 = document.querySelectorAll('.waterfallFlowJs_2_17_2');
    waterfallFlowJs_2_17_2.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});

// 资料点击
const waterfallFlowJs_2_17_3 = document.querySelector('.waterfallFlowJs_2_17_3');
waterfallFlowJs_2_17_3.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/AiQiYi.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SeM2W8zfgCpsP7hvQMcehoytDm51qE3.c5lg6Z5Ge71DztOnHNG2OZ7JzM63kbL5OLnlKpf3XModfIaRss2dIIA!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥1.20',
        标题: '爱奇艺会员',
        规格: ['1天'],
        规格对应图片: {
            '1天': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SeM2W8zfgCpsP7hvQMcehoytDm51qE3.c5lg6Z5Ge71DztOnHNG2OZ7JzM63kbL5OLnlKpf3XModfIaRss2dIIA!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5'
        },
        规格对应金额: {
            '1天': '￥1.20'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表







    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SeM2W8zfgCpsP7hvQMcehoytDm51qE3.c5lg6Z5Ge71DztOnHNG2OZ7JzM63kbL5OLnlKpf3XModfIaRss2dIIA!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥1.20',
        标题: '爱奇艺会员',
        规格: ['1天'],
        规格对应图片: {
            '1天': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SeM2W8zfgCpsP7hvQMcehoytDm51qE3.c5lg6Z5Ge71DztOnHNG2OZ7JzM63kbL5OLnlKpf3XModfIaRss2dIIA!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5'
        },
        规格对应金额: {
            '1天': '￥1.20'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表








    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_2_17_3 = document.querySelectorAll('.waterfallFlowJs_2_17_3');
    waterfallFlowJs_2_17_3.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});

// 资料点击
const waterfallFlowJs_2_17_4 = document.querySelector('.waterfallFlowJs_2_17_4');
waterfallFlowJs_2_17_4.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/HongMiK40S.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se.HCSGBK7uUqLE6tx4*mDWanZrF.sYs6TUI*IrQ0dShbThMak0EAFkEYPe3KQx1vOiGLKf04DeSr61fLswjxH4!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥1899',
        标题: '红米K40S',
        规格: ['亮黑12GB+256GB','幻境12GB+256GB','银灰12GB+256GB','青绿12GB+256GB'],
        规格对应图片: {
            '亮黑12GB+256GB': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se.HCSGBK7uUqLE6tx4*mDWanZrF.sYs6TUI*IrQ0dShbThMak0EAFkEYPe3KQx1vOiGLKf04DeSr61fLswjxH4!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '幻境12GB+256GB':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SW5TVP8bHdrdpR8Kgwa.NGL7qlI4*PrM287*xeoSohOU1q6*GgxiU97eUO.WWDbFhRmuzn4vh3fuEC7QxAE0iho!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '银灰12GB+256GB':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SbAa9W.SXB4resbh459b1fcKvhA0WZlgtGGguCyNwHMgzvDxnVxN1sWR1eylQWXSmVuzs6*QaiEgeyVlXffzLE0!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '青绿12GB+256GB':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SaYnchid1MoLZ1tYRJRfXZ5KiPExIWbxngj.2AyrhdlvHyKDTdT2MfQDbWdOn7PcfIXvJFeHatMMSCVqYczRKp8!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '亮黑12GB+256GB': '￥1899',
            '幻境12GB+256GB': '￥1799',
            '银灰12GB+256GB': '￥1899',
            '青绿12GB+256GB': '￥1799'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表







    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se.HCSGBK7uUqLE6tx4*mDWanZrF.sYs6TUI*IrQ0dShbThMak0EAFkEYPe3KQx1vOiGLKf04DeSr61fLswjxH4!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥1899',
        标题: '红米K40S',
        规格: ['亮黑12GB+256GB','幻境12GB+256GB','银灰12GB+256GB','青绿12GB+256GB'],
        规格对应图片: {
            '亮黑12GB+256GB': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se.HCSGBK7uUqLE6tx4*mDWanZrF.sYs6TUI*IrQ0dShbThMak0EAFkEYPe3KQx1vOiGLKf04DeSr61fLswjxH4!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '幻境12GB+256GB':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SW5TVP8bHdrdpR8Kgwa.NGL7qlI4*PrM287*xeoSohOU1q6*GgxiU97eUO.WWDbFhRmuzn4vh3fuEC7QxAE0iho!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '银灰12GB+256GB':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SbAa9W.SXB4resbh459b1fcKvhA0WZlgtGGguCyNwHMgzvDxnVxN1sWR1eylQWXSmVuzs6*QaiEgeyVlXffzLE0!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '青绿12GB+256GB':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SaYnchid1MoLZ1tYRJRfXZ5KiPExIWbxngj.2AyrhdlvHyKDTdT2MfQDbWdOn7PcfIXvJFeHatMMSCVqYczRKp8!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '亮黑12GB+256GB': '￥1899',
            '幻境12GB+256GB': '￥1799',
            '银灰12GB+256GB': '￥1899',
            '青绿12GB+256GB': '￥1799'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表








    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_2_17_4 = document.querySelectorAll('.waterfallFlowJs_2_17_4');
    waterfallFlowJs_2_17_4.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});

// 资料点击
const waterfallFlowJs_2_17_5 = document.querySelector('.waterfallFlowJs_2_17_5');
waterfallFlowJs_2_17_5.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/AppleIphone11.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sb*VqidTA7V.s9B1KV1AdvxR5IF66l16Ll1eNZDYNAdD5foLYgWCGMCfCJfUuzOoNlbH2cFOjt3bkbdoIQmQS0E!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥4999',
        标题: 'Apple iPhone11',
        规格: ['黑色128G','黑色64G','白色128G','白色64G'],
        规格对应图片: {
            '黑色128G': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sb*VqidTA7V.s9B1KV1AdvxR5IF66l16Ll1eNZDYNAdD5foLYgWCGMCfCJfUuzOoNlbH2cFOjt3bkbdoIQmQS0E!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '黑色64G':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sb*VqidTA7V.s9B1KV1AdvxR5IF66l16Ll1eNZDYNAdD5foLYgWCGMCfCJfUuzOoNlbH2cFOjt3bkbdoIQmQS0E!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '白色128G':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SZcOJnI4l1NVShYfAhtyoQVynb61TJQfZw8FROkiaAYcYolzPyug8Du*.FlYKPjB*u16lWAxvVjQWnF5*5eJeHg!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '白色64G':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SZcOJnI4l1NVShYfAhtyoQVynb61TJQfZw8FROkiaAYcYolzPyug8Du*.FlYKPjB*u16lWAxvVjQWnF5*5eJeHg!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '黑色128G': '￥4999',
            '黑色64G': '￥3999',
            '白色128G': '￥4999',
            '白色64G': '￥3999'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表







    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sb*VqidTA7V.s9B1KV1AdvxR5IF66l16Ll1eNZDYNAdD5foLYgWCGMCfCJfUuzOoNlbH2cFOjt3bkbdoIQmQS0E!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥4999',
        标题: 'Apple iPhone11',
        规格: ['黑色128G','黑色64G','白色128G','白色64G'],
        规格对应图片: {
            '黑色128G': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sb*VqidTA7V.s9B1KV1AdvxR5IF66l16Ll1eNZDYNAdD5foLYgWCGMCfCJfUuzOoNlbH2cFOjt3bkbdoIQmQS0E!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '黑色64G':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sb*VqidTA7V.s9B1KV1AdvxR5IF66l16Ll1eNZDYNAdD5foLYgWCGMCfCJfUuzOoNlbH2cFOjt3bkbdoIQmQS0E!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '白色128G':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SZcOJnI4l1NVShYfAhtyoQVynb61TJQfZw8FROkiaAYcYolzPyug8Du*.FlYKPjB*u16lWAxvVjQWnF5*5eJeHg!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '白色64G':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SZcOJnI4l1NVShYfAhtyoQVynb61TJQfZw8FROkiaAYcYolzPyug8Du*.FlYKPjB*u16lWAxvVjQWnF5*5eJeHg!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '黑色128G': '￥4999',
            '黑色64G': '￥3999',
            '白色128G': '￥4999',
            '白色64G': '￥3999'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表








    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_2_17_5 = document.querySelectorAll('.waterfallFlowJs_2_17_5');
    waterfallFlowJs_2_17_5.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});

// 资料点击
const waterfallFlowJs_2_17_6 = document.querySelector('.waterfallFlowJs_2_17_6');
waterfallFlowJs_2_17_6.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/JiXieShiT58.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se.gFF.UsChEDm0XewXAQ6f8vV2LqJjEte.aI3VKt4E5nrjH1tUlFsDLdiMSEg1YqlNMOI*bWEfpKuz8pIvMZvE!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥5588',
        标题: '机械师',
        规格: ['T58-V'],
        规格对应图片: {
            'T58-V': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se.gFF.UsChEDm0XewXAQ6f8vV2LqJjEte.aI3VKt4E5nrjH1tUlFsDLdiMSEg1YqlNMOI*bWEfpKuz8pIvMZvE!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5'
        },
        规格对应金额: {
            'T58-V': '￥5588'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表







    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se.gFF.UsChEDm0XewXAQ6f8vV2LqJjEte.aI3VKt4E5nrjH1tUlFsDLdiMSEg1YqlNMOI*bWEfpKuz8pIvMZvE!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥5588',
        标题: '机械师',
        规格: ['T58-V'],
        规格对应图片: {
            'T58-V': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se.gFF.UsChEDm0XewXAQ6f8vV2LqJjEte.aI3VKt4E5nrjH1tUlFsDLdiMSEg1YqlNMOI*bWEfpKuz8pIvMZvE!/mnull&bo=vgCqAL4AqgADByI!&rf=photolist&t=5'
        },
        规格对应金额: {
            'T58-V': '￥5588'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表








    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_2_17_6 = document.querySelectorAll('.waterfallFlowJs_2_17_6');
    waterfallFlowJs_2_17_6.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});

// 资料点击
const waterfallFlowJs_2_17_7 = document.querySelector('.waterfallFlowJs_2_17_7');
waterfallFlowJs_2_17_7.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/RemaxYouXianErJi.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se*QrgCJ6SnAME3GaWdaSkRi0zGEkO.5cxhe3AqzsImZnZ0PYnLnKIaErST5I3JDRonphlr73iJZiZhYAOsu8Qo!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥29',
        标题: 'Remax有线耳机',
        规格: ['暗夜绿苹果口','黑色苹果口','黑色C口','银色C口'],
        规格对应图片: {
            '暗夜绿苹果口': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se*QrgCJ6SnAME3GaWdaSkRi0zGEkO.5cxhe3AqzsImZnZ0PYnLnKIaErST5I3JDRonphlr73iJZiZhYAOsu8Qo!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '黑色苹果口':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sd9NIOBxhwK4o1zYwR0Sb9Nfg7BinVviMtxp2Tz1H0.Txi9T7935izNMHh7ZPPAi4E4rwclgITMS4GXPwwuYqWQ!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '黑色C口':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SfvLYDj0IT2B3AzW98HjYDcqFDMoEBQMm8*YwvDnXRwkIp4DT0Q0DmX7OeZPgyyngq0oadEm0srVnCzT2b0zF.8!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '银色C口':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SZNOayZiSiUxJ4fx4q3MQxJID1jrvJhURBidhWPrGslsjRUjQbIuZbWXUhzUipHZcyO2nmr5OOC3e92sWAza5RI!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '暗夜绿苹果口': '￥29',
            '黑色苹果口': '￥29',
            '黑色C口': '￥22.30',
            '银色C口': '￥22.30'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表







    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se*QrgCJ6SnAME3GaWdaSkRi0zGEkO.5cxhe3AqzsImZnZ0PYnLnKIaErST5I3JDRonphlr73iJZiZhYAOsu8Qo!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥29',
        标题: 'Remax有线耳机',
        规格: ['暗夜绿苹果口','黑色苹果口','黑色C口','银色C口'],
        规格对应图片: {
            '暗夜绿苹果口': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Se*QrgCJ6SnAME3GaWdaSkRi0zGEkO.5cxhe3AqzsImZnZ0PYnLnKIaErST5I3JDRonphlr73iJZiZhYAOsu8Qo!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '黑色苹果口':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*Sd9NIOBxhwK4o1zYwR0Sb9Nfg7BinVviMtxp2Tz1H0.Txi9T7935izNMHh7ZPPAi4E4rwclgITMS4GXPwwuYqWQ!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '黑色C口':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SfvLYDj0IT2B3AzW98HjYDcqFDMoEBQMm8*YwvDnXRwkIp4DT0Q0DmX7OeZPgyyngq0oadEm0srVnCzT2b0zF.8!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '银色C口':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SZNOayZiSiUxJ4fx4q3MQxJID1jrvJhURBidhWPrGslsjRUjQbIuZbWXUhzUipHZcyO2nmr5OOC3e92sWAza5RI!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '暗夜绿苹果口': '￥29',
            '黑色苹果口': '￥29',
            '黑色C口': '￥22.30',
            '银色C口': '￥22.30'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表








    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_2_17_7 = document.querySelectorAll('.waterfallFlowJs_2_17_7');
    waterfallFlowJs_2_17_7.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});

// 资料点击
const waterfallFlowJs_2_17_8 = document.querySelector('.waterfallFlowJs_2_17_8');
waterfallFlowJs_2_17_8.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/AppleIpad9.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWG1jfx571c9qJxzyoBgcDVGPHSt.uNUwXcf4WlqIiBgdwBJJ4CDR1UrXmNlmT5Kknvea4PDcR2uRrex6MmSX2Q!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥2399',
        标题: 'Apple ipad9',
        规格: ['黑色256GBWIFI版','黑色64GBWIFI版','银色256GBWIFI版','银色64GBWIFI版'],
        规格对应图片: {
            '黑色256GBWIFI版': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWG1jfx571c9qJxzyoBgcDVGPHSt.uNUwXcf4WlqIiBgdwBJJ4CDR1UrXmNlmT5Kknvea4PDcR2uRrex6MmSX2Q!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '黑色64GBWIFI版':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWG1jfx571c9qJxzyoBgcDVGPHSt.uNUwXcf4WlqIiBgdwBJJ4CDR1UrXmNlmT5Kknvea4PDcR2uRrex6MmSX2Q!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '银色256GBWIFI版':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SSvnWzKmGFWxsEtbOYPKv9KRyC9rK*c8.24TdWoQ8sG.k2cFA.kkgF9NxEuGIJ*tDZVNN3nk6Vu1Cp4.Ye*k3SE!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '银色64GBWIFI版':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SSvnWzKmGFWxsEtbOYPKv9KRyC9rK*c8.24TdWoQ8sG.k2cFA.kkgF9NxEuGIJ*tDZVNN3nk6Vu1Cp4.Ye*k3SE!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '黑色256GBWIFI版': '￥2399',
            '黑色64GBWIFI版': '￥1899',
            '银色256GBWIFI版': '￥2399',
            '银色64GBWIFI版': '￥1899'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表







    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWG1jfx571c9qJxzyoBgcDVGPHSt.uNUwXcf4WlqIiBgdwBJJ4CDR1UrXmNlmT5Kknvea4PDcR2uRrex6MmSX2Q!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥2399',
        标题: 'Apple ipad9',
        规格: ['黑色256GBWIFI版','黑色64GBWIFI版','银色256GBWIFI版','银色64GBWIFI版'],
        规格对应图片: {
            '黑色256GBWIFI版': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWG1jfx571c9qJxzyoBgcDVGPHSt.uNUwXcf4WlqIiBgdwBJJ4CDR1UrXmNlmT5Kknvea4PDcR2uRrex6MmSX2Q!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '黑色64GBWIFI版':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SWG1jfx571c9qJxzyoBgcDVGPHSt.uNUwXcf4WlqIiBgdwBJJ4CDR1UrXmNlmT5Kknvea4PDcR2uRrex6MmSX2Q!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '银色256GBWIFI版':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SSvnWzKmGFWxsEtbOYPKv9KRyC9rK*c8.24TdWoQ8sG.k2cFA.kkgF9NxEuGIJ*tDZVNN3nk6Vu1Cp4.Ye*k3SE!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5',
            '银色64GBWIFI版':'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SSvnWzKmGFWxsEtbOYPKv9KRyC9rK*c8.24TdWoQ8sG.k2cFA.kkgF9NxEuGIJ*tDZVNN3nk6Vu1Cp4.Ye*k3SE!/mnull&bo=IAMgAyADIAMBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '黑色256GBWIFI版': '￥2399',
            '黑色64GBWIFI版': '￥1899',
            '银色256GBWIFI版': '￥2399',
            '银色64GBWIFI版': '￥1899'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表








    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_2_17_8 = document.querySelectorAll('.waterfallFlowJs_2_17_8');
    waterfallFlowJs_2_17_8.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});

// 资料点击
const waterfallFlowJs_2_17_9 = document.querySelector('.waterfallFlowJs_2_17_9');
waterfallFlowJs_2_17_9.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    openProduct_html.src = './productName/YaoYuanDeJiuShiZhu.html';

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表
    // 定义要传递的数据数组
    const data = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SRP9HWqArnHisbfORsHJLGv20GStEB*Yc3pEOa8aPck3MwFtjT9HgiTnBMBWrBT.0jvRTg.jvNSan6S7kOJ8mWQ!/mnull&bo=7gLlAu4C5QIBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥18',
        标题: '遥远的救世主',
        规格: ['全新正版'],
        规格对应图片: {
            '全新正版': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SRP9HWqArnHisbfORsHJLGv20GStEB*Yc3pEOa8aPck3MwFtjT9HgiTnBMBWrBT.0jvRTg.jvNSan6S7kOJ8mWQ!/mnull&bo=7gLlAu4C5QIBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '全新正版': '￥18'
        }
    };

    // 获取对应的元素
    const imgElement = document.querySelector('.openProductShoppingCart_productDetails img');
    const priceElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(1)');
    const titleElement = document.querySelector('.openProductShoppingCart_productDetails span div:nth-child(2)');
    const specListElement = document.querySelector('.openProductShoppingCart ul');

    // 将数据填充到对应的元素中
    imgElement.src = data['图片'];
    priceElement.textContent = data['金额'];
    titleElement.textContent = data['标题'];

    // 清空原有的产品规格列表
    specListElement.innerHTML = '';

    let firstListItem;

    // 循环添加新的产品规格
    data['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement.appendChild(listItem);

        if (!firstListItem) {
            firstListItem = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement.src = data['规格对应图片'][spec] || data['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement.textContent = data['规格对应金额'][spec] || data['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem) {
        firstListItem.click();
    }

    //这里是添加加入购物车列表
    //这里是添加加入购物车列表







    //这里是添加购买列表
    //这里是添加购买列表
    // 定义要传递的数据数组
    const data2 = {
        图片: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SRP9HWqArnHisbfORsHJLGv20GStEB*Yc3pEOa8aPck3MwFtjT9HgiTnBMBWrBT.0jvRTg.jvNSan6S7kOJ8mWQ!/mnull&bo=7gLlAu4C5QIBByA!&rf=photolist&t=5', // 替换为实际的图片链接
        金额: '￥18',
        标题: '遥远的救世主',
        规格: ['全新正版'],
        规格对应图片: {
            '全新正版': 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0XZ3bW/LiySpxowE0yeWXwBdXN*SRP9HWqArnHisbfORsHJLGv20GStEB*Yc3pEOa8aPck3MwFtjT9HgiTnBMBWrBT.0jvRTg.jvNSan6S7kOJ8mWQ!/mnull&bo=7gLlAu4C5QIBByA!&rf=photolist&t=5'
        },
        规格对应金额: {
            '全新正版': '￥18'
        }
    };

    // 获取对应的元素
    const imgElement2 = document.querySelector('.purchaseDate_productDetails img');
    const priceElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(1)');
    const titleElement2 = document.querySelector('.purchaseDate_productDetails span div:nth-child(2)');
    const specListElement2 = document.querySelector('.purchaseDate ul');

    // 将数据填充到对应的元素中
    imgElement2.src = data2['图片'];
    priceElement2.textContent = data2['金额'];
    titleElement2.textContent = data2['标题'];

    // 清空原有的产品规格列表
    specListElement2.innerHTML = '';

    let firstListItem2;

    // 循环添加新的产品规格
    data2['规格'].forEach(spec => {
        const listItem = document.createElement('li');
        listItem.textContent = spec;
        specListElement2.appendChild(listItem);

        if (!firstListItem2) {
            firstListItem2 = listItem;
        }

        // 为每个规格项添加点击事件
        listItem.addEventListener('click', function () {
            // 移除所有规格项的选中样式
            const allListItems = specListElement2.querySelectorAll('li');
            allListItems.forEach(item => {
                item.style.borderColor = '';
            });

            // 更新图片链接
            imgElement2.src = data2['规格对应图片'][spec] || data2['图片'];

            // 移除标题中可能存在的旧规格文本
            const baseTitle = data2['标题'].replace(/\s*(金色|黑色)12GB\+(256|512)GB\s*$/, '').trim();

            // 更新标题
            titleElement2.textContent = `${baseTitle} ${spec}`;

            // 更新金额
            priceElement2.textContent = data2['规格对应金额'][spec] || data2['金额'];

            // 添加当前选中规格项的边框样式
            listItem.style.borderColor = '#E2231A';
        });
    });

    // 模拟点击第一个规格项
    if (firstListItem2) {
        firstListItem2.click();
    }
    //这里是添加购买列表
    //这里是添加购买列表








    //这里是历史记录添加列表
    //这里是历史记录添加列表
    // 获取历史记录列表
    const historyRecordList = document.querySelector('.historyRecord_popup_ul');

    // 假设你已经有点击事件的设置
    const waterfallFlowJs_2_17_9 = document.querySelectorAll('.waterfallFlowJs_2_17_9');
    waterfallFlowJs_2_17_9.forEach(item => {
        // item.addEventListener('click', () => {
        // 获取点击项中的图片 src
        const imgSrc = item.querySelector('.waterfallFlow_img').src;
        // 获取点击项中的标题文本
        const title = item.querySelector('.waterfallFlow_title').textContent;
        // 获取点击项中的价格文本
        const price = item.querySelector('.price').textContent;
        // 获取点击项中的标题文本
        const historyactionDate_title = item.querySelector('.historyactionDate_title').textContent;


        // 检查历史记录列表中是否已存在相同内容的记录
        const existingItems = historyRecordList.querySelectorAll('.historyRecord_popup_li');
        let isDuplicate = false;
        existingItems.forEach(existingItem => {
            const existingImg = existingItem.querySelector('.historyRecord_popup_li_img');
            const existingTitleDiv = existingItem.querySelector('.historyRecord_popup_li_info_name');
            const existingPriceDiv = existingItem.querySelector('.historyRecord_popup_li_info_price');

            if (existingImg.src === imgSrc && existingTitleDiv.textContent === title && existingPriceDiv.textContent === price) {
                isDuplicate = true;
            }
        });

        // 如果不是重复记录，则创建并添加新的历史记录项
        if (!isDuplicate) {
            // 创建历史记录列表项
            const historyLi = document.createElement('li');
            historyLi.classList.add('historyRecord_popup_li');

            // 创建图片元素
            const historyImg = document.createElement('img');
            historyImg.classList.add('historyRecord_popup_li_img');
            historyImg.src = imgSrc;

            // 创建信息包裹 div
            const infoDiv = document.createElement('div');
            infoDiv.classList.add('historyRecord_popup_li_info');

            // 创建标题 div
            const titleDiv = document.createElement('div');
            titleDiv.classList.add('historyRecord_popup_li_info_name');
            titleDiv.textContent = title;

            // 创建价格 div
            const priceDiv = document.createElement('div');
            priceDiv.classList.add('historyRecord_popup_li_info_price');
            priceDiv.textContent = price;

            // 创建历史记录标题 div
            const historyactionDate_titleDiv = document.createElement('div');
            historyactionDate_titleDiv.classList.add('historyRecord_popup_li_info_none');
            historyactionDate_titleDiv.textContent = historyactionDate_title;

            // 创建删除按钮
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('historyRecord_popup_li_info_btn');
            deleteBtn.textContent = '×';

            // 将标题和价格添加到信息包裹 div 中
            infoDiv.appendChild(titleDiv);
            infoDiv.appendChild(priceDiv);

            // 将图片、信息包裹 div 和删除按钮添加到历史记录列表项中
            historyLi.appendChild(historyImg);
            historyLi.appendChild(infoDiv);
            historyLi.appendChild(deleteBtn);
            historyLi.appendChild(historyactionDate_titleDiv);


            // 将历史记录列表项添加到历史记录列表中
            historyRecordList.appendChild(historyLi);

            // 获取历史返回参数元素
            const historyRecord_popup_title = document.querySelector('.historyRecord_return_value');
            // 获取所有类名为 historyRecord_popup_li 的元素
            const historyRecordLis = document.querySelectorAll('.historyRecord_popup_li');


            // 遍历每个 historyRecord_popup_li 元素
            historyRecordLis.forEach(function (li) {
                // 为每个 li 元素添加点击事件监听器
                li.addEventListener('click', function () {
                    // 获取当前 li 中类名为 historyRecord_popup_li_info_none 的元素
                    const infoNameElement = li.querySelector('.historyRecord_popup_li_info_none');
                    if (infoNameElement) {
                        // 获取该元素的文本内容
                        const textToSearch = infoNameElement.textContent;
                        // 修改历史记录弹窗的标题
                        historyRecord_popup_title.textContent = `已为您复制标题"${textToSearch}"去搜索看看吧！`;

                        // 复制文本到剪贴板
                        navigator.clipboard.writeText(textToSearch)
                            .then(() => {
                                // console.log('文本复制成功');
                            })
                            .catch((err) => {
                                // console.error('复制文本时出错: ', err);
                            });

                        // 2 秒后恢复标题
                        setTimeout(function () {
                            historyRecord_popup_title.textContent = '';
                        }, 2000);
                    }
                });
            });

        }
        // });
    });

    //这里是历史记录添加列表
    //这里是历史记录添加列表

});
// 商品资料 框架

