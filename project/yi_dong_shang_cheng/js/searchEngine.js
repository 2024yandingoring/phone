// 获取搜索框、搜索按钮和所有商品项
const searchInput = document.querySelector('.two_box_sousuo');
const searchButton = document.querySelector('.sousuo_btn');
const productItems = document.querySelectorAll('.waterfallFlow_box_min');
// 获取“无关内容”对应的 li 元素
const unrelatedItems = document.querySelectorAll('.nameTimestamp');

// 为搜索按钮添加点击事件监听器
searchButton.addEventListener('click', function () {
    const searchText = searchInput.value.trim().toLowerCase();

    // 先隐藏所有商品项
    productItems.forEach(item => {
        item.style.display = 'none';
    });
    // 先隐藏“无关内容”的 li
    unrelatedItems.forEach(item => {
        item.style.display = 'none';
    });

    let hasMatch = false;
    // 若搜索框不为空，进行搜索匹配
    if (searchText!== '') {
        productItems.forEach(item => {
            const searchTitle = item.querySelector('.searchBox_title').textContent.toLowerCase();
            // 只检查当前搜索关键字的匹配情况
            if (searchTitle.includes(searchText)) {
                item.style.display = 'block';
                hasMatch = true;
            }
        });
        // 如果没有匹配结果，显示“无关内容”的 li 和包含“搜索”关键字的项
        if (!hasMatch) {
            unrelatedItems.forEach(item => {
                item.style.display = 'block';
            });
            productItems.forEach(item => {
                const searchTitle = item.querySelector('.searchBox_title').textContent.toLowerCase();
                if (searchTitle.includes('搜索')) {
                    item.style.display = 'block';
                }
            });
        } else {
            // 如果有匹配结果，显示包含“搜索”关键字的项
            productItems.forEach(item => {
                const searchTitle = item.querySelector('.searchBox_title').textContent.toLowerCase();
                if (searchTitle.includes('搜索')) {
                    item.style.display = 'block';
                }
            });
        }
    } else {
        // 若搜索框为空，显示所有商品项并隐藏“无关内容”的 li
        productItems.forEach(item => {
            item.style.display = 'block';
        });
        unrelatedItems.forEach(item => {
            item.style.display = 'none';
        });
    }
});

// 为搜索框添加输入事件监听器，当输入为空时显示所有商品项并隐藏“无关内容”的 li
searchInput.addEventListener('input', function () {
    const searchText = this.value.trim();
    if (searchText === '') {
        productItems.forEach(item => {
            item.style.display = 'block';
        });
        unrelatedItems.forEach(item => {
            item.style.display = 'none';
        });
    }
});
