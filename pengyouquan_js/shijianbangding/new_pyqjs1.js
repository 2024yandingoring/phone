const oneBoxUl = document.querySelector('.one_box_ul');
const fourBox = document.querySelector('.four_box');
const fourBoxSuimg = document.querySelector('.four_box_suimg');
const bottomNavigation = document.querySelector('.bottomNavigation');
// 数据存储
let dataList = [];
let loadedCount = 0; // 记录已加载的数据数量
const initialCount = 10;
const loadMoreStep = 10;
// 添加一条数据
function addItem(item) {
    dataList.push(item);
    if (dataList.length <= initialCount) {
        renderList();
    }
}
// 渲染列表
function renderList() {
    const ul = document.querySelector('.one_box_ul');
    ul.innerHTML = ''; // 清空当前列表
    // 按日期排序（最新的在前）
    const sortedData = dataList.sort((a, b) => {
        const formatDate = (dateStr) => dateStr.replace(/年/g, '-').replace(/月/g, '-').replace(/日/g, '');
        return new Date(formatDate(b.date)) - new Date(formatDate(a.date));
    });
    // 计算要显示的数据范围
    const endIndex = Math.min(loadedCount + initialCount, sortedData.length);
    const dataToRender = sortedData.slice(0, endIndex);
    // 渲染每条数据
    dataToRender.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'three_box';
        // 头像
        const img = document.createElement('img');
        img.className = 'three_box_head';
        img.src = item.headImg || 'http://photogz.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1S9Wqv/bqQfVz5yrrGYSXMvKr.cqexPbNQCAHSMAoyyfvUZhk0l.8hp4aBdlmHD7uzVaLDZ*LCH3dfzT4rD*zWsE1krMvVBCar8aaBDtX*hCzriY4c!/mnull&bo=bQBqAG0AagADByI!&rf=photolist&t=5';
        // 内容容器
        const box = document.createElement('div');
        box.className = 'three_box_box';
        // ID
        const idDiv = document.createElement('div');
        idDiv.className = 'three_box_box_id';
        idDiv.textContent = item.id || '言定';
        // 红字
        const redSpan = document.createElement('span');
        redSpan.className = 'text_red';
        if (item.redText) {
            redSpan.innerHTML = item.redText;
        } else {
            redSpan.style.display = 'none';
        }
        // 内容
        const contentDiv = document.createElement('div');
        contentDiv.className = 'three_box_box_text';
        contentDiv.textContent = item.content || '';
        // 按钮
        const expandBtn = document.createElement('button');
        expandBtn.className = 'expand';
        expandBtn.textContent = item.expandText || '点我展开';
        const shouQiBtn = document.createElement('button');
        shouQiBtn.className = 'shouQi';
        shouQiBtn.textContent = '点我收起';
        shouQiBtn.style.display = 'none';
        if (!item.showExpand) {
            expandBtn.style.display = 'none';
            shouQiBtn.style.display = 'none';
        }
        // 图片列表
        const imgUl = document.createElement('ul');
        imgUl.className = 'three_box_box_box_box';
        const fourGrid = document.createElement('div');
        fourGrid.className = item.fourGridClass || 'fourGrid';
        (item.imgs || []).forEach(imgData => {
            const li = document.createElement('li');
            li.className = `${imgData.class}`;
            const img = document.createElement('img');
            img.src = imgData.src;
            li.appendChild(img);
            fourGrid.appendChild(li);

            // 为特定类名的图片添加点击事件
            // 图片绑定事件
            function rebindEvents() {

            }
        });
        imgUl.appendChild(fourGrid);
        // 时间
        const timeDiv = document.createElement('div');
        timeDiv.className = 'three_box_box_time';
        timeDiv.textContent = item.date || '';
        // 样式
        const divCSS = document.createElement('div');
        divCSS.className = 'three_box_css';
        // 组装
        box.append(idDiv, redSpan, contentDiv, expandBtn, shouQiBtn, imgUl, timeDiv);
        li.append(img, box, divCSS, document.createElement('div'));
        // 按钮事件
        expandBtn.addEventListener('click', () => {
            contentDiv.classList.add('expanded');
            expandBtn.style.display = 'none';
            shouQiBtn.style.display = 'inline-block';
        });
        shouQiBtn.addEventListener('click', () => {
            contentDiv.classList.remove('expanded');
            expandBtn.style.display = 'inline-block';
            shouQiBtn.style.display = 'none';
        });
        ul.appendChild(li);

    });
    // 直接添加加载更多按钮（无需判断）
    const loadMoreLi = document.createElement('li');
    loadMoreLi.className = 'loadMore';
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = 'loadMoreBtn';
    loadMoreBtn.textContent = '加载更多内容';
    loadMoreLi.appendChild(loadMoreBtn);
    ul.appendChild(loadMoreLi);
    // 更新已加载数量
    loadedCount = endIndex;
}
// 加载更多按钮事件
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('loadMoreBtn')) {
        loadedCount += loadMoreStep;
        renderList();
    }
});



// 示例：手动添加数据
// 2025年4月22日
addItem({
    id: '言定',
    //相册N10
    date: '2025年4月22日',
    content: '时间过的真快，没想到我姐也要嫁人了，在我亲戚的帮助下，我也去了我姐夫家，不然我一个人真的不敢过去，可能是太陌生了，不知道我姐是啥心情，毕竟后半辈子就要在我姐夫家过一辈子了，离开了熟系的家，最为熟系的安全区突然要换地方了，我想大部分的女孩子心里落差应该都是非常大的，不舍？异常难受？想说的话准备出来又咽回去，想流出来的泪又怕···不敢流，吃完席，看完热闹的婚礼，不知不觉太阳已经下山了，我也准备回家了，临别的时候我去给我姐打了声招呼“姐，我先回去了喔”“嗯，好”，也给我姐夫和我姐夫的家人“走了喔，有空过来玩”，我觉得我应该做的流程我尽力的去做了，我刚上回家的车，我姐就跑了出来，挥了挥手，我已经不敢看她的表情了，因为我的眼泪已经咽回去了，但我还是大声喊“拜拜”同样挥了挥手。以后估计也不会有人在我打游戏的时候强行拉我去干活了，也不会看见我在家就让我去跑腿，去端水，去扫地，害，我应该喜欢安静的环境的呀，这下子不会总有人在我耳旁“弟、弟、弟”的吵着了，为啥我会有一股落寞感呢，也许习惯了耳旁有人的吵闹反而是日常，这热闹的婚礼到了要收拾的时间段怪“可怕的”，好安静，我独自打扫着楼上扎堆人群留下来的垃圾，好安静，好安静，看着热闹人群中出嫁的老姐，心里怪不舍的，但也替她觉得幸福，很多亲朋好友都见证了她的爱情结果，都替她感到高兴。回想起：小时候，我姐带我去田里玩水，那时候正是台风过后，田里是可以游泳的，我那时候个子还很矮，身高估计也只能抱紧我姐的大腿，就在我姐玩腻了上去了之后，我突然脚滑了，差点溺水躺板板，还好可能天生自带会游泳的天赋？我随后也上去了，看到我姐那发白的表情，不断的喊着“弟，快上来啊”可能从小就学会锻炼识别情绪的能力，看出来她的不安，我半开玩笑的说“水下有好多鱼啊”，但依旧没能安抚到她那发白的表情，回家的路上我们拉拉勾勾“这件事只能我们知道，不许跟爸妈说”，经历过这件事后，我姐再也不会带我出去玩了。',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    // redText: '#很久很久的我们(2016-至今)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、 fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、 three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_2025_4_22_1', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SX2.*jW..d0niV*j2DcEQdco*IklhPq*tyBYoC.kZ5elWL7xevdkX0KOuUJhq.lUTcsd3iLkqpMzviRbi1pUTOw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2025_4_22_2', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY0**2bzeyfXleVy2SEiglkAyo0u07ri9PQuKZJj82KzefYyN6BA2koLxnMCSQkRUxh8oW4f6fmEZSPyV7IF7wc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2025_4_22_3', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQXeorS0EoY9vQg2s*6fFEe.JPJeK57tntYBxQTMAbUQgHbv9zYWIHGjGP5FOPeOZENP0TiYpf*ASHdzqkza1yw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2025_4_22_4', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Seas8eNoOgj5Zo0Q.2sgsVGACK4qYshgdE15ZqgUVS28wtHMjU7QMWMiY71VFHGtv0ZI9G6bFksNyRS5pl3b*ls!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2025_4_22_5', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYbte3B0qPxOVPnc7yrw9OCa*VuE2ZbhSxSoZ.q9MfmJrd.y8heolwDT4M39fxlA.TYknBuNBolHRosTsIcrGXE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2025_4_22_6', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVud8W9jArQGFMwq4wfI66.bkj60VZGi17LbWvbAby8hMyJ429gFNeLS.3L9zdVq4qy7j3D5TexnM8dYrRue0.Y!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2025_4_22_7', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXRYckG7Xw.kReMb6etBPW*GUx5mFdE6Qmhh4SHfo9LqzqAYCxS2E*918TaZK0Z8DJQ2rXOGkpTINwqGy*6Oj.s!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2025_4_22_8', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7nbNocFYoFaVL0eQgVS7AR0mhdsAnppfWYVLz*6u4oWsFhO1MM0MllgbGJhiUB9h.yhi8kcxnlbZ1PlJ9eFY0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2025_4_22_9', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSQ3QHBFN9IXIA*b3sfmu6VqxxWNB8i.5D0Jk2kM8cFdedLlg0qNNnLwmhzYztEEkbGBxaNKZ*CpoQcR5i8SqMc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    expandText: '展开内容',
    showExpand: true
    // showExpand: false
});

// 2025年2月16日
addItem({
    id: '言定',
    //相册N10
    date: '2025年2月16日',
    content: '咦，哪来两只迷路的狮子，我还以为有杂技表演，搞半天就只是收个红包走个过场，无聊。',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    // redText: '#很久很久的我们(2016-至今)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、 fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'fourGrid',
    // imgs 自定义 singleCellImg (单格图片)、 three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'three_box_box_img img_2025_2_16_1', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUllxWnVc8DHvK3etBDH8bT6r.qH4woFPpbSU9WFGdQIZaTJ9IAYGphMx7YITNEhX1jNRLDCcaVjqLRQxBiQtMk!/mnull&bo=VQhABlUIQAYBByA!&rf=photolist&t=5' },
        { class: 'three_box_box_img img_2025_2_16_2', src: 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRGGoAwlSj0Pi*qZmRw5H7XmVfEJqtyci3XRhkLjPlnlpiLBmVKj1F1t3ZHtRd7xWkVLk7WvME0XUAv8oEKmQwQ!/mnull&bo=GwtABhsLQAYBByA!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    // expandText: '展开内容',
    // showExpand: true
    showExpand: false
});

// 2024年10月20日
addItem({
    id: '言定',
    //相册N10
    date: '2024年10月20日',
    content: '公司团建，没有期待却收获颇多，故事发生在“江西省：大丫山旅游酒店”，准备出发的路上有人欢歌载舞，有人满脸忧愁，我以意外的方式上车却把大家逗笑了，让我不知所措，只好赶紧找个座位坐稳。这一路上总有人想起节奏试图将这支团队逗笑欢歌起来，很可能让它失望了。路程还挺远的，连司机都开始练习“边打瞌睡边开车”，好在有惊无险抵达酒店山下，山上的坡还是挺高的，这车上的人都不怕翻车的吗？还是那样有惊无险安全到达，我们分好组，随后将行李啥的搬进宿舍，安置好后等待我们的是“大自然的馈赠”食材还挺新鲜的，有机蔬菜和大自然的猪，味道不一般呐！饱足后又遭到邀请“半山腰上的”故事酒吧，门牌语：“你有故事，我有酒”，每晚我们都在故事酒吧里，对酒欢歌，吃着烧烤，太惬意了！好几次我都是“醉着清醒”恍惚间所有的压迫和烦恼随着“咕咕咕”下肚，一饮而空。早上起床呼吸着新鲜的空气，倾听大自然的声音，很难联想城市的生活是多么嘈杂。不可否认，早上还是适合爬山的，没错我已经在爬山的路上了，不算远，只爬一个上午就能结束，关键在于爬山的过程发生了一些有趣的事。为什么森林里面会混进一辆废弃的大巴车，而且还融合进大自然里面，很奇妙的感觉，中途休息就如同在等公交车，但是它又不会跑。森林里面有仓鼠，还有玻璃大桥，还有超大弹弓，还有荡秋千，还有踏踏板（是那种360度旋转，可上可下那种，而且很危险，在悬崖边边，刺激程度十颗星，我是不可能坐的，我只会跟对岸的人摇手打招呼），还有超长的桥（估计长有600米左右，高我就不形容了，现在回想都后怕，一只手能数过来的人数在桥上走动摇晃的非常厉害，我也很怕，我只能扶着绳索慢慢走到终点，突然想到课本上的“卢沟桥”真是太不容易了）等等，太多项目可以游玩的，我们基本都走过了也玩过了。快乐的时光总是那么短暂，有如意的也有不如意的，随着大合照的拍摄结束了这段2天3夜的旅行。',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    // redText: '#很久很久的我们(2016-至今)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_2024_10_20_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR0bX0X7508hWAvqIJmskWDUklyEUSkq0ahftHlVYwkmQkPDMGyFo8Nx8001l3w45E47KRttrWlRueVHn4wBKf4!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2024_10_20_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVu9Ajocot6JmLzr2jfK4uBCtRWozwE5SyFVlswKPu1HpDoLRfjhQFWyX10hIGbhvWLVj.inooArqdRH00RKu68!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2024_10_20_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ66FAdkC1kUMDFPN.eiWJc9AMkRg8oIAZYY3FFsGjsZljxB.KMPLxXe8Htvx1OS3xJKXgCSttn7vru*wx4AuY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2024_10_20_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STiOn00rK3WMA*HIQYCQ40KxEBo7206tGnRIwtxbG3Gu6Lv2QdUhbpcFPgVW0hEz.kcwWK.vC9j.y8YD49TSoWY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_2024_10_20_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXatEkVMwjLXl9ilsmpSvvLw1ZdMo5r.GHDOqtdzkwAyVBmXG*V3uF261ZgUtZWjNGsj4*zxONi8*7dBFTDnQYc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    expandText: '展开内容',
    showExpand: true
    // showExpand: false
});

// 2023年5月13日
addItem({
    id: '言定',
    //相册N10
    date: '2023年5月13日',
    content: '赶早读的路上，天空是那么平淡的颜色来着，周边都显的那么清晰，清晨的云围绕着大山还未散去，微风袭来，水稻正朝向我说：“早啊！”，我来不及一一打招呼便匆匆赶路。脑海里突然闪现出“稻香”这首歌，随着稻香河流继续奔跑，微微笑，小时候的梦我知道。这些感想本应该正直“高三”的时候就能想到的文笔思路，非要出来工作之后看到这张照片才会提笔形成“教育延后性的闭环”，那时大概率只会拿个手机拍个照，然后吐槽“哇！多看两眼补充一下绿色素”。',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    // redText: '#很久很久的我们(2016-至今)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'singleCell',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'singleCellImg img_2023_5_13', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqe1T3alAMbX2oHvULPY1tNe1RwBA2agc2GC0wEpn9cvZn5JJtemKjZV0OZn*KDNWom8RyZXP7WdxDEeWBuwwwZs!/mnull&bo=QAYmCUAGJgkBByA!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    expandText: '展开内容',
    showExpand: true
    // showExpand: false
});

// 2023年4月1日
addItem({
    id: '言定',
    //相册N10
    date: '2023年4月1日',
    content: '2020年10月18号，一名小萌新初来乍到“华云通”，总是害怕尴尬，所以给大家最初的感觉，我想应该是很难相处吧。事实却是如此，我是那么的格格不入，好在大家对我都比较包容，教会了我很多工作上的本领，我很感激，我能很清晰的感觉到，我们共患难的这些年，无论是工作上还是工作下的友谊都是那么令我难忘。也许还在华云通的老人，可能会回想起曾经系统组有那么5位“5大神”吧，嗯，2023年3月31号，我正式离职离开了华云通，又是一个是非之地，曾今风云水起的5大神如今只剩下最后一人，对于我而言“没什么好留恋的了”，人总不能原地踏步，走出去也许会看到不同的风景，去经历、去感受、去倾听之后人会变的更加质变，只是不清楚这变化是往好的方面还是坏的方面。这是一段令我难忘的旅程，也有特别后悔的事，假如当初没有拒绝她的电影院邀约，我们是不是有可能···，故事还在继续，踏上新的旅途吧！',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    // redText: '#很久很久的我们(2016-至今)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、 fourGrid(4宫格)、 nineGrid(9宫格)
    fourGridClass: 'fourGrid',
    // imgs 自定义 singleCellImg (单格图片)、 three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'three_box_box_img img_2023_4_1_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZqCVT.VzxGNbYzhZiNdGbR8j9YMReYaxu.3B2dUpy8sxuq0Ynm.aywUNqaUvNKNwK98u30gGsO3IXdA0wbmHNw!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5' },
        { class: 'three_box_box_img img_2023_4_1_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSTZTrfF8pddK2HtRcP7dF7JwJzT3BgR4r7ozSBfCI4YjHq3PIQb*aVm9pl5twfjRM8JzRK8AWq*pDfZxv0gto4!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5' },
        { class: 'three_box_box_img img_2023_4_1_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR6jDbiSqPr1DkY7.zljEAxliWK.67PcFlYy5D.BMhZARyJAKedPhIARS11rpwLx3bomP08H8pjAGGaL5Zuw25U!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5' },
        { class: 'three_box_box_img img_2023_4_1_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUoMq3UL2AZS*DmXpyU20xLJ0TABipD9VSjA3t9xiv8WIx6GLtAYjgGkmKqzl2dR1V9mQWlWdnptlVWn3e21LwE!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    expandText: '展开内容',
    showExpand: true
    // showExpand: false
});

// 2023年2月13日
addItem({
    id: '言定',
    //相册N10
    date: '2023年2月13日',
    content: '今天不知怎么了，起稿删除再起稿，内心波动不已。我好像特别羡慕那些有能力有智慧的人，因为它总是有一股强大的力量带动我跑起来，所以我羡慕，想要去追赶。我好像累了，一个小小的日常失误，令我担忧，令我警觉，似乎狂风暴雨即将洗刷我的灵魂、内心深处，真正让我感到累的是，我的思想全部都是在想怎么回怼那些洗刷我灵魂和内心深处的狂风暴雨。不过庆幸的是，异常的宁静，并没有出现所谓的狂风暴雨，但也让我感到自责吧，毕竟确实是“我做错的”，很多时候，我都在想，我究竟要成为一个怎样的人，又能做点什么，更多的是感到未来的迷茫和不确定。',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    // redText: '#很久很久的我们(2016-至今)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、 fourGrid(4宫格)、 nineGrid(9宫格)
    fourGridClass: 'fourGrid',
    // imgs 自定义 singleCellImg (单格图片)、 three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'three_box_box_img img_2023_2_13_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVrQKKDH4U3TWCFDKCY1MzmgQnvfroRUzdumga7i*ask9ejX.K5zyzyAlJb2q2i.10cYOArkRuXuJtskrq1QEbM!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'three_box_box_img img_2023_2_13_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ3VcRz535SSWd5EXnXUBcLa3kidFjTHLhHGDUa*TYnGOgoBShcDRfKvJCIWkXARaFifT8GRJjicJxx7TUJTe8!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'three_box_box_img img_2023_2_13_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SezNIsGNTbLtxGszSUMeADLTTk.DNTmYNdWW*Wxv22UlqTW.*JKwzdWfYZ8iLourvEdgd9.vT1P*947a5KZfiXU!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5' },
        { class: 'three_box_box_img img_2023_2_13_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXc151LmuqvZxGyc3r*7.8oh9K4wv*lgzOGjbg6Vk*hHKtnI.7qerRugtW7qV3YxsCFP9ws9Cu.d2x.0*Frty0!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    expandText: '展开内容',
    showExpand: true
    // showExpand: false
});

// 2022年5月23日
addItem({
    id: '言定',
    //相册N10
    date: '2022年5月23日',
    content: 'java塞班时代的游戏，真令我怀念，那熟系精致的画风，总让我恍惚间又回到了小时候。手机游戏还是小学才开始接触的，那时候我并没有手机，跑去小伙伴家看他们玩，总是意犹未尽，我妈就来到小伙伴家门口喊我回家吃饭，我也总是屁颠屁颠跑回去，不禁感叹，小时候无忧无虑又天真，还有家人喊你回家吃饭，真的很幸福。成长总是伴随着很多无奈，历经时间的更迭，很多事、人和物都已经“物是人非”。怀念小时候的我，展望未来的我与之交手，共勉。',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    // redText: '#很久很久的我们(2016-至今)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、 fourGrid(4宫格)、 nineGrid(9宫格)
    fourGridClass: 'fourGrid',
    // imgs 自定义 singleCellImg (单格图片)、 three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'three_box_box_img img_2022_5_23_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZTPkh1tiRgYP1EZwIZskxeHMsXIMKIttoSE7ig24hnxUqgIv.Pd0cv1TQUstnu70uuREo8s3BYx1LaJoa1FS4U!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5' },
        { class: 'three_box_box_img img_2022_5_23_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdTpRCpUS2WQiJy12DM1VMctvflX7hgKWhePWIqrM0.6beNO3y9l1PvoLOJZatJGCiPURpauY.6NoH2tPVBlmzg!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5' },
        { class: 'three_box_box_img img_2022_5_23_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sdwca25wmH0DCmmwCtxAiBg.aAO7AoNSONGxNfKcsGONEnRjK4u7I2kN.hZkDcudAWS630QyRg3GrR51*r2v1s4!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5' },
        { class: 'three_box_box_img img_2022_5_23_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW4uLPn5WdCukln0JFuNA.pQg29gNsLos8PGARJGqdZnPcD8bKUxbTEd2NYKgwFhhoA6.Ej23i*b4oSRjRv5K6w!/mnull&bo=sAC0ALAAtAADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    expandText: '展开内容',
    showExpand: true
    // showExpand: false
});

// 2022年3月4日
addItem({
    id: '言定',
    //相册N10
    date: '2022年3月4日',
    content: '纵有疾风起，人生不言弃。查了下资料貌似出自法国诗人瓦雷里《海滨墓园》 （Christina Rossetti） 的一句诗，原句是Le vent se lève, il faut tenter de vivre.很感谢这位同事送来的励志语， 我明白我自身还有很多不足，日后定会更加努力，路漫漫其修远兮。',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    // redText: '#很久很久的我们(2016-至今)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'singleCell',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'singleCellImg img_2022_3_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQCCD8qBqLWoVkRex6rAFKnOW3nKoYiO7v2eo38V*1aEXMfzid3iYmdsHOc5kjpSqbsahAhNvnlN0kI6*TPGaw4!/mnull&bo=QAZVCEAGVQgBByA!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    expandText: '展开内容',
    showExpand: true
    // showExpand: false
});

// 相册N1
addItem({
    id: '言定',
    //相册N10
    date: '2021年5月10日',
    // content: '',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    redText: '#很久很久的我们(2016-至今)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_XC_N1_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SaowfYwDBs20WREoZWlDcqHbqXhHUiO9Xpm1ppsqZMsFMS65N1eAGSjeb99PLAKWIKC.08Z08hXJ0Tkc38CdIww!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N1_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsicjmqSEDTVIxqJ*qRr6f6qCXsPyk.O2nAZ5TKPIZTatobzasXsepGRm1W27cDOTESsubuQ7aS4NDsB9eIKr4!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N1_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYMXPmkdL6Zps9QmcqXDt9gF4LYoytu1HQcdgM9qENajQ1RYrXLQmXT.a2vBIv6t*PjfH21llbJCgDqL4UT48lI!/mnull&bo=sACyALAAsgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N1_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SeA5OXWdCnfRAYY471J0Vw8ikujeI9bZrkZV7d75gK5ssK9ea7LpxjfUQdbjewykXhkokcOgxNH0nJlq6UEUg40!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N1_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbL0uVH67NSxPzKGRGVl6VW*7PirxnuCCq8*FpWZ*cHbgslK25dpBvZS8ojXdBiGRQ8CIVARxTAasjoAsRL*ABk!/mnull&bo=sACxALAAsQADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N1_6', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STaYQQuJWuj1CtJwYPFA1xH8WZA3E7y*uayFmm5XzcpZUNVESmu1SiYISHfAVex*CKQ3Yk*ViFY*ii02RksgM.I!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N1_7', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STS2IjqYmmj*MwcG8gd1gQBNt0v7x6ttrNbv4BGux8fD1.WPmTwt.fh19bWKQony2KWUEtOYRa9xVV0Vjv3VxJs!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N1_8', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STjoFlSXmwPuQ4T*ghuPxL5uWyhvfmJXJw3o7IzHbTYTVa8Fn2P6I*PlnLy9Gc1vJFL9*KnTjSsp5Poahk0ytxg!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N1_9', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYHMkYzILF2BJQ70jmmA1oSolUiq5*UUqrSATUbAulGyimIUf9DGwrV4Dk2tPRnIxVrqXRckn.X9MOtF9Gz01zU!/mnull&bo=qwCrAKsAqwADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    showExpand: false
});

// 相册N2
addItem({
    id: '言定',
    //相册N10
    date: '2021年5月9日',
    // content: '',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    redText: '#大千世界的大学(2019-2022)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_XC_N2_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N2_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N2_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N2_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N2_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N2_6', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N2_7', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N2_8', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N2_9', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    showExpand: false
});

// 相册N3
addItem({
    id: '言定',
    //相册N10
    date: '2021年5月8日',
    // content: '',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    redText: '#大千世界的大学(2019-2022)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_XC_N3_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N3_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N3_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N3_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N3_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N3_6', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N3_7', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N3_8', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N3_9', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    showExpand: false
});

// 相册N4
addItem({
    id: '言定',
    //相册N10
    date: '2021年5月7日',
    // content: '',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    redText: '#大千世界的大学(2019-2022)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_XC_N4_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N4_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N4_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N4_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N4_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N4_6', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N4_7', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N4_8', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N4_9', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    showExpand: false
});

// 相册N5
addItem({
    id: '言定',
    //相册N10
    date: '2021年5月6日',
    // content: '',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    redText: '#大千世界的大学(2019-2022)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_XC_N5_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N5_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N5_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N5_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N5_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N5_6', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N5_7', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N5_8', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N5_9', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    showExpand: false
});

// 相册N6
addItem({
    id: '言定',
    //相册N10
    date: '2021年5月5日',
    // content: '',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    redText: '#大千世界的大学(2019-2022)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_XC_N6_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N6_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N6_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N6_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N6_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N6_6', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N6_7', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N6_8', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N6_9', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    showExpand: false
});

// 相册N7
addItem({
    id: '言定',
    //相册N10
    date: '2021年5月4日',
    // content: '',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    redText: '#大千世界的大学(2019-2022)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_XC_N7_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sbvsj9BntS55zzI4*MvNmsMyG3ac*mNcLqQYuItNmIVVYv6unTTlSk.amLDfG0CxTEwElPrZUhDmQBIvefGGbao!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N7_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSWh9tayOu3B29tatnlnh2QhhMrueZh9qEYbF7yI1yKhVwUZ*xwD.IYA78FZ5XIzyFc9riUSSUPyC1O.ya3sbXc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N7_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZxv1aIscB1cjen*S8uIv6lfj.b5uyiYXek*Rs3WbfPeCkDQisCNid22a0VNXieY1xrvopryVGZBG.N3ZMusmHA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N7_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV71SKfkAQt2GQD.vBixXcYPVldXkO5j0ON5DQ2cV3edwhgf7xtRs2Xs.ZrAFB*Uf8bU1PZEqwJ8p2qkY3lV70A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N7_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfEhhaU2XYCz8lKQeiPfOCNfleUi6TJeaxeUq2FTIyWxsKfs.UWHa4L3LtV4*2oWWByyPrvSPTjVOH0Sn*U6Hew!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N7_6', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbwMbTXsuPsSTeicv3XQKihAEW0VaprbdcefSl2VIe4t9nJRQTryse2SULNu14UZJ2fGH.P5ZN6Ljf1TUvnKmJY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N7_7', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ9zmmcgtjDWaDxlzRZDu*yvzdxvwKd.xL1h98fn18WByxOOS583nrJKEvM.HpkKG7fjzbN8SXKa.ybnwwk1J2A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    showExpand: false
});

// 相册N8
addItem({
    id: '言定',
    //相册N10
    date: '2021年5月3日',
    // content: '',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    redText: '#书比人高的高中(2016-2019)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_XC_N8_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N8_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N8_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N8_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N8_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N8_6', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N8_7', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N8_8', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N8_9', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    showExpand: false
});

// 相册N9
addItem({
    id: '言定',
    //相册N10
    date: '2021年5月2日',
    // content: '',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    redText: '#书比人高的高中(2016-2019)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_XC_N9_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRx5WW6ySOzfpKBb*upHrjo8uCeTQoaZTuKEX*nhOH4X60TVWk99XPrFNE*BL98IyBe6YFMOTpiYcrI34.O2M5w!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N9_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUE7IyLf5bvOjgAXoyhieQY9lDa1gRiHXd4vC2tmTmrSPW.SPd84yI6lpmR.1AYU*ZYphj99YeM4kOF0U2S9iwU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N9_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRBU*PVnrIpkYf7axo4xaOZyBXuza4*3OfQY1hECRsN9W0ZFEEIfK8dp3HdCM4ev5ksgMQoPu4X*Bs8DeoQczow!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N9_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSAZ.jptery6KUOgKegAeGzexuqfdA8igAFP*23OiC4iHZuGAetb5PNW0slKOHG9iQm36s727HXbbiG6WDI3zGI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N9_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfL7yVy*1FOBWrr61CIlyYq.rXR3qJ7mlAZ7orobY3vQPm8LZ2YE01HjaKdyVbzfbXw.k7u66XBBZVXGXPn45cc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N9_6', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdN8htaPvPykb9ZVlhSoPMfdc7S*C*vT5XjnE1s3OagSaFoQBTSUpzncUCIyEPlS0oJx9EN7yYomrPj.AO7f3TI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N9_7', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Scf..thGmXCm8pmdPgqqa*P2GXH6IuIBFggpoWw9iMqFssUMXc1XWOhfxWZGbIzp6WDrSgoh1pfVB.q5wZB1MGg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N9_8', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STTS3HbmDlB0PNyBrxJWtA89CmLkT2AQkHbvsJsvu5pNSvEMEg9totT4M5ZyelqPw2r6E3NUvieOU5spSUy8d8E!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    showExpand: false
});

// 相册N10
addItem({
    id: '言定',
    //相册N10
    date: '2021年5月1日',
    // content: '',
    // redText 自定义 删除则不显示红字段 redText: '#自定义红字段<br>',
    redText: '#一锅大家族的亲人(出生开始)<br>',
    // fourGridClass 自定义 fourGrid 类名 ==> singleCell(单格图片)、fourGrid(4宫格)、nineGrid(9宫格)
    fourGridClass: 'nineGrid',
    // imgs 自定义 singleCellImg (单格图片)、three_box_box_img(4宫格)、 nineGridImg(9宫格)
    // 单格图片 图片像素150*200 + 4宫格图片 图片像素190*190 + 九宫格图片 图片像素190*190 
    // { class: 'singleCellImg img_2022_5_23_1', src: './favicon.png' }
    imgs: [
        { class: 'nineGridImg img_XC_N10_1', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSqbdqPMUT3BC9XeSIuyies6DmgAeTvzzw6BrQD4YnczsFPcLYPbM.0UItxoQTMLq2amgL2MnuB95x8BnDp.Ng0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N10_2', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXgnJHdQOWBJwiXP7Np3lLCqxMWKcGn*O3g5pndIsjKymIhO3NHrhwtD*0ldttvZTgYiJ5tiKnA9Kv*3oB..7U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N10_3', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXlsYD4criddDkyH.9LZlQ6X0eCw662xVbK0S4CjNzi3hgqqpY3JX3sniwq1NHoV2MrISpIRf1H212zhJ9T2e78!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N10_4', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSNkr4qCYtqiYpEywcFDV63Vb0ECH5U1PAotdWMcjckSxWvJtecTHxWm0*AGYhUY6jK6IFnjL5o7WAAeMvaeKgg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N10_5', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se8M3KBIBEWMjqD*2rjEQvdA1NixDFNWt9pIlOKIuMeAvZQ.Z9Dks30hAzX668Jmdrm7FdAPT0MndqNX1XpvQUQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N10_6', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7AFQVYXQPAKtKBgooAw45lvu36DM.XRoSX5.CwjEaygOJRr*rLnLIqIMfJQnI7kcpOP5.jt5jqf0iUcwMvaOk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' },
        { class: 'nineGridImg img_XC_N10_7', src: 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWtP1uZFmBECG0uNea2jMLW.u3vwZqbFLQfls439ZcEN7dfA5C9Orviz9JPQtbm*hMTs2dFUO4LVYTNjpj7ZNSU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5' }
    ],
    // 长文本内容隐藏和显示按钮 （显示==> expandText: '展开内容',showExpand: true）
    //(隐藏==>showExpand: false)
    showExpand: false
});
