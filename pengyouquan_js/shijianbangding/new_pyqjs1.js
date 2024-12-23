//var html_ping = document.querySelector(".html_ping"); //获取传替网址类
var four_box = document.querySelector(".four_box"); //获取内置浏览器主盒子类
var four_box_ifa = document.querySelector(".four_box_ifa"); //获取ifa浏览器类
var four_box_img = document.querySelector(".four_box_img"); //获取img内置横屏图片类
var four_box_suimg = document.querySelector(".four_box_suimg"); //获取img内置竖屏图片类

// 内容区域事件绑定 begin
var video_2024_12_16 = document.querySelector(".video_2024_12_16"); //获取播放视频图片类
var video_2024_12_16_video = "https://v.m.chenzhongtech.com/fw/photo/3x5qrzt6nymnm4u?cc=share_wxms&followRefer=151&shareMethod=VIDEO&docId=10&kpn=KUAISHOU&subBiz=BROWSE_SLIDE_PHOTO&photoId=3x5qrzt6nymnm4u&shareId=18192560931111&shareToken=X9lx0RFdPFYV1IX&shareResourceType=PHOTO_SELF&userId=3xfnf5ngb82i22c&shareType=2&et=1_a%2F2007885683345745825_p0&shareMode=APP&efid=3xfnf5ngb82i22c&originShareId=18192560931111&appType=21&shareObjectId=5216294421307821950&shareUrlOpened=0&timestamp=1734317259140";
video_2024_12_16.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "block"; //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "none"; //竖屏图片
    four_box_ifa.src = video_2024_12_16_video; //视频
    // four_box_img.src = ; //横屏图片
    // four_box_suimg.src = ; //竖屏图片
}

//==

var video_2024_12_09 = document.querySelector(".video_2024_12_09"); //获取播放视频图片类
var video_2024_12_09_video = "https://v.m.chenzhongtech.com/fw/photo/3xpdru63j8vua7w?cc=share_wxms&followRefer=151&shareMethod=VIDEO&docId=10&kpn=KUAISHOU&subBiz=BROWSE_SLIDE_PHOTO&photoId=3xpdru63j8vua7w&shareId=18188773806557&shareToken=X1flqjptP2171YJ&userId=3xfnf5ngb82i22c&shareType=2&et=1_a%2F2004063972582783490_p0&shareMode=APP&efid=3xfnf5ngb82i22c&originShareId=18188773806557&appType=21&shareObjectId=5208413120421207721&shareUrlOpened=0&timestamp=1734015170358";
video_2024_12_09.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "block"; //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "none"; //竖屏图片
    four_box_ifa.src = video_2024_12_09_video; //视频
    // four_box_img.src = ; //横屏图片
    // four_box_suimg.src = ; //竖屏图片
}

//==

var video_2024_12_01 = document.querySelector(".video_2024_12_01"); //获取播放视频图片类
var video_2024_12_01_video = "https://v.m.chenzhongtech.com/fw/long-video/3x7b3cc77a2d4me?cc=share_wxms&followRefer=151&shareMethod=VIDEO&docId=10&kpn=KUAISHOU&subBiz=BROWSE_SLIDE_PHOTO&photoId=3x7b3cc77a2d4me&shareId=18192338826631&shareToken=X-7HbkPyd2VN21T7&shareResourceType=PHOTO_SELF&userId=3xfnf5ngb82i22c&shareType=2&et=1_a%2F2004074787803123090_p0&shareMode=APP&efid=3xfnf5ngb82i22c&originShareId=18192338826631&appType=21&shareObjectId=5204190998218774687&shareUrlOpened=0&timestamp=1734271757946";
video_2024_12_01.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "block"; //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "none"; //竖屏图片
    four_box_ifa.src = video_2024_12_01_video; //视频
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
var oneimg_2022_3_4_img = "https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQCCD8qBqLWoVkRex6rAFKnOW3nKoYiO7v2eo38V*1aEXMfzid3iYmdsHOc5kjpSqbsahAhNvnlN0kI6*TPGaw4!/photolist&t=5";
oneimg_2022_3_4.onclick = function(){
    four_box.style.display = "block";
    four_box_ifa.style.display = "none";  //视频
    four_box_img.style.display = "none"; //横屏图片
    four_box_suimg.style.display = "block"; //竖屏图片
    // four_box_ifa.src = video_2024_12_01_video; //视频
    //four_box_img.src = ; //横屏图片
    four_box_suimg.src = oneimg_2022_3_4_img; //竖屏图片
}
// 内容区域事件绑定 end

// 【暂存】10个数据缓存带 用来凑10个数据 begin
// 【暂存】10个数据缓存带 用来凑10个数据 end

// 10个数据缓存带 begin
// 10个数据缓存带 end

