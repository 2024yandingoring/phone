// 商品资料 框架

const waterfallFlowJs_1_25_1 = document.querySelector('.waterfallFlowJs_1_25_1');
const openProduct = document.querySelector('.openProduct');
const openProduct_box_btn = document.querySelector('.openProduct_box_btn');
const openProductShoppingCart = document.querySelector('.openProductShoppingCart');
const openProductShoppingCart_btn = document.querySelector('.openProductShoppingCart_btn');
const waterfallFlowJs_1_25_2 = document.querySelector('.waterfallFlowJs_1_25_2');
const openProductNov_sev = document.querySelector('.openProductNov_sev');





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
        if (fileContent.trim()!== '') {
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
});






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






// 1/25/1一个商品资料点击
waterfallFlowJs_1_25_1.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    // 定义要传递的数据数组
    const data = {
        图片: 'https://example.com/product.jpg', // 替换为实际的图片链接
        金额: '￥5000',
        标题: '苹果手机 银色12GB+256GB',
        规格: ['金色12GB+256GB', '金色12GB+512GB', '黑色12GB+256GB', '黑色12GB+512GB'],
        规格对应图片: {
            '金色12GB+256GB': 'https://example.com/gold_256.jpg',
            '金色12GB+512GB': 'https://example.com/gold_512.jpg',
            '黑色12GB+256GB': 'https://example.com/black_256.jpg',
            '黑色12GB+512GB': 'https://example.com/black_512.jpg'
        },
        规格对应金额: {
            '金色12GB+256GB': '￥5500',
            '金色12GB+512GB': '￥6000',
            '黑色12GB+256GB': '￥5500',
            '黑色12GB+512GB': '￥6000'
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
});

// 1/25/2一个商品资料点击
waterfallFlowJs_1_25_2.addEventListener('click', () => {
    openProduct.style.visibility = 'visible';
    openProduct.style.opacity = '1';
    // 定义要传递的数据数组
    const data = {
        图片: 'https://example.com/product.jpg', // 替换为实际的图片链接
        金额: '￥5000',
        标题: '测试第二组',
        规格: ['第一规格', '第二规格'],
        规格对应图片: {
            '第一规格': 'https://example.com/gold_256.jpg',
            '第二规格': 'https://example.com/gold_512.jpg'
        },
        规格对应金额: {
            '第一规格': '￥10',
            '第二规格': '￥60'
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
});
// 商品资料 框架
