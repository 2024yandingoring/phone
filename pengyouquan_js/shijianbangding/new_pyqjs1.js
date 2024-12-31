//var html_ping = document.querySelector(".html_ping"); //获取传替网址类
var four_box = document.querySelector(".four_box"); //获取内置浏览器主盒子类
var four_box_ifa = document.querySelector(".four_box_ifa"); //获取ifa浏览器类
var four_box_img = document.querySelector(".four_box_img"); //获取img内置横屏图片类
var four_box_suimg = document.querySelector(".four_box_suimg"); //获取img内置竖屏图片类

// 内容区域事件绑定 begin
var video_2024_12_16 = document.querySelector(".video_2024_12_16"); //获取播放视频图片类
var video_2024_12_16_video_Android = "https://player.bilibili.com/player.html?isOutside=true&aid=113725331742706&bvid=BV1QSCHYcEbc&cid=27564444502&p=1";
video_2024_12_16.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "block"; //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "none"; //竖屏图片
    four_box_ifa.src = video_2024_12_16_video_Android; //视频
    // four_box_img.src = ; //横屏图片
    // four_box_suimg.src = ; //竖屏图片
}

//==

var video_2024_12_09 = document.querySelector(".video_2024_12_09"); //获取播放视频图片类
var video_2024_12_09_video_Android = "https://player.bilibili.com/player.html?isOutside=true&aid=113725348516179&bvid=BV1XmCHYaEf4&cid=27564508912&p=1";
video_2024_12_09.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "block"; //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "none"; //竖屏图片
    four_box_ifa.src = video_2024_12_09_video_Android; //视频
    // four_box_img.src = ; //横屏图片
    // four_box_suimg.src = ; //竖屏图片
}

//==

var video_2024_12_01 = document.querySelector(".video_2024_12_01"); //获取播放视频图片类
var video_2024_12_01_video_Android = "https://player.bilibili.com/player.html?isOutside=true&aid=113018188925480&bvid=BV1GvWvegER7&cid=500001661131714&p=1";
video_2024_12_01.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "block"; //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "none"; //竖屏图片
    four_box_ifa.src = video_2024_12_01_video_Android; //视频
    // four_box_img.src = ; //横屏图片
    // four_box_suimg.src = ; //竖屏图片
}

//==

var img_2024_10_20_1 = document.querySelector(".img_2024_10_20_1"); // 获取点击图片类
var img_2024_10_20_1_img = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SQ.b7v1OReGoSDKjtI8bP.gqynqYoNpEABz.zZPOgzSY5SQeBQsZ2JxDNc7Y5UxSas5rReq7z7DHmREOqKEoZD4!/photolist&t=5";
img_2024_10_20_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none"; //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    // four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2024_10_20_1_img; //竖屏图片
}

//==

var img_2024_10_20_2 = document.querySelector(".img_2024_10_20_2"); // 获取点击图片类
var img_2024_10_20_2_img = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SRgcfdtu*O7KhCdjxGIE0CG7yzA2e0EE4mkF7..oaJxJVJpskZhRUmw.4fWvnqawOFHat2*Av2KtLvl*AE5fD3M!/photolist&t=5";
img_2024_10_20_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none"; //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    // four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2024_10_20_2_img; //竖屏图片
}

//==

var img_2024_10_20_3 = document.querySelector(".img_2024_10_20_3"); // 获取点击图片类
var img_2024_10_20_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SaTnR1FNZuDfeVJXgXr2cUmN8EAzdv70Q0dII.nVUB9oIRnHzhUwnSB8Vi7ZPwHFasyitkCe..yVL5gDklZEIn0!/photolist&t=5";
img_2024_10_20_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "block"; //横屏图片
    four_box_suimg.style.display = "none"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    four_box_img.src = img_2024_10_20_3_img; //横屏图片
    // four_box_suimg.src = ; //竖屏图片
}

//==

var img_2024_10_20_4 = document.querySelector(".img_2024_10_20_4"); // 获取点击图片类
var img_2024_10_20_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SerT7he4p.qN1NwOf5S2ocRsMbxgGe2QwkE7lpZGF9mMjzfaes9vTfHiaUBS*Mv151*SbFbAGpY7ttveT2ANep0!/photolist&t=5";
img_2024_10_20_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "block"; //横屏图片
    four_box_suimg.style.display = "none"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    four_box_img.src = img_2024_10_20_4_img; //横屏图片
    // four_box_suimg.src = ; //竖屏图片
}

//==

var img_2024_10_20_5 = document.querySelector(".img_2024_10_20_5"); // 获取点击图片类
var img_2024_10_20_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SZwOWTT2AWJwwdPBAErLwhrN5KHuZAUHHHCoBFha4gcyE*1I83H.GpTwLK5G5Bme0t.dc9ZnNiRk31Pj5UooEUY!/=photolist&t=5";
img_2024_10_20_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "block"; //横屏图片
    four_box_suimg.style.display = "none"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    four_box_img.src = img_2024_10_20_5_img; //横屏图片
    // four_box_suimg.src = ; //竖屏图片
}

//==

var oneimg_2023_5_13 = document.querySelector(".oneimg_2023_5_13"); // 获取点击图片类
var oneimg_2023_5_13_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqe1T3alAMbX2oHvULPY1tNe1RwBA2agc2GC0wEpn9cvZn5JJtemKjZV0OZn*KDNWom8RyZXP7WdxDEeWBuwwwZs!/photolist&t=5";
oneimg_2023_5_13.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = oneimg_2023_5_13_img; //竖屏图片
}

//==

var img_2024_5_13_1 = document.querySelector(".img_2024_5_13_1"); // 获取点击图片类
var img_2024_5_13_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqXIAu2OqjncL4qchQtf8Q23r505BSPf3MPBVOYjul4PSHvrHgbe*HC*ZtiPQhUEcejW8WLoBs80i9T2Jv1rQuBM!/photolist&t=5";
img_2024_5_13_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2024_5_13_1_img; //竖屏图片
}

//==

var img_2024_5_13_2 = document.querySelector(".img_2024_5_13_2"); // 获取点击图片类
var img_2024_5_13_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqZiV*tcD0AMAvJibSuWWKF6Ayf5JS0UD8h0OfJAAMfForQAuAwjGnihpQw.S4CDGcOggw8OoODgwlRlUCom5HSw!/photolist&t=5";
img_2024_5_13_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2024_5_13_2_img; //竖屏图片
}

//==

var img_2024_5_13_3 = document.querySelector(".img_2024_5_13_3"); // 获取点击图片类
var img_2024_5_13_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUt8BiIl3r3kB7EY5Avux6cDv0.Fo1V7S4syCtPBKLgF9bHNtocO2nn4DBRRjFOFSz.X33KGjdg8YP6QH.cJi0U!/photolist&t=5";
img_2024_5_13_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2024_5_13_3_img; //竖屏图片
}

//==

var img_2024_5_13_4 = document.querySelector(".img_2024_5_13_4"); // 获取点击图片类
var img_2024_5_13_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqb0f6DhuQuStwXYVPwRiG9HXb2AbZ3RA0Xpx36QCsVaFx*OhLzSq9HoEnr83iSPdkjzsVBaarnC1lgz6T7uH0Ls!/photolist&t=5";
img_2024_5_13_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2024_5_13_4_img; //竖屏图片
}

//==

var img_2023_2_13_1 = document.querySelector(".img_2023_2_13_1"); // 获取点击图片类
var img_2023_2_13_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqdXJ3i0qpV75BdOsxDH0Z*zl.s2XhbIedLdJ3l2bYwLDz.uybptJ9LDYlPtTgprlfKr*VeyrmkZOasRVjurWyKA!/photolist&t=5";
img_2023_2_13_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2023_2_13_1_img; //竖屏图片
}

//==

var img_2023_2_13_2 = document.querySelector(".img_2023_2_13_2"); // 获取点击图片类
var img_2023_2_13_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqShhIkxYHdw0ahVM6yc16ORPxGHMl.glBfMYJrYgnjl.n6gCQc3vSnKFz.QThIzV9OEo5f0nLjazBU.l.Ic1qKU!/photolist&t=5";
img_2023_2_13_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2023_2_13_2_img; //竖屏图片
}

//==

var img_2023_2_13_3 = document.querySelector(".img_2023_2_13_3"); // 获取点击图片类
var img_2023_2_13_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqTZul8.EcQ1zLWEIBa64fMd7QIxfRaItPjery8JH0INppA4oSU.F4wWFSD9O.B76IVCQFz22M9cHX4O7lYZwzNs!/photolist&t=5";
img_2023_2_13_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2023_2_13_3_img; //竖屏图片
}

//==

var img_2023_2_13_4 = document.querySelector(".img_2023_2_13_4"); // 获取点击图片类
var img_2023_2_13_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqT588Ld*kXBbuLZu2BGx26tJSCQ92VU05KVK7vLIGltZsGc2.TsU9qX9GVji*kdeU2GG4vO8JbVkO21KDB7PRco!/photolist&t=5";
img_2023_2_13_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2023_2_13_4_img; //竖屏图片
}

//==

var img_2022_5_23_1 = document.querySelector(".img_2022_5_23_1"); // 获取点击图片类
var img_2022_5_23_1_img = "https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUHZNAiAHrgnGc9xDR3OMhnVJa4VocmSjczopbyV5rO1GtPAOXrRQLVD3L1*KUcRTGHAjHt9Mjpaz.wEFnY1xHA!/photolist&t=5";
img_2022_5_23_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2022_5_23_1_img; //竖屏图片
}

//==

var img_2022_5_23_2 = document.querySelector(".img_2022_5_23_2"); // 获取点击图片类
var img_2022_5_23_2_img = "https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQYIg6l085Qwf32DL1D7oWQ*uVKFp7gXedrf7by5J2ywlBq*gvyw5og9SeHoOFqOgqGNRTivFSfDnUfG4hIhjuA!/photolist&t=5";
img_2022_5_23_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2022_5_23_2_img; //竖屏图片
}

//==

var img_2022_5_23_3 = document.querySelector(".img_2022_5_23_3"); // 获取点击图片类
var img_2022_5_23_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYEo4K*C7YsutEDKmQPEMeadaNdwf9*nITA8s*RnRjqqu9oYhklX9..Bv3MkBhiy0ZQl8SvQ68FFzvbPeSClPqs!/photolist&t=5";
img_2022_5_23_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2022_5_23_3_img; //竖屏图片
}

//==

var img_2022_5_23_4 = document.querySelector(".img_2022_5_23_4"); // 获取点击图片类
var img_2022_5_23_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYrPJTCsu6Z.c9rJGx9e8Y3rkg9uCoSe30lNiCopjzRDksGNUHVEVVC8YL6q.4m8qkPNi2ZlmDQ5VPxVt.c9hxI!/photolist&t=5";
img_2022_5_23_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_2022_5_23_4_img; //竖屏图片

}

//==

var oneimg_2022_3_4 = document.querySelector(".oneimg_2022_3_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var oneimg_2022_3_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQCCD8qBqLWoVkRex6rAFKnOW3nKoYiO7v2eo38V*1aEXMfzid3iYmdsHOc5kjpSqbsahAhNvnlN0kI6*TPGaw4!/photolist&t=5";
oneimg_2022_3_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = oneimg_2022_3_4_img; //竖屏图片
}

//==

var img_xc_N1_1 = document.querySelector(".img_xc_N1_1"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N1_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5";
img_xc_N1_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N1_1_img; //竖屏图片
}

//==

var img_xc_N1_2 = document.querySelector(".img_xc_N1_2"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N1_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5";
img_xc_N1_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N1_2_img; //竖屏图片
}

//==

var img_xc_N1_3 = document.querySelector(".img_xc_N1_3"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N1_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5";
img_xc_N1_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N1_3_img; //竖屏图片
}

//==

var img_xc_N1_4 = document.querySelector(".img_xc_N1_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N1_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5";
img_xc_N1_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N1_4_img; //竖屏图片
}

//==

var img_xc_N1_5 = document.querySelector(".img_xc_N1_5"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N1_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5";
img_xc_N1_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N1_5_img; //竖屏图片
}

//==

var img_xc_N1_6 = document.querySelector(".img_xc_N1_6"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N1_6_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5";
img_xc_N1_6.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N1_6_img; //竖屏图片
}

//==

var img_xc_N1_7 = document.querySelector(".img_xc_N1_7"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N1_7_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5";
img_xc_N1_7.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N1_7_img; //竖屏图片
}

//==

var img_xc_N1_8 = document.querySelector(".img_xc_N1_8"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N1_8_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5";
img_xc_N1_8.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N1_8_img; //竖屏图片
}

//==

var img_xc_N1_9 = document.querySelector(".img_xc_N1_9"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N1_9_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5";
img_xc_N1_9.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N1_9_img; //竖屏图片
}

//==

var img_xc_N2_1 = document.querySelector(".img_xc_N2_1"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N2_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5";
img_xc_N2_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N2_1_img; //竖屏图片
}

//==

var img_xc_N2_2 = document.querySelector(".img_xc_N2_2"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N2_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5";
img_xc_N2_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N2_2_img; //竖屏图片
}

//==

var img_xc_N2_3 = document.querySelector(".img_xc_N2_3"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N2_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5";
img_xc_N2_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N2_3_img; //竖屏图片
}

//==

var img_xc_N2_4 = document.querySelector(".img_xc_N2_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N2_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5";
img_xc_N2_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N2_4_img; //竖屏图片
}

//==

var img_xc_N2_5 = document.querySelector(".img_xc_N2_5"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N2_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5";
img_xc_N2_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N2_5_img; //竖屏图片
}

//==

var img_xc_N2_6 = document.querySelector(".img_xc_N2_6"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N2_6_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5";
img_xc_N2_6.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N2_6_img; //竖屏图片
}

//==

var img_xc_N2_7 = document.querySelector(".img_xc_N2_7"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N2_7_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5";
img_xc_N2_7.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N2_7_img; //竖屏图片
}

//==

var img_xc_N2_8 = document.querySelector(".img_xc_N2_8"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N2_8_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5";
img_xc_N2_8.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N2_8_img; //竖屏图片
}

//==

var img_xc_N2_9 = document.querySelector(".img_xc_N2_9"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N2_9_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5";
img_xc_N2_9.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N2_9_img; //竖屏图片
}

//==

var display_img_N3_1 = document.querySelector(".display_img_N3_1"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var display_img_N3_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5";
display_img_N3_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = display_img_N3_1_img; //竖屏图片
}

//==

var display_img_N3_2 = document.querySelector(".display_img_N3_2"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var display_img_N3_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5";
display_img_N3_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = display_img_N3_2_img; //竖屏图片
}

//==

var display_img_N3_3 = document.querySelector(".display_img_N3_3"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var display_img_N3_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5";
display_img_N3_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = display_img_N3_3_img; //竖屏图片
}

//==

var display_img_N3_4 = document.querySelector(".display_img_N3_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var display_img_N3_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5";
display_img_N3_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = display_img_N3_4_img; //竖屏图片
}

//==

var display_img_N3_5 = document.querySelector(".display_img_N3_5"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var display_img_N3_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5";
display_img_N3_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = display_img_N3_5_img; //竖屏图片
}

//==

var display_img_N3_6 = document.querySelector(".display_img_N3_6"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var display_img_N3_6_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5";
display_img_N3_6.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = display_img_N3_6_img; //竖屏图片
}

//==

var display_img_N3_7 = document.querySelector(".display_img_N3_7"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var display_img_N3_7_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5";
display_img_N3_7.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = display_img_N3_7_img; //竖屏图片
}

//==

var display_img_N3_8 = document.querySelector(".display_img_N3_8"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var display_img_N3_8_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5";
display_img_N3_8.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = display_img_N3_8_img; //竖屏图片
}

//==

var display_img_N3_9 = document.querySelector(".display_img_N3_9"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var display_img_N3_9_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5";
display_img_N3_9.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = display_img_N3_9_img; //竖屏图片
}

//==

var img_xc_N4_1 = document.querySelector(".img_xc_N4_1"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N4_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5";
img_xc_N4_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N4_1_img; //竖屏图片
}

//==

var img_xc_N4_2 = document.querySelector(".img_xc_N4_2"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N4_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5";
img_xc_N4_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N4_2_img; //竖屏图片
}

//==

var img_xc_N4_3 = document.querySelector(".img_xc_N4_3"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N4_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5";
img_xc_N4_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N4_3_img; //竖屏图片
}

//==

var img_xc_N4_4 = document.querySelector(".img_xc_N4_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N4_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5";
img_xc_N4_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N4_4_img; //竖屏图片
}

//==

var img_xc_N4_5 = document.querySelector(".img_xc_N4_5"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N4_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5";
img_xc_N4_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N4_5_img; //竖屏图片
}

//==

var img_xc_N4_6 = document.querySelector(".img_xc_N4_6"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N4_6_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5";
img_xc_N4_6.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N4_6_img; //竖屏图片
}

//==

var img_xc_N4_7 = document.querySelector(".img_xc_N4_7"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N4_7_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5";
img_xc_N4_7.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N4_7_img; //竖屏图片
}

//==

var img_xc_N4_8 = document.querySelector(".img_xc_N4_8"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N4_8_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5";
img_xc_N4_8.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N4_8_img; //竖屏图片
}

//==

var img_xc_N4_9 = document.querySelector(".img_xc_N4_9"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N4_9_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5";
img_xc_N4_9.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N4_9_img; //竖屏图片
}

//==

var img_xc_N5_1 = document.querySelector(".img_xc_N5_1"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N5_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5";
img_xc_N5_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N5_1_img; //竖屏图片
}

//==

var img_xc_N5_2 = document.querySelector(".img_xc_N5_2"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N5_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5";
img_xc_N5_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N5_2_img; //竖屏图片
}

//==

var img_xc_N5_3 = document.querySelector(".img_xc_N5_3"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N5_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5";
img_xc_N5_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N5_3_img; //竖屏图片
}

//==

var img_xc_N5_4 = document.querySelector(".img_xc_N5_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N5_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5";
img_xc_N5_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N5_4_img; //竖屏图片
}

//==

var img_xc_N5_5 = document.querySelector(".img_xc_N5_5"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N5_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5";
img_xc_N5_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N5_5_img; //竖屏图片
}

//==

var img_xc_N5_6 = document.querySelector(".img_xc_N5_6"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N5_6_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5";
img_xc_N5_6.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N5_6_img; //竖屏图片
}

//==

var img_xc_N5_7 = document.querySelector(".img_xc_N5_7"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N5_7_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5";
img_xc_N5_7.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N5_7_img; //竖屏图片
}

//==

var img_xc_N5_8 = document.querySelector(".img_xc_N5_8"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N5_8_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5";
img_xc_N5_8.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N5_8_img; //竖屏图片
}

//==

var img_xc_N5_9 = document.querySelector(".img_xc_N5_9"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N5_9_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5";
img_xc_N5_9.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N5_9_img; //竖屏图片
}

//==

var img_xc_N6_1 = document.querySelector(".img_xc_N6_1"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N6_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5";
img_xc_N6_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N6_1_img; //竖屏图片
}

//==

var img_xc_N6_2 = document.querySelector(".img_xc_N6_2"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N6_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5";
img_xc_N6_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N6_2_img; //竖屏图片
}

//==

var img_xc_N6_3 = document.querySelector(".img_xc_N6_3"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N6_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5";
img_xc_N6_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N6_3_img; //竖屏图片
}

//==

var img_xc_N6_4 = document.querySelector(".img_xc_N6_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N6_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5";
img_xc_N6_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N6_4_img; //竖屏图片
}

//==

var img_xc_N6_5 = document.querySelector(".img_xc_N6_5"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N6_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5";
img_xc_N6_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N6_5_img; //竖屏图片
}

//==

var img_xc_N6_6 = document.querySelector(".img_xc_N6_6"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N6_6_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5";
img_xc_N6_6.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N6_6_img; //竖屏图片
}

//==

var img_xc_N6_7 = document.querySelector(".img_xc_N6_7"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N6_7_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5";
img_xc_N6_7.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N6_7_img; //竖屏图片
}

//==

var img_xc_N6_8 = document.querySelector(".img_xc_N6_8"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N6_8_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5";
img_xc_N6_8.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N6_8_img; //竖屏图片
}

//==

var img_xc_N6_9 = document.querySelector(".img_xc_N6_9"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N6_9_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5";
img_xc_N6_9.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N6_9_img; //竖屏图片
}

//==

var img_xc_N7_1 = document.querySelector(".img_xc_N7_1"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N7_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfbhQnhtch1mAFamQ2.jCHwKjh80C6uHAIzXvk4iCyM5SFMl3FR5vYlZ2*Z5fLE6ox.JI7SYUKPjv.3Fbb0Yi8Y!/photolist&t=5";
img_xc_N7_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N7_1_img; //竖屏图片
}

//==

var img_xc_N7_2 = document.querySelector(".img_xc_N7_2"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N7_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQBoho*gR*fLRyhIZW3Ib7C2SMKwYem*0u2b9F4DgWKPiW9Byms.Md9kzptCdKnpOfJYMldlhCbdEG0z38YHhMc!/photolist&t=5";
img_xc_N7_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N7_2_img; //竖屏图片
}

//==

var img_xc_N7_3 = document.querySelector(".img_xc_N7_3"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N7_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbBt*PyyoNuHMjHgNLgNoJ5PEh..Fwm37YoJHr0JA.Ez8D*ZvBMNJe18HRkx6J6nUZ1Z6FIy0QIym7Oqs4zbGNA!/photolist&t=5";
img_xc_N7_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N7_3_img; //竖屏图片
}

//==

var img_xc_N7_4 = document.querySelector(".img_xc_N7_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N7_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUbanskXOxVJnd33Fa2Qb0k6zp1nlrz9LV4zqszxiR9nxTnFhAQdGU0BwTrmcJJa882KXUvOMJoybDkB.GzsL7Y!/photolist&t=5";
img_xc_N7_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N7_4_img; //竖屏图片
}

//==

var img_xc_N7_5 = document.querySelector(".img_xc_N7_5"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N7_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcsQnLEjt*GRsvj1gcnUvf5MirEX210PZE5EG7CwriExTtmICrB012Oa.*bbS*erN5m9HlA3marDX97VjD3Pb0Y!/photolist&t=5";
img_xc_N7_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N7_5_img; //竖屏图片
}

//==

var img_xc_N7_6 = document.querySelector(".img_xc_N7_6"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N7_6_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqe.V5i5w0PfextqJB9NBgDRt6CJFY9.9ytqT4mm5CShsqPJy3QsWx4.L2ATab2mV6RYH.NASf*ecxC3kGrdleBE!/photolist&t=5";
img_xc_N7_6.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N7_6_img; //竖屏图片
}

//==

var img_xc_N7_7 = document.querySelector(".img_xc_N7_7"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N7_7_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfsq.cV.Fz5J2g3D8.AUe6LhwpEld9ZYTLNToUgXSjIrpvpTsxw7kdmODX31rpnSKDszQMR1eLGy0dtMywZoQoA!/photolist&t=5";
img_xc_N7_7.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N7_7_img; //竖屏图片
}

//==

var img_xc_N8_1 = document.querySelector(".img_xc_N8_1"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N8_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5";
img_xc_N8_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N8_1_img; //竖屏图片
}

//==

var img_xc_N8_2 = document.querySelector(".img_xc_N8_2"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N8_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5";
img_xc_N8_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N8_2_img; //竖屏图片
}

//==

var img_xc_N8_3 = document.querySelector(".img_xc_N8_3"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N8_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5";
img_xc_N8_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N8_3_img; //竖屏图片
}

//==

var img_xc_N8_4 = document.querySelector(".img_xc_N8_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N8_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5";
img_xc_N8_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N8_4_img; //竖屏图片
}

//==

var img_xc_N8_5 = document.querySelector(".img_xc_N8_5"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N8_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5";
img_xc_N8_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N8_5_img; //竖屏图片
}

//==

var img_xc_N8_6 = document.querySelector(".img_xc_N8_6"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N8_6_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5";
img_xc_N8_6.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N8_6_img; //竖屏图片
}

//==

var img_xc_N8_7 = document.querySelector(".img_xc_N8_7"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N8_7_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5";
img_xc_N8_7.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N8_7_img; //竖屏图片
}

//==

var img_xc_N8_8 = document.querySelector(".img_xc_N8_8"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N8_8_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5";
img_xc_N8_8.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N8_8_img; //竖屏图片
}

//==

var img_xc_N8_9 = document.querySelector(".img_xc_N8_9"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N8_9_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5";
img_xc_N8_9.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N8_9_img; //竖屏图片
}

//==

var img_xc_N9_1 = document.querySelector(".img_xc_N9_1"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N9_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfJFuMIOBtRtBYlVdCJFUQZ2ayhBpTosXIpf3oNFoMcRTGXQIrR9WLDU8rcOQcfsXCn3AqHNBx*17ECwTU5ddOY!/photolist&t=5";
img_xc_N9_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N9_1_img; //竖屏图片
}

//==

var img_xc_N9_2 = document.querySelector(".img_xc_N9_2"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N9_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqarqjsOpTzE7eM**4cf21H9zM5XXybqwSmnttzzmJu2GkPdSaHHKQHuyRH4veChL2ylPgh64hQR5qzYIIaLauk4!/photolist&t=5";
img_xc_N9_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N9_2_img; //竖屏图片
}

//==

var img_xc_N9_3 = document.querySelector(".img_xc_N9_3"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N9_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXBeVXdDd2RtAJfkiJDoKUXIpqu.BU8Tj2l3My9u5z8mthOyxtgC6Qh7UYsVItnDpo.iz0z*mbwt.TeRCS160.Q!/photolist&t=5";
img_xc_N9_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N9_3_img; //竖屏图片
}

//==

var img_xc_N9_4 = document.querySelector(".img_xc_N9_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N9_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUgEDb3reAKaNJ6yMo4*QOdPbDvX4sdZf36FlnWl9qaDEetbITTZMyfav*xhyjH3LCjehxvPeT6c8FGbW09ec1k!/photolist&t=5";
img_xc_N9_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N9_4_img; //竖屏图片
}

//==

var img_xc_N9_5 = document.querySelector(".img_xc_N9_5"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N9_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZo1vv8MJCub37ypr2qJACMRLW6gvPEkETyppHmVQU4QYt5ACEQBpKhbzRlfApOJRbq0DKbkfuD.xB9fOWs0KF0!/photolist&t=5";
img_xc_N9_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N9_5_img; //竖屏图片
}

//==

var img_xc_N9_6 = document.querySelector(".img_xc_N9_6"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N9_6_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbgk5cjtOsW942xrgmhyUVDjc0Np1K.CLQLhbr4Pzd4pZgv4cQ1Hie*StFve2t.Ds5AgcLQuz6CAFmUAvYFZJlw!/photolist&t=5";
img_xc_N9_6.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N9_6_img; //竖屏图片
}

//==

var img_xc_N9_7 = document.querySelector(".img_xc_N9_7"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N9_7_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW*g4RwRCZ9VPgyT2Y5YkvhsFXDXyKf91ag8wSwq9pEe5zncGo*IyFQEU92v5I2a9rnifXf0MeMzabnFd6A9oKs!/photolist&t=5";
img_xc_N9_7.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N9_7_img; //竖屏图片
}

//==

var img_xc_N9_8 = document.querySelector(".img_xc_N9_8"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N9_8_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTmBHj8IrQ*OhcUjixA4Cbnq6KWIlMv6DVEEHXXKSePStZYSP1O4RNQpm6W.xw2gsmpy5YcJ6VuTOpWhA.6U6iA!/photolist&t=5";
img_xc_N9_8.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N9_8_img; //竖屏图片
}

//==

var img_xc_N10_1 = document.querySelector(".img_xc_N10_1"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N10_1_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYkuxPKrAv29j2*kZltzMJlSXeNKi0s6sJ9b8JPN0Z6sC1N673fYVROk9aWc9BGtqjCuz5vQHCJiDYzyDHjOt2M!/photolist&t=5";
img_xc_N10_1.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N10_1_img; //竖屏图片
}

//==

var img_xc_N10_2 = document.querySelector(".img_xc_N10_2"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N10_2_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWAbrPXNSxGXPGE3yZE*8kReSD8rfcq803g15ppRpFvv7hLOfE..kPxRc..TTc64O2Oc24EmEmrl1N1zNtoqHBk!/photolist&t=5";
img_xc_N10_2.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N10_2_img; //竖屏图片
}

//==

var img_xc_N10_3 = document.querySelector(".img_xc_N10_3"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N10_3_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY1NjIbToLAvxXOoWX2MN.bkwMViVyaLn1tUzqYOwfgRV2MwJXUPlRChTt505v4fowHPyRI4T1ZlFlBIYdZTwD4!/photolist&t=5";
img_xc_N10_3.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N10_3_img; //竖屏图片
}

//==

var img_xc_N10_4 = document.querySelector(".img_xc_N10_4"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N10_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWgcshDSrUGiYz6hAnEWuj8yqzw6Rr5IoZQAlCnrzw3PvEGZDXO2mvVU2WLna5UIO7ojVYQrW3xpmGaSpigxUbM!/photolist&t=5";
img_xc_N10_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N10_4_img; //竖屏图片
}

//==

var img_xc_N10_5 = document.querySelector(".img_xc_N10_5"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N10_5_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdAgTGHzrVEdXzzJdyH0PPBBe9P07Ox5yngL8AdsStqbIo7Al5TQ7lsgoR.MCAxjknLS7tFchN*SoiIy3hixQjQ!/photolist&t=5";
img_xc_N10_5.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N10_5_img; //竖屏图片
}

//==

var img_xc_N10_6 = document.querySelector(".img_xc_N10_6"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N10_6_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqej.vJHGBhSXdTz.f.3imyNU21D2glY8*dO8VsCTkuX8JmoE1XmQD8jTmgeawPcX3CsBttWwc0awQiOiOzpMKOQ!/photolist&t=5";
img_xc_N10_6.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N10_6_img; //竖屏图片
}

//==

var img_xc_N10_7 = document.querySelector(".img_xc_N10_7"); // 获取点击图片类
// var video_oneimg_2022_3_4_video_Android = ""; //视频播放网址
var img_xc_N10_7_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdsVyRpqgcDehj98ifltI7BT1npmoXzz.aGWcwR8WJOViRF4DwyVGHlZpO5KieBaBV8mucwuARuq1RHtsl8jb9w!/photolist&t=5";
img_xc_N10_7.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_oneimg_2022_3_4_video_Android; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = img_xc_N10_7_img; //竖屏图片
}
// 内容区域事件绑定 end


