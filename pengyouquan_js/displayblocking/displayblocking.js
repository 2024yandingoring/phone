//默认数据
var display_head_http = "http://photogz.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1S9Wqv/bqQfVz5yrrGYSXMvKr.cqexPbNQCAHSMAoyyfvUZhk0l.8hp4aBdlmHD7uzVaLDZ*LCH3dfzT4rD*zWsE1krMvVBCar8aaBDtX*hCzriY4c!/mnull&bo=bQBqAG0AagADByI!&rf=photolist&t=5";
var display_id_text = "言定";

// 【暂存】10个数据缓存带 用来凑10个数据 begin
// 【暂存】10个数据缓存带 用来凑10个数据 end

// 10个数据缓存带 begin 【5S缓存区】

setTimeout(function () {
    //默认区，5S缓存显示所有同类盒子
    var display_block_5S = document.getElementsByClassName("display_block_5S"); //li标签主盒子
    var display_head_xc_img_5S = document.getElementsByClassName("display_head_xc_img_5S"); //头像
    var display_id_xc_img_5S = document.getElementsByClassName("display_id_xc_img_5S"); //名字

    for (var display_block_5S_i = 0; display_block_5S_i < display_block_5S.length; display_block_5S_i++) { // 遍历所有获取到的元素
        display_block_5S[display_block_5S_i].style.display = "block";
        // display_block_5S[8].style.display = "block";
    }

    for (var display_head_xc_img_5S_i = 0; display_head_xc_img_5S_i < display_head_xc_img_5S.length; display_head_xc_img_5S_i++) { // 遍历所有获取到的元素
        display_head_xc_img_5S[display_head_xc_img_5S_i].src = display_head_http;
    }

    for (var display_id_xc_img_5S_i = 0; display_id_xc_img_5S_i < display_id_xc_img_5S.length; display_id_xc_img_5S_i++) { // 遍历所有获取到的元素
        display_id_xc_img_5S[display_id_xc_img_5S_i].innerHTML = display_id_text;
    }

    //==

    //类名区
    var display_text_xc_img_n2 = document.querySelector(".display_text_xc_img_n2"); //内容文本
    //图片区域
    var display_img_1 = document.querySelector(".display_img_1"); //图片
    var display_img_2 = document.querySelector(".display_img_2"); //图片
    var display_img_3 = document.querySelector(".display_img_3"); //图片
    var display_img_4 = document.querySelector(".display_img_4"); //图片
    var display_img_5 = document.querySelector(".display_img_5"); //图片
    var display_img_6 = document.querySelector(".display_img_6"); //图片
    var display_img_7 = document.querySelector(".display_img_7"); //图片
    var display_img_8 = document.querySelector(".display_img_8"); //图片
    var display_img_8 = document.querySelector(".display_img_8"); //图片
    var display_img_9 = document.querySelector(".display_img_9"); //图片
    //功能区域
    display_text_xc_img_n2.innerHTML = "#大千世界的大学(2019-2022)";
    display_img_1.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5";
    display_img_2.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5";
    display_img_3.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5";
    display_img_4.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5";
    display_img_5.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5";
    display_img_6.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5";
    display_img_7.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5";
    display_img_8.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5";
    display_img_9.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5";

    //==

    //类名区
    var display_text_xc_img_n3 = document.querySelector(".display_text_xc_img_n3"); //内容文本
    //图片区域
    var display_img_N3_1 = document.querySelector(".display_img_N3_1"); //图片
    var display_img_N3_2 = document.querySelector(".display_img_N3_2"); //图片
    var display_img_N3_3 = document.querySelector(".display_img_N3_3"); //图片
    var display_img_N3_4 = document.querySelector(".display_img_N3_4"); //图片
    var display_img_N3_5 = document.querySelector(".display_img_N3_5"); //图片
    var display_img_N3_6 = document.querySelector(".display_img_N3_6"); //图片
    var display_img_N3_7 = document.querySelector(".display_img_N3_7"); //图片
    var display_img_N3_8 = document.querySelector(".display_img_N3_8"); //图片
    var display_img_N3_9 = document.querySelector(".display_img_N3_9"); //图片
    //功能区域
    display_text_xc_img_n3.innerHTML = "#大千世界的大学(2019-2022)";
    display_img_N3_1.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5";
    display_img_N3_2.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5";
    display_img_N3_3.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5";
    display_img_N3_4.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5";
    display_img_N3_5.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5";
    display_img_N3_6.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5";
    display_img_N3_7.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5";
    display_img_N3_8.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5";
    display_img_N3_9.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5";

    //==

    //类名区
    var display_text_xc_img_n4 = document.querySelector(".display_text_xc_img_n4"); //内容文本
    //图片区域
    var display_img_N4_1 = document.querySelector(".display_img_N4_1"); //图片
    var display_img_N4_2 = document.querySelector(".display_img_N4_2"); //图片
    var display_img_N4_3 = document.querySelector(".display_img_N4_3"); //图片
    var display_img_N4_4 = document.querySelector(".display_img_N4_4"); //图片
    var display_img_N4_5 = document.querySelector(".display_img_N4_5"); //图片
    var display_img_N4_6 = document.querySelector(".display_img_N4_6"); //图片
    var display_img_N4_7 = document.querySelector(".display_img_N4_7"); //图片
    var display_img_N4_8 = document.querySelector(".display_img_N4_8"); //图片
    var display_img_N4_9 = document.querySelector(".display_img_N4_9"); //图片
    //功能区域
    display_text_xc_img_n4.innerHTML = "#大千世界的大学(2019-2022)";
    display_img_N4_1.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5";
    display_img_N4_2.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5";
    display_img_N4_3.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5";
    display_img_N4_4.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5";
    display_img_N4_5.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5";
    display_img_N4_6.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N4_7.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5";
    display_img_N4_8.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5";
    display_img_N4_9.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5";

    //==

    //类名区
    var display_text_xc_img_n5 = document.querySelector(".display_text_xc_img_n5"); //内容文本
    //图片区域
    var display_img_N5_1 = document.querySelector(".display_img_N5_1"); //图片
    var display_img_N5_2 = document.querySelector(".display_img_N5_2"); //图片
    var display_img_N5_3 = document.querySelector(".display_img_N5_3"); //图片
    var display_img_N5_4 = document.querySelector(".display_img_N5_4"); //图片
    var display_img_N5_5 = document.querySelector(".display_img_N5_5"); //图片
    var display_img_N5_6 = document.querySelector(".display_img_N5_6"); //图片
    var display_img_N5_7 = document.querySelector(".display_img_N5_7"); //图片
    var display_img_N5_8 = document.querySelector(".display_img_N5_8"); //图片
    var display_img_N5_9 = document.querySelector(".display_img_N5_9"); //图片
    //功能区域
    display_text_xc_img_n5.innerHTML = "#大千世界的大学(2019-2022)";
    display_img_N5_1.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5";
    display_img_N5_2.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5";
    display_img_N5_3.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5";
    display_img_N5_4.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5";
    display_img_N5_5.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5";
    display_img_N5_6.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N5_7.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5";
    display_img_N5_8.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5";
    display_img_N5_9.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5";

    //==

    //类名区
    var display_text_xc_img_n6 = document.querySelector(".display_text_xc_img_n6"); //内容文本
    //图片区域
    var display_img_N6_1 = document.querySelector(".display_img_N6_1"); //图片
    var display_img_N6_2 = document.querySelector(".display_img_N6_2"); //图片
    var display_img_N6_3 = document.querySelector(".display_img_N6_3"); //图片
    var display_img_N6_4 = document.querySelector(".display_img_N6_4"); //图片
    var display_img_N6_5 = document.querySelector(".display_img_N6_5"); //图片
    var display_img_N6_6 = document.querySelector(".display_img_N6_6"); //图片
    var display_img_N6_7 = document.querySelector(".display_img_N6_7"); //图片
    var display_img_N6_8 = document.querySelector(".display_img_N6_8"); //图片
    var display_img_N6_9 = document.querySelector(".display_img_N6_9"); //图片
    //功能区域
    display_text_xc_img_n6.innerHTML = "#大千世界的大学(2019-2022)";
    display_img_N6_1.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N6_2.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N6_3.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N6_4.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N6_5.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N6_6.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N6_7.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N6_8.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N6_9.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";

    //==

    //类名区
    var display_text_xc_img_n7 = document.querySelector(".display_text_xc_img_n7"); //内容文本
    //图片区域
    var display_img_N7_1 = document.querySelector(".display_img_N7_1"); //图片
    var display_img_N7_2 = document.querySelector(".display_img_N7_2"); //图片
    var display_img_N7_3 = document.querySelector(".display_img_N7_3"); //图片
    var display_img_N7_4 = document.querySelector(".display_img_N7_4"); //图片
    var display_img_N7_5 = document.querySelector(".display_img_N7_5"); //图片
    var display_img_N7_6 = document.querySelector(".display_img_N7_6"); //图片
    var display_img_N7_7 = document.querySelector(".display_img_N7_7"); //图片
    //功能区域
    display_text_xc_img_n7.innerHTML = "#大千世界的大学(2019-2022)";
    display_img_N7_1.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sbvsj9BntS55zzI4*MvNmsMyG3ac*mNcLqQYuItNmIVVYv6unTTlSk.amLDfG0CxTEwElPrZUhDmQBIvefGGbao!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N7_2.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSWh9tayOu3B29tatnlnh2QhhMrueZh9qEYbF7yI1yKhVwUZ*xwD.IYA78FZ5XIzyFc9riUSSUPyC1O.ya3sbXc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N7_3.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZxv1aIscB1cjen*S8uIv6lfj.b5uyiYXek*Rs3WbfPeCkDQisCNid22a0VNXieY1xrvopryVGZBG.N3ZMusmHA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N7_4.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV71SKfkAQt2GQD.vBixXcYPVldXkO5j0ON5DQ2cV3edwhgf7xtRs2Xs.ZrAFB*Uf8bU1PZEqwJ8p2qkY3lV70A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N7_5.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfEhhaU2XYCz8lKQeiPfOCNfleUi6TJeaxeUq2FTIyWxsKfs.UWHa4L3LtV4*2oWWByyPrvSPTjVOH0Sn*U6Hew!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N7_6.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbwMbTXsuPsSTeicv3XQKihAEW0VaprbdcefSl2VIe4t9nJRQTryse2SULNu14UZJ2fGH.P5ZN6Ljf1TUvnKmJY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N7_7.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ9zmmcgtjDWaDxlzRZDu*yvzdxvwKd.xL1h98fn18WByxOOS583nrJKEvM.HpkKG7fjzbN8SXKa.ybnwwk1J2A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";

    //==

    //类名区
    var display_text_xc_img_n8 = document.querySelector(".display_text_xc_img_n8"); //内容文本
    //图片区域
    var display_img_N8_1 = document.querySelector(".display_img_N8_1"); //图片
    var display_img_N8_2 = document.querySelector(".display_img_N8_2"); //图片
    var display_img_N8_3 = document.querySelector(".display_img_N8_3"); //图片
    var display_img_N8_4 = document.querySelector(".display_img_N8_4"); //图片
    var display_img_N8_5 = document.querySelector(".display_img_N8_5"); //图片
    var display_img_N8_6 = document.querySelector(".display_img_N8_6"); //图片
    var display_img_N8_7 = document.querySelector(".display_img_N8_7"); //图片
    var display_img_N8_8 = document.querySelector(".display_img_N8_8"); //图片
    var display_img_N8_9 = document.querySelector(".display_img_N8_9"); //图片
    //功能区域
    display_text_xc_img_n8.innerHTML = "#书比人高的高中(2016-2019)";
    display_img_N8_1.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N8_2.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N8_3.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N8_4.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N8_5.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N8_6.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N8_7.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N8_8.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N8_9.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";

    //==

    //类名区
    var display_text_xc_img_n9 = document.querySelector(".display_text_xc_img_n9"); //内容文本
    //图片区域
    var display_img_N9_1 = document.querySelector(".display_img_N9_1"); //图片
    var display_img_N9_2 = document.querySelector(".display_img_N9_2"); //图片
    var display_img_N9_3 = document.querySelector(".display_img_N9_3"); //图片
    var display_img_N9_4 = document.querySelector(".display_img_N9_4"); //图片
    var display_img_N9_5 = document.querySelector(".display_img_N9_5"); //图片
    var display_img_N9_6 = document.querySelector(".display_img_N9_6"); //图片
    var display_img_N9_7 = document.querySelector(".display_img_N9_7"); //图片
    var display_img_N9_8 = document.querySelector(".display_img_N9_8"); //图片
    //功能区域
    display_text_xc_img_n9.innerHTML = "#书比人高的高中(2016-2019)";
    display_img_N9_1.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRx5WW6ySOzfpKBb*upHrjo8uCeTQoaZTuKEX*nhOH4X60TVWk99XPrFNE*BL98IyBe6YFMOTpiYcrI34.O2M5w!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N9_2.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUE7IyLf5bvOjgAXoyhieQY9lDa1gRiHXd4vC2tmTmrSPW.SPd84yI6lpmR.1AYU*ZYphj99YeM4kOF0U2S9iwU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N9_3.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRBU*PVnrIpkYf7axo4xaOZyBXuza4*3OfQY1hECRsN9W0ZFEEIfK8dp3HdCM4ev5ksgMQoPu4X*Bs8DeoQczow!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N9_4.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSAZ.jptery6KUOgKegAeGzexuqfdA8igAFP*23OiC4iHZuGAetb5PNW0slKOHG9iQm36s727HXbbiG6WDI3zGI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N9_5.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfL7yVy*1FOBWrr61CIlyYq.rXR3qJ7mlAZ7orobY3vQPm8LZ2YE01HjaKdyVbzfbXw.k7u66XBBZVXGXPn45cc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N9_6.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdN8htaPvPykb9ZVlhSoPMfdc7S*C*vT5XjnE1s3OagSaFoQBTSUpzncUCIyEPlS0oJx9EN7yYomrPj.AO7f3TI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N9_7.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Scf..thGmXCm8pmdPgqqa*P2GXH6IuIBFggpoWw9iMqFssUMXc1XWOhfxWZGbIzp6WDrSgoh1pfVB.q5wZB1MGg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N9_8.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STTS3HbmDlB0PNyBrxJWtA89CmLkT2AQkHbvsJsvu5pNSvEMEg9totT4M5ZyelqPw2r6E3NUvieOU5spSUy8d8E!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";

    //==

    //类名区
    var display_text_xc_img_n10 = document.querySelector(".display_text_xc_img_n10"); //内容文本
    //图片区域
    var display_img_N10_1 = document.querySelector(".display_img_N10_1"); //图片
    var display_img_N10_2 = document.querySelector(".display_img_N10_2"); //图片
    var display_img_N10_3 = document.querySelector(".display_img_N10_3"); //图片
    var display_img_N10_4 = document.querySelector(".display_img_N10_4"); //图片
    var display_img_N10_5 = document.querySelector(".display_img_N10_5"); //图片
    var display_img_N10_6 = document.querySelector(".display_img_N10_6"); //图片
    var display_img_N10_7 = document.querySelector(".display_img_N10_7"); //图片
    //功能区域
    display_text_xc_img_n10.innerHTML = "#一锅大家族的亲人(出生开始)";
    display_img_N10_1.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSqbdqPMUT3BC9XeSIuyies6DmgAeTvzzw6BrQD4YnczsFPcLYPbM.0UItxoQTMLq2amgL2MnuB95x8BnDp.Ng0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N10_2.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXgnJHdQOWBJwiXP7Np3lLCqxMWKcGn*O3g5pndIsjKymIhO3NHrhwtD*0ldttvZTgYiJ5tiKnA9Kv*3oB..7U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N10_3.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXlsYD4criddDkyH.9LZlQ6X0eCw662xVbK0S4CjNzi3hgqqpY3JX3sniwq1NHoV2MrISpIRf1H212zhJ9T2e78!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N10_4.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSNkr4qCYtqiYpEywcFDV63Vb0ECH5U1PAotdWMcjckSxWvJtecTHxWm0*AGYhUY6jK6IFnjL5o7WAAeMvaeKgg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N10_5.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se8M3KBIBEWMjqD*2rjEQvdA1NixDFNWt9pIlOKIuMeAvZQ.Z9Dks30hAzX668Jmdrm7FdAPT0MndqNX1XpvQUQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N10_6.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7AFQVYXQPAKtKBgooAw45lvu36DM.XRoSX5.CwjEaygOJRr*rLnLIqIMfJQnI7kcpOP5.jt5jqf0iUcwMvaOk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";
    display_img_N10_7.src = "http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWtP1uZFmBECG0uNea2jMLW.u3vwZqbFLQfls439ZcEN7dfA5C9Orviz9JPQtbm*hMTs2dFUO4LVYTNjpj7ZNSU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5";

    //==

    //类名区
    var display_text_xc_img_n3 = document.querySelector(".display_text_xc_img_n3"); //内容文本
    //图片区域
    var display_img_N3_1 = document.querySelector(".display_img_N3_1"); //图片
    var display_img_N3_2 = document.querySelector(".display_img_N3_2"); //图片
    var display_img_N3_3 = document.querySelector(".display_img_N3_3"); //图片
    var display_img_N3_4 = document.querySelector(".display_img_N3_4"); //图片
    var display_img_N3_5 = document.querySelector(".display_img_N3_5"); //图片
    var display_img_N3_6 = document.querySelector(".display_img_N3_6"); //图片
    var display_img_N3_7 = document.querySelector(".display_img_N3_7"); //图片
    var display_img_N3_8 = document.querySelector(".display_img_N3_8"); //图片
    var display_img_N3_9 = document.querySelector(".display_img_N3_9"); //图片
    //功能区域
    display_text_xc_img_n3.innerHTML = "#大千世界的大学(2019-2022)";
    // display_img_N3_1.src = "";
    // display_img_N3_2.src = "";
    // display_img_N3_3.src = "";
    // display_img_N3_4.src = "";
    // display_img_N3_5.src = "";
    // display_img_N3_6.src = "";
    // display_img_N3_7.src = "";
    // display_img_N3_8.src = "";
    // display_img_N3_9.src = "";
}, 5000); //1000=1s
clearInterval();
// 10个数据缓存带 end

// 10个数据缓存带 begin
// 10个数据缓存带 end
