// 获取搜索框、搜索按钮和所有商品项
const searchInput = document.querySelector('.two_box_sousuo');
const searchButton = document.querySelector('.sousuo_btn');
const productItems = document.querySelectorAll('.waterfallFlow_box_min');

// 为搜索按钮添加点击事件监听器
searchButton.addEventListener('click', function () {
    const searchText = searchInput.value.trim().toLowerCase();

    // 先隐藏所有商品项
    productItems.forEach(item => {
        item.style.display = 'none';
    });

    // 若搜索框不为空，进行搜索匹配
    if (searchText!== '') {
        productItems.forEach(item => {
            const searchTitle = item.querySelector('.searchBox_title').textContent.toLowerCase();
            // 检查是否包含当前搜索关键字或关键字为“搜索”
            if (searchTitle.includes(searchText) || searchTitle.includes('搜索')) {
                item.style.display = 'block';
            }
        });
    } else {
        // 若搜索框为空，显示所有商品项
        productItems.forEach(item => {
            item.style.display = 'block';
        });
    }
});

// 为搜索框添加输入事件监听器，当输入为空时显示所有商品项
searchInput.addEventListener('input', function () {
    const searchText = this.value.trim();
    if (searchText === '') {
        productItems.forEach(item => {
            item.style.display = 'block';
        });
    }
});
