//这里是遍历所有类名为 display_noneing 数据渲染隐藏
var display_noneing = document.getElementsByClassName("display_noneing");

for (var i = 0; i < display_noneing.length; i++) { // 遍历所有获取到的元素
    display_noneing[i].style.display = 'none'; // 设置每个元素的 display 样式为 none
}
