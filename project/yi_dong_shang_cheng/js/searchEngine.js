//搜索引擎

// 获取搜索框、搜索按钮和所有商品项
const searchInput = document.querySelector('.two_box_sousuo');
const searchButton = document.querySelector('.sousuo_btn');
const productItems = document.querySelectorAll('.waterfallFlow_box_min');

// 为搜索按钮添加点击事件监听器
searchButton.addEventListener('click', function () {
    const searchText = searchInput.value.trim().toLowerCase();

    // 如果搜索框为空，显示所有商品项
    if (searchText === '') {
        productItems.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        // 先隐藏所有商品项
        productItems.forEach(item => {
            item.style.display = 'none';
        });

        // 遍历每个商品项，查找匹配的关键字
        productItems.forEach(item => {
            const searchTitle = item.querySelector('.searchBox_title').textContent.toLowerCase();
            if (searchTitle.includes(searchText)) {
                item.style.display = 'block';
            }
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