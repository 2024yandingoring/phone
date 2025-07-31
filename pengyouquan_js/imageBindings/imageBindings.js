// 图片绑定专用文件
function rebindImageEvents() {
    bindElement('.img_XC_N1_9', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SaowfYwDBs20WREoZWlDcqHbqXhHUiO9Xpm1ppsqZMsFMS65N1eAGSjeb99PLAKWIKC.08Z08hXJ0Tkc38CdIww!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsicjmqSEDTVIxqJ*qRr6f6qCXsPyk.O2nAZ5TKPIZTatobzasXsepGRm1W27cDOTESsubuQ7aS4NDsB9eIKr4!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYMXPmkdL6Zps9QmcqXDt9gF4LYoytu1HQcdgM9qENajQ1RYrXLQmXT.a2vBIv6t*PjfH21llbJCgDqL4UT48lI!/mnull&bo=sACyALAAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SeA5OXWdCnfRAYY471J0Vw8ikujeI9bZrkZV7d75gK5ssK9ea7LpxjfUQdbjewykXhkokcOgxNH0nJlq6UEUg40!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbL0uVH67NSxPzKGRGVl6VW*7PirxnuCCq8*FpWZ*cHbgslK25dpBvZS8ojXdBiGRQ8CIVARxTAasjoAsRL*ABk!/mnull&bo=sACxALAAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STaYQQuJWuj1CtJwYPFA1xH8WZA3E7y*uayFmm5XzcpZUNVESmu1SiYISHfAVex*CKQ3Yk*ViFY*ii02RksgM.I!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STS2IjqYmmj*MwcG8gd1gQBNt0v7x6ttrNbv4BGux8fD1.WPmTwt.fh19bWKQony2KWUEtOYRa9xVV0Vjv3VxJs!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STjoFlSXmwPuQ4T*ghuPxL5uWyhvfmJXJw3o7IzHbTYTVa8Fn2P6I*PlnLy9Gc1vJFL9*KnTjSsp5Poahk0ytxg!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYHMkYzILF2BJQ70jmmA1oSolUiq5*UUqrSATUbAulGyimIUf9DGwrV4Dk2tPRnIxVrqXRckn.X9MOtF9Gz01zU!/mnull&bo=qwCrAKsAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg9')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N1_8', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SaowfYwDBs20WREoZWlDcqHbqXhHUiO9Xpm1ppsqZMsFMS65N1eAGSjeb99PLAKWIKC.08Z08hXJ0Tkc38CdIww!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsicjmqSEDTVIxqJ*qRr6f6qCXsPyk.O2nAZ5TKPIZTatobzasXsepGRm1W27cDOTESsubuQ7aS4NDsB9eIKr4!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYMXPmkdL6Zps9QmcqXDt9gF4LYoytu1HQcdgM9qENajQ1RYrXLQmXT.a2vBIv6t*PjfH21llbJCgDqL4UT48lI!/mnull&bo=sACyALAAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SeA5OXWdCnfRAYY471J0Vw8ikujeI9bZrkZV7d75gK5ssK9ea7LpxjfUQdbjewykXhkokcOgxNH0nJlq6UEUg40!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbL0uVH67NSxPzKGRGVl6VW*7PirxnuCCq8*FpWZ*cHbgslK25dpBvZS8ojXdBiGRQ8CIVARxTAasjoAsRL*ABk!/mnull&bo=sACxALAAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STaYQQuJWuj1CtJwYPFA1xH8WZA3E7y*uayFmm5XzcpZUNVESmu1SiYISHfAVex*CKQ3Yk*ViFY*ii02RksgM.I!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STS2IjqYmmj*MwcG8gd1gQBNt0v7x6ttrNbv4BGux8fD1.WPmTwt.fh19bWKQony2KWUEtOYRa9xVV0Vjv3VxJs!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STjoFlSXmwPuQ4T*ghuPxL5uWyhvfmJXJw3o7IzHbTYTVa8Fn2P6I*PlnLy9Gc1vJFL9*KnTjSsp5Poahk0ytxg!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYHMkYzILF2BJQ70jmmA1oSolUiq5*UUqrSATUbAulGyimIUf9DGwrV4Dk2tPRnIxVrqXRckn.X9MOtF9Gz01zU!/mnull&bo=qwCrAKsAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg8')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N1_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SaowfYwDBs20WREoZWlDcqHbqXhHUiO9Xpm1ppsqZMsFMS65N1eAGSjeb99PLAKWIKC.08Z08hXJ0Tkc38CdIww!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsicjmqSEDTVIxqJ*qRr6f6qCXsPyk.O2nAZ5TKPIZTatobzasXsepGRm1W27cDOTESsubuQ7aS4NDsB9eIKr4!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYMXPmkdL6Zps9QmcqXDt9gF4LYoytu1HQcdgM9qENajQ1RYrXLQmXT.a2vBIv6t*PjfH21llbJCgDqL4UT48lI!/mnull&bo=sACyALAAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SeA5OXWdCnfRAYY471J0Vw8ikujeI9bZrkZV7d75gK5ssK9ea7LpxjfUQdbjewykXhkokcOgxNH0nJlq6UEUg40!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbL0uVH67NSxPzKGRGVl6VW*7PirxnuCCq8*FpWZ*cHbgslK25dpBvZS8ojXdBiGRQ8CIVARxTAasjoAsRL*ABk!/mnull&bo=sACxALAAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STaYQQuJWuj1CtJwYPFA1xH8WZA3E7y*uayFmm5XzcpZUNVESmu1SiYISHfAVex*CKQ3Yk*ViFY*ii02RksgM.I!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STS2IjqYmmj*MwcG8gd1gQBNt0v7x6ttrNbv4BGux8fD1.WPmTwt.fh19bWKQony2KWUEtOYRa9xVV0Vjv3VxJs!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STjoFlSXmwPuQ4T*ghuPxL5uWyhvfmJXJw3o7IzHbTYTVa8Fn2P6I*PlnLy9Gc1vJFL9*KnTjSsp5Poahk0ytxg!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYHMkYzILF2BJQ70jmmA1oSolUiq5*UUqrSATUbAulGyimIUf9DGwrV4Dk2tPRnIxVrqXRckn.X9MOtF9Gz01zU!/mnull&bo=qwCrAKsAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N1_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SaowfYwDBs20WREoZWlDcqHbqXhHUiO9Xpm1ppsqZMsFMS65N1eAGSjeb99PLAKWIKC.08Z08hXJ0Tkc38CdIww!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsicjmqSEDTVIxqJ*qRr6f6qCXsPyk.O2nAZ5TKPIZTatobzasXsepGRm1W27cDOTESsubuQ7aS4NDsB9eIKr4!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYMXPmkdL6Zps9QmcqXDt9gF4LYoytu1HQcdgM9qENajQ1RYrXLQmXT.a2vBIv6t*PjfH21llbJCgDqL4UT48lI!/mnull&bo=sACyALAAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SeA5OXWdCnfRAYY471J0Vw8ikujeI9bZrkZV7d75gK5ssK9ea7LpxjfUQdbjewykXhkokcOgxNH0nJlq6UEUg40!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbL0uVH67NSxPzKGRGVl6VW*7PirxnuCCq8*FpWZ*cHbgslK25dpBvZS8ojXdBiGRQ8CIVARxTAasjoAsRL*ABk!/mnull&bo=sACxALAAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STaYQQuJWuj1CtJwYPFA1xH8WZA3E7y*uayFmm5XzcpZUNVESmu1SiYISHfAVex*CKQ3Yk*ViFY*ii02RksgM.I!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STS2IjqYmmj*MwcG8gd1gQBNt0v7x6ttrNbv4BGux8fD1.WPmTwt.fh19bWKQony2KWUEtOYRa9xVV0Vjv3VxJs!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STjoFlSXmwPuQ4T*ghuPxL5uWyhvfmJXJw3o7IzHbTYTVa8Fn2P6I*PlnLy9Gc1vJFL9*KnTjSsp5Poahk0ytxg!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYHMkYzILF2BJQ70jmmA1oSolUiq5*UUqrSATUbAulGyimIUf9DGwrV4Dk2tPRnIxVrqXRckn.X9MOtF9Gz01zU!/mnull&bo=qwCrAKsAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N1_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SaowfYwDBs20WREoZWlDcqHbqXhHUiO9Xpm1ppsqZMsFMS65N1eAGSjeb99PLAKWIKC.08Z08hXJ0Tkc38CdIww!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsicjmqSEDTVIxqJ*qRr6f6qCXsPyk.O2nAZ5TKPIZTatobzasXsepGRm1W27cDOTESsubuQ7aS4NDsB9eIKr4!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYMXPmkdL6Zps9QmcqXDt9gF4LYoytu1HQcdgM9qENajQ1RYrXLQmXT.a2vBIv6t*PjfH21llbJCgDqL4UT48lI!/mnull&bo=sACyALAAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SeA5OXWdCnfRAYY471J0Vw8ikujeI9bZrkZV7d75gK5ssK9ea7LpxjfUQdbjewykXhkokcOgxNH0nJlq6UEUg40!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbL0uVH67NSxPzKGRGVl6VW*7PirxnuCCq8*FpWZ*cHbgslK25dpBvZS8ojXdBiGRQ8CIVARxTAasjoAsRL*ABk!/mnull&bo=sACxALAAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STaYQQuJWuj1CtJwYPFA1xH8WZA3E7y*uayFmm5XzcpZUNVESmu1SiYISHfAVex*CKQ3Yk*ViFY*ii02RksgM.I!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STS2IjqYmmj*MwcG8gd1gQBNt0v7x6ttrNbv4BGux8fD1.WPmTwt.fh19bWKQony2KWUEtOYRa9xVV0Vjv3VxJs!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STjoFlSXmwPuQ4T*ghuPxL5uWyhvfmJXJw3o7IzHbTYTVa8Fn2P6I*PlnLy9Gc1vJFL9*KnTjSsp5Poahk0ytxg!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYHMkYzILF2BJQ70jmmA1oSolUiq5*UUqrSATUbAulGyimIUf9DGwrV4Dk2tPRnIxVrqXRckn.X9MOtF9Gz01zU!/mnull&bo=qwCrAKsAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N1_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SaowfYwDBs20WREoZWlDcqHbqXhHUiO9Xpm1ppsqZMsFMS65N1eAGSjeb99PLAKWIKC.08Z08hXJ0Tkc38CdIww!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsicjmqSEDTVIxqJ*qRr6f6qCXsPyk.O2nAZ5TKPIZTatobzasXsepGRm1W27cDOTESsubuQ7aS4NDsB9eIKr4!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYMXPmkdL6Zps9QmcqXDt9gF4LYoytu1HQcdgM9qENajQ1RYrXLQmXT.a2vBIv6t*PjfH21llbJCgDqL4UT48lI!/mnull&bo=sACyALAAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SeA5OXWdCnfRAYY471J0Vw8ikujeI9bZrkZV7d75gK5ssK9ea7LpxjfUQdbjewykXhkokcOgxNH0nJlq6UEUg40!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbL0uVH67NSxPzKGRGVl6VW*7PirxnuCCq8*FpWZ*cHbgslK25dpBvZS8ojXdBiGRQ8CIVARxTAasjoAsRL*ABk!/mnull&bo=sACxALAAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STaYQQuJWuj1CtJwYPFA1xH8WZA3E7y*uayFmm5XzcpZUNVESmu1SiYISHfAVex*CKQ3Yk*ViFY*ii02RksgM.I!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STS2IjqYmmj*MwcG8gd1gQBNt0v7x6ttrNbv4BGux8fD1.WPmTwt.fh19bWKQony2KWUEtOYRa9xVV0Vjv3VxJs!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STjoFlSXmwPuQ4T*ghuPxL5uWyhvfmJXJw3o7IzHbTYTVa8Fn2P6I*PlnLy9Gc1vJFL9*KnTjSsp5Poahk0ytxg!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYHMkYzILF2BJQ70jmmA1oSolUiq5*UUqrSATUbAulGyimIUf9DGwrV4Dk2tPRnIxVrqXRckn.X9MOtF9Gz01zU!/mnull&bo=qwCrAKsAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N1_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SaowfYwDBs20WREoZWlDcqHbqXhHUiO9Xpm1ppsqZMsFMS65N1eAGSjeb99PLAKWIKC.08Z08hXJ0Tkc38CdIww!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsicjmqSEDTVIxqJ*qRr6f6qCXsPyk.O2nAZ5TKPIZTatobzasXsepGRm1W27cDOTESsubuQ7aS4NDsB9eIKr4!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYMXPmkdL6Zps9QmcqXDt9gF4LYoytu1HQcdgM9qENajQ1RYrXLQmXT.a2vBIv6t*PjfH21llbJCgDqL4UT48lI!/mnull&bo=sACyALAAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SeA5OXWdCnfRAYY471J0Vw8ikujeI9bZrkZV7d75gK5ssK9ea7LpxjfUQdbjewykXhkokcOgxNH0nJlq6UEUg40!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbL0uVH67NSxPzKGRGVl6VW*7PirxnuCCq8*FpWZ*cHbgslK25dpBvZS8ojXdBiGRQ8CIVARxTAasjoAsRL*ABk!/mnull&bo=sACxALAAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STaYQQuJWuj1CtJwYPFA1xH8WZA3E7y*uayFmm5XzcpZUNVESmu1SiYISHfAVex*CKQ3Yk*ViFY*ii02RksgM.I!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STS2IjqYmmj*MwcG8gd1gQBNt0v7x6ttrNbv4BGux8fD1.WPmTwt.fh19bWKQony2KWUEtOYRa9xVV0Vjv3VxJs!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STjoFlSXmwPuQ4T*ghuPxL5uWyhvfmJXJw3o7IzHbTYTVa8Fn2P6I*PlnLy9Gc1vJFL9*KnTjSsp5Poahk0ytxg!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYHMkYzILF2BJQ70jmmA1oSolUiq5*UUqrSATUbAulGyimIUf9DGwrV4Dk2tPRnIxVrqXRckn.X9MOtF9Gz01zU!/mnull&bo=qwCrAKsAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N1_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SaowfYwDBs20WREoZWlDcqHbqXhHUiO9Xpm1ppsqZMsFMS65N1eAGSjeb99PLAKWIKC.08Z08hXJ0Tkc38CdIww!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsicjmqSEDTVIxqJ*qRr6f6qCXsPyk.O2nAZ5TKPIZTatobzasXsepGRm1W27cDOTESsubuQ7aS4NDsB9eIKr4!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYMXPmkdL6Zps9QmcqXDt9gF4LYoytu1HQcdgM9qENajQ1RYrXLQmXT.a2vBIv6t*PjfH21llbJCgDqL4UT48lI!/mnull&bo=sACyALAAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SeA5OXWdCnfRAYY471J0Vw8ikujeI9bZrkZV7d75gK5ssK9ea7LpxjfUQdbjewykXhkokcOgxNH0nJlq6UEUg40!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbL0uVH67NSxPzKGRGVl6VW*7PirxnuCCq8*FpWZ*cHbgslK25dpBvZS8ojXdBiGRQ8CIVARxTAasjoAsRL*ABk!/mnull&bo=sACxALAAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STaYQQuJWuj1CtJwYPFA1xH8WZA3E7y*uayFmm5XzcpZUNVESmu1SiYISHfAVex*CKQ3Yk*ViFY*ii02RksgM.I!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STS2IjqYmmj*MwcG8gd1gQBNt0v7x6ttrNbv4BGux8fD1.WPmTwt.fh19bWKQony2KWUEtOYRa9xVV0Vjv3VxJs!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STjoFlSXmwPuQ4T*ghuPxL5uWyhvfmJXJw3o7IzHbTYTVa8Fn2P6I*PlnLy9Gc1vJFL9*KnTjSsp5Poahk0ytxg!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYHMkYzILF2BJQ70jmmA1oSolUiq5*UUqrSATUbAulGyimIUf9DGwrV4Dk2tPRnIxVrqXRckn.X9MOtF9Gz01zU!/mnull&bo=qwCrAKsAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N1_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWsMRfoeq*lNc*UJTi4Nu1jINKohq2qYd2eyDoPh6.YPMpiV6H.n2*h9E0atxlRzWWMQ3FiGTl0KYYHjMtNocgs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYV5FmFoZ.cUypEMQtMh2lxXDIXkFGvEAiAD4niCh9fGCq5VB2jSyanoOiohgo1SKABE*YeuVteE2IgTztp0XgU!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRdN*ej3ItwSUH8bi79ZVxhm7AkgYo3d0rjjWHn8dLTnTxe4AYS2jwd*4.IFrlriCxaiUad9mS01Po1vasfaWyo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX.HW3I.gOo*4VL7lPSc8*fGGvAi7lSIkSG87YxQ7tBdZKXTiGHDRbUCybGTRGNgKd0LZ6agM.GuBKZQkw6RD7E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqetU.Y0TEHdm9bIl51ouvJOo4ALg7TvNxGM8UynGX2mUSWeTLQ42AF1v8cu9jCgn.yjwklZ7k2HC4IiyH4RUwlo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeQTFq6txCFf5GgAsxj1i8DRqL4D2ZGj3QPtQJdhtJZ.uABUIDX4exfp6ztC5c*biL70aaCGcmhsVZZCk9s0zPw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ6llPeNIDriuCWptXv*F4gQs7CwfwgOm8NNC7omXZPI7hfgXG7.Bh48DQliyDK4s1BB9UP3HZpGwMDCxHLzaFY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYzSaaPHRoo7Iui7LOMLI7G3yU4IZnsiWyF6LZNbvfA5jDiIsJzkbBGQJRNKNa5cUjZPMB4NpSoTQxZ9E1h4tbA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLHuXtzH1XzLXkzkAb.kP6MliTqqM0vsVbgJucBeQMRFF95uGm2EKynVZgebKYINKxKqdOLbCtHxZX2PW4C8PE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SaowfYwDBs20WREoZWlDcqHbqXhHUiO9Xpm1ppsqZMsFMS65N1eAGSjeb99PLAKWIKC.08Z08hXJ0Tkc38CdIww!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsicjmqSEDTVIxqJ*qRr6f6qCXsPyk.O2nAZ5TKPIZTatobzasXsepGRm1W27cDOTESsubuQ7aS4NDsB9eIKr4!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYMXPmkdL6Zps9QmcqXDt9gF4LYoytu1HQcdgM9qENajQ1RYrXLQmXT.a2vBIv6t*PjfH21llbJCgDqL4UT48lI!/mnull&bo=sACyALAAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SeA5OXWdCnfRAYY471J0Vw8ikujeI9bZrkZV7d75gK5ssK9ea7LpxjfUQdbjewykXhkokcOgxNH0nJlq6UEUg40!/mnull&bo=sQCxALEAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbL0uVH67NSxPzKGRGVl6VW*7PirxnuCCq8*FpWZ*cHbgslK25dpBvZS8ojXdBiGRQ8CIVARxTAasjoAsRL*ABk!/mnull&bo=sACxALAAsQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STaYQQuJWuj1CtJwYPFA1xH8WZA3E7y*uayFmm5XzcpZUNVESmu1SiYISHfAVex*CKQ3Yk*ViFY*ii02RksgM.I!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STS2IjqYmmj*MwcG8gd1gQBNt0v7x6ttrNbv4BGux8fD1.WPmTwt.fh19bWKQony2KWUEtOYRa9xVV0Vjv3VxJs!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STjoFlSXmwPuQ4T*ghuPxL5uWyhvfmJXJw3o7IzHbTYTVa8Fn2P6I*PlnLy9Gc1vJFL9*KnTjSsp5Poahk0ytxg!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYHMkYzILF2BJQ70jmmA1oSolUiq5*UUqrSATUbAulGyimIUf9DGwrV4Dk2tPRnIxVrqXRckn.X9MOtF9Gz01zU!/mnull&bo=qwCrAKsAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N2_9', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg9')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N2_8', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg8')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N2_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N2_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N2_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N2_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N2_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N2_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N2_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZfgapq78*Mf3EjJwNNEgljtmCzDTpAUVIDmuO69cegIeS4vpVgdlkYn.Kee0uYqmvC8auLKCgxzHEkplBTMOUk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXjgkjNC4uAdFzVanEplNw.*vadFDr3RKBSNZvl8Q5XuRb*Vm8ssn36WOqSRurJLkL1C6sQTfwe*H9glKjdX.A4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVfcazpcr9TUAG20HUk3Xtx1e3KwU0WU1s6Oq1ZihcgXfWt9Sz6WlA3if7kF4aHzsILyQsrWvVyfQr0sI24FVIw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdqk*rixEyktbXep8jZtbKwS8KI*aKy52MaZVdG5YztdAh52aNLSnVmHTEzloFimW8736pDjV*d*00FJf.0QvgQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY2a4NJDWADTcWC.jGkFP6tbcYJegwrxdwSkuO93pxLek1*XhFlwg1mZnGdtRMVrvqYmrtVR7RPC4fzO76O00Ms!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYqlzzEp*FUGb68d5Un.zTbghU1fT9PfPJmPIozZEUtZBXTZSwcni5GQDOeutnztHjnGKp5IS7nmosZAsUykTzc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5qMmn4cIHe9zlf8NXnSLAjeIXL7Vybx2ytK73w61PUh4pZwsZm9yB0y6OYkvM3QgiTU.ac129g7kudSV.G3G4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUA2xN6ve9WhxNVLsEAYmDQYYE8u*Du6W2HPyU6dwJpNkTtRFhyCSlxoffYkbaINR5v.Y7uZF*L1AnOYjuojhW4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqb.5w6p4UWMc8dmZz0h7*Pgm0YE95Ynhs4CUnfRXi0oOvqgfgzwCQRjGNmGUEUxt1sDk3VnUf.j*GgYfuzkwaHY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfMqj3yVzehcqQxOyoV.DmwwcfVloysGTmmUBRqI1lnjRm.XeZAU3yTeOGI9T5K43ihjl42Xkr7meTEOMfNJKRw!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ST*TF*LAwnWU8gpy1KZyQUdqDNzXXUaW582DO7vKHtY.8Nan0rZOAWxfxOFrzvJsY6vB9c9i4aDoWRsCA5TBGLU!/mnull&bo=qACqAKgAqgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SScxppitv2Xn75c**XmLAw4Gj2pzE7PQ145yWMUK8aapOVAktUQm5d71buTLDQlIllNsQVg.EviU9YQ0VsN*EbY!/mnull&bo=qgCsAKoArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se73xsFDUIpLkIwpiOEbhkt4sMh1jUFsalUnSzMqGcmQPy.3TTDyPVOTR0RjqVX98oDjqwXjsPht3qxDhC5Qxxw!/mnull&bo=pQCnAKUApwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfsMA3DE1YxRQVySHRAXUpCQMj1bjm1b1hcZTrPZTvYa0XBu17*c488PxT9aY2rIdJg8YogUyL1nK.sCJaMqL38!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUaWezIRIA8GVHLB6.uVCPsRb.4sE0fpznHDebkBVdlvfI40c0KyORglhR6cYigt2NFa47xbOjj.J*IVeqNv4IY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STUsFuQFGCV3yrh1iio9V0*AQ7Rir7rh7uuw1xiomh5eVcTTfCQR6JbpMvYYkGp6ozYxd4BJgjE591pK7D1IRBA!/mnull&bo=rACrAKwAqwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQTEmebkPv7A3Czip4YItPBjGvIbHE9R0iIeIOTzMcGiRZwFy3UfMUva9TrTDsrAPf9Focsw6cPlxQZ7fEzLt3U!/mnull&bo=rACwAKwAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SU.Q5OG9OlPgjhdf40XJyXMoy7NSL7lpaI1t*EtBkomAGe*Ukk4Gyd1AXl*NXv2DF73zeme3pNUGVCj.FlnwHEc!/mnull&bo=rACuAKwArgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N3_9', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg9')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N3_8', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg8')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N3_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N3_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N3_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N3_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N3_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N3_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N3_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ4S2euhybQowj60A4exyF8bHqvtRPvV3g30X1mwD9.S*QPFoGJWOSuGTEH0MmVnjt25RAFkmkWb.SIaHfVd54k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqazBJxupel1COjaQUtNbw1Hwf0jShTyYzRKYbHxm.EftwJmqDQpO2jhdxmc*2NJrF9swUBbTHt4ky*elBfIbB.0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf2oRxa9GdtD2GNnnl1pdO3YJCg0GF2ykVBsfJMK*beuXwm2yto42UMWNETBrmYZYmIVXoiydgV3uXRmrZN9yOI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeeTmf5sSURRRN17CZZxvVLN00SbU60VVM*VoT75t*ctEVjIWi47A4G4jLxTci6vUOoodh8kMROGeedaNKVjUr0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqR25TCn9BBMbKmH9Ha2yLSr1DZhG*11XqPKG*2idfaIjlHSiQcnI8bwhW2ccDZFgyTKtTv*CNj9EGCNR.7UeNt0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX0fuLclK*tIRlkzAb0fOAdXaVH6K6z6Vro.iZGN2S2o9HExk114p38V1XcxTkVCVmNbfFVUShQ8j4UYV5ddA*s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXAKpnw7YXlD7X.RAZn5oV*NJbrzMLzh5*84FZbf6pB*jN328SHTgfCG3vQPABeAvGZnHOmtwHmhPDoYeOH4uMw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRtEG7a3SsgwJCCozN2BRyF9oLwlh4nKyfYh2hgYym71DhripUGlk9qKfi.pSiSgLUd2pUhod5C6V4l0t32JgVA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqSTLHjFyjW5jm*hHvEAvOgZhko657KetKa9Q9gxk0NMH7HfkihN3Ic80hWpqoUbYnrxCRY8i.QMN7N2ZRTqWjGs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCkLeURq.4oI2uM.MB6*946cgzAZGIT5u0K5aPnMvuKhxgDmMFcyFenkjdzCqNZSUPuujiKA7y0jB.N8SF*1NI!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWdASh2fGw0PsvwbxleoH3VCX860sJXZkutaHuSXL2hS7cDqtNBUGtTTaLm5SFH4hPNjeBepUQQUanNgt7bJqq4!/mnull&bo=qwCvAKsArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV6S6Xwwv6nVn3FtSdL369CRaajwNPcRK01GpSX7tboJOeGoreTl8bt45fA42Q1jCgjBjdEhxQDogI0D4PqQEX8!/mnull&bo=rQCwAK0AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYSL30SZQWCbIJwShZAiFi3*WffaAmosInmqZn*UezT6PCz9uTU3MoRFv9UbOL92Sq2dHLC1GbyoXTyzJt1I8UE!/mnull&bo=qwCsAKsArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQrlObCLtBCe18NGgaPB.kTlc7zE6HZM8CwoRYB14*wK7eHMED1vZLg4FLFf28uxSEGP5VfQuiJECb.Ejdtf69Q!/mnull&bo=rACtAKwArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se09Pf3gQaia7MKdnwDUejLtKJOreoa2evVgXMjbOv2*vkhdkYbY2seAiAKKWNCHMhhdCfrhzzM7rzVkbnSXEUs!/mnull&bo=qgCtAKoArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXHCrsPX9bgk4yhx4pjX.vY0OXsVJQiOhNxm0GgeE8x7EWM18hrUjH*RIQsCgzoDjZeBKuKCXpBIzLyTxIZflto!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZjXt.OFD7WNmk7Mq1ksib7i7RD7OH3fY025jrvcR3UbSD06lQBD0*ROUqASLPWaZtX7sY0j6poUrobV7Y37fkc!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZNUaHwmskHhjlCu3XTN.9q6E2FDSnz1mr2LGBpsIiXu*u6k.Tbxsr3DHCROzKryjOET6r5nWbDx2pi.scNPiVs!/mnull&bo=qgCrAKoAqwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N4_9', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg9')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N4_8', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg8')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N4_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N4_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N4_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N4_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N4_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N4_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N4_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQkZmOA1MptB30IYfqPX7yKfyDN6rv3ZbbVLawbxRuckRMhcTrV06SQXO9irEa2aRN.QRTSrSz7mFfBp1ElxeWg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeZWla*nz1X.ifU6GHa8eyt4o*xr7Ax1wF27BiYSWEBXcbE8KnkF0SBZaCnM15pLPGX5Vm8ZZpilsD34SaJDvM0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUEEqOuOWs8.vv730sANPxK2hqGvH3DIR26rTMWOrGDsezwWiOxu8MNadbXQXzq6UgV3dajb4bYvdY1R5uN.Tt4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVk4HYb1Sp3vQm3Hcsmg9qUn0FNrREh4cieP0nKODMF8ZBNukL5IjQJZMX7mSfzFSzJHGnGmKFl8ySNLLQE6gd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW9tx7HcUELVxUzmhKp71HMV.otts*Cv5hqwUdX0kC9xasJaEyVXtvFgTMpyiW*bcziPiRYigzTlyTB3qOidjFM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcJi2G2T4X1otB5wILEzW4pPWjyl492DnDerYgjQVtUE3ezBZaWENW0mK*9iVeeR3kL.xCpuS8F3HVgzQwWgkhg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfXWUZ2OufMwxB0PhYuSTuht9riCb*cj6nCyJzVzi.gagxzydZihOTF9.fGMeKDDq.w7AlR0GZxRKEOEmbfgmBU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbhZi1KZqGSO.H.Hc2YwJn7dearDpLZ5.z2jTsA93U9fQBLJGO3IoIhoFb8hs1xBUX1Q5DPO25O1A5Hr7983NU8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqeX5W1vLNdCrALthePvzLRhctGHTrbX.yRxkrqG.TsriMMKsmNaDbtSec9ehQQGC4VDgG1y37r7GQqgY9u91X28!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQCiALzdSE5*SFNtrabNsIVVt2iv4*jJ15lu0ia3Q3hOKAPpzV42KdZlDfnDsTVAaOEuKdh.g320tZjlDVZiodY!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfT7yUVmlNoIkJQrNmmUDJCJ3uS9kio4j0ciKlVEGHEN2VXgcPIbShPXwql4J*f80rUWVwR*AGSjATJvcufnEvg!/mnull&bo=sACwALAAsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQsyKz1amJal7zSRKDRyCIlU9IluEqgbOgjJ2IMA6eqH*K2hqnqHgIDi.**TDHvNOlTMY8F25H5bm9RwDkeNeNU!/mnull&bo=rgCwAK4AsAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSE5Y7IKb0yroEJLw1rRwOq4XmI.HBep5tHJ43uSvg6XNhN*6cnh2sR1okNDDa5Df0MbUAXVxyTL*4zJqRG5Fog!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVooFWXRW6zCrgke4IbjjUc2QnkyVpVc14Ho2BTBRE49XtMaiN*HBEZ0VUzoX6YOu9WH9r0HLSXFgbm41xLl8M0!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sd6MqNOdIUOqMBX4VyA*0E2hXbuCfh*zy0zl.2Dw1yJX1eCS3VTtPOrIBvQ.K*VFEjjIcWoY2W32ZZtGsEaUIUc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWxT9Q*GDQhhgLywVuLt37WxaiPFTcv*2oHhYtvboHCNkweWy5IMn2ZDUjHRb3RoGMKnXd7w2fbtPgdFL.DeX1E!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STnA2GGr7FKUQ.wfkw0s.eoe.SjU6dcha3gmk8wlATo1lGm.M2uS3eYaax3EnWRMRK2TL4KP*CN6zXg*P0r*Uts!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUXkeS*bHlDFjI1pJmNVY2ZKqMLMdLCYy7cq*Iu1nrQQuq*lp*3nTm0ZXm4La*LBfXPhOhP2oU3mHU2.iK4lLPc!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N5_9', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg9')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N5_8', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg8')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N5_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N5_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N5_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N5_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N5_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N5_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N5_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZIRc6Kb3Y8cAzTzvA8N8G5KSrWkrukBSpNrjKg1y8DecvJMHZIjs.N7PiuCg562SyeNhpdK4r0urO270wm9gSc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqf4xqKRYot8.1wSqeDLZ1nb5QNfSngboPDnP*B5Tqb679W18hxtV8x5fJ3NY8sKwt4p9GTZt5EVZwgVgApjvsh4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZir8PFDoZ1vVnD*AXRIzfEtgHUoG8tBJg15HBfUCs5C90*.jQqBtUGQbGegAXfa5tdYxav.vQZIQ0AU8gTBjMQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbLz8s6*TQpffqBSAuJDAQlt6tDZ00XdDW2iloNF5P1h*65VuVc1mLJd0j3K2hNdOv7QUxRIDpQOUB5jjR.axbc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWa.H3*UToG6.vFp4.lfRY6AIIXg66yB4FXJZuOfl02aw3f48tTuOJMJ1wB9w3L2mndOVJOE.5V1N3hEKPUpWgg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWGFvKXD4Qxi87QFyaz4gQtCbr9RX24zw8l5P.hOvmaFui5t9EabrwSsmeDkt*7uG2dcOtmmQTaoF28zDtO406E!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZ13Zi2hBfDcivJ*IzYbYlDPgxni52uqArxkZMlcqhOeO9bxiiIPbipGsccd2vI6OasL7.RQTXXD6Rc4yXZoHdM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZXCJN56c9iMBCpiMkCIKn41**rVOOqhpgpkrBagDIktwSihljNxgvHjDzOBdpc9.qymahelvjnMvV9UGV68QS0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW7wQKtvId0CBOJSmhMG261gk2GpSGmYwagExBIiTR7gcVZLrKSWn6.VFW1vxmWQbSw8i7Vs7yns.f00GDQQVzQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfNNpZwH1g5f83Wrh7iMLsGFrSbF5tLfLDiy9FbYk7M06HkwpwK9lSQzGdQpYYuVQs.fYmklloK6tU7YqpjwM3o!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sc5o7yAMYLurOypMnIcW5vdSyW0PSdMbZ3dTiVWHKv9MIyGg062f9UY4fYmV7bEHECkdgIMYDiSRN1SNZkYNq2w!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SevNPOITKiy.BsibuY7vaWSZ2capZJ8THBNoorvPjJYAoW4n6nejwgjgP0J7bDnVTmM5EV1Sg5EvJgUNgKejYAA!/mnull&bo=rQCtAK0ArQADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSGrnqhJWY0tKs3sHXyLJtgfYc7abUOI0iD1vUJ.5*r0zIl0SBTl9sLYztuVhrRIF0lYZ1dvzFv.wiLU.IVYRkA!/mnull&bo=rQCuAK0ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ7MreY.NBTUhh14pgDV06t6lCI61hTOHwoU0fROteyRugk8W3Tp*Ww8ZuFBskhHOHL8vLyK9QDtB5FzAJDSJXM!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*ScSao3UWu1.m34*rSZHo9xT7FZ7JMLdTBMWNMPh6sAnwlyd0aLz63UjMB9ViRKOUXMH9D1M.MeVB2UnqwLyOwjA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXpYUb4XVv60k4eGfEr8NW1CPLS87bVwymJSePpxmrkP4pZ2sykBVmYrLzLeI2B45sH4jYd5zg1fPt9Zepa3wDk!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSvLZ87eQo3Nf72WKkRcWHBwzI1r0ikyXlr8p55ZolJB9iOGkUcJ*RUDbbwjNPnJjSmbSkufaywDxhA6r80bDv0!/mnull&bo=rgCvAK4ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSHAulF1Ey6AvvSbwR0jC2B.3ARvFdDmnWlatx3tdpJpg7nVHU2*LAu.jg5DzbX8aG1v6O8Su4yenbGJp8xCYCk!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N6_9', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg9')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N6_8', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg8')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N6_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N6_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N6_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N6_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N6_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N6_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N6_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVzLgFp1YIjLk94lX2tzGP7LWNjY1ziaUz*CHi2UFrhoHNB.42370WehMgUMld5Ue8yjLRKlxIQ70lgsjMQk4Lk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZGHEGY.d0J68DDPLRTj1u5NgdSO4AB0bOcpBoFLk8B0KwN6PMEz46YuZFB5ICOePBv8hbOtPjJwJBjMOfqBRe8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqRA.j16wV0MCd78.36p1N.sSCV3o4zLaQdzBZkmR96CBHSuNLYjXUEYh9A.SDCM1TN2Luh7zx2Tufjvc*wwhNI4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTBA0qLB1NWmmo.5S*T9f8.hFjc7BW*T06cECKYSt1mRYWfzdgwpwP1c8uAf.FbEN2QbTjPe3Ll4NBFo19Hg.w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqd5LGIwXOUWXZsw0V1kbWC48aotJgde8Pv3zadl3YrrZYiSrQd7Zw*8RzkqjXINm31HxwIxkrI7lqcYfc6sSojg!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbPTn5cNJe3K5ap0MuM3TSakx51uNzInTw65*B0qWXB.qoCIruDxthKPZlZJF3Jo8W2flGFCMaKleimkSggFmJs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcobmbn9ylleadwjbXII2XdUZvZ77f.Qhnt7390Czf.KdAY1buzYF2alVNi4xG4wVzk80u1L5UcJ*INRro2Fqd0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqU7kOLZJvxajaUbLrbPlkSMY6h7rwvjAiKSLlORx.myB9JumkjqLmksnRqD76YQb5hITHwSC2OVT.gTcklIB0vs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUkHiS3cxaI1rxYzvT7yEyw*XFL4ZplyMNpqDmigf91jS1gjqouCEz.FQxPxyXJND9Y8Sj2pcfm3c6XfFdsUtLo!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZgcphQd2P3*U4ySx7pP2EYidONyq2oQXB2RpRfGbIPURt3u8l48EmdRaBPq3acV6Jlxm.LfIngfQZsBTlI*W20!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXN4JHLspl1nBICjvfvanRn9YmPZ*fjC37UTgXqDSfYsuNXpGycGrqIQbXzfNTju0o1EqDuEQlKgi8G4CM0LqxI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SahoxP1apisBQHIlJO7BWbYmxJNO4*p8qgqBfHgfSX01nzQ*274b9Q7qFrtqwVn8Aw9Nai7LBz8jJtNEcV4vAjY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYyxBJyDqTTBzW*J56BvX7HbDhDugQ51itupi.zAKQGfRONT0Hx3HJjnmRZtqpcUg5MzqOVYERLDZ6liQ*ld6Fo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXIm0cWfYdwnQQu4003O8mPU1DygdOJIKPbrTp2XgGx1rr8rUy.RN7yZ2FoR6SK5C.JeLtft5YYDqaxPB8jqStQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXURZAbUTLehihuYg7dcXgx0PkEyfEPseNPxYupObFSMoEuM72lF04oGjv3APtgTdxRwKHCQ2tb36**YbcwIJkE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXUm3jfhxntGxQHGOGBlVMpEEKyUDmmdAncGFkSK7TB9be0OW9seuI*1.PV8ydecBtKp8nGL21njjadoRbzy*eQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW6nvIIA2CZHrujtDcjxBCRrTqZPjj*NiImq7Noqd0qqMbBSzCD.Sr7AgFjMnCWYajVm06Y6jOlHoeB5H*CGgNk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSgmWNkqMTuL66CcdokorDUvSTJE8DLZv1iGywtNRAYgHHIoMn0Uj6py88ofgJ1jPPFt8hAKNjzwztj4gp8*jog!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N7_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfsq.cV.Fz5J2g3D8.AUe6LhwpEld9ZYTLNToUgXSjIrpvpTsxw7kdmODX31rpnSKDszQMR1eLGy0dtMywZoQoA!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfbhQnhtch1mAFamQ2.jCHwKjh80C6uHAIzXvk4iCyM5SFMl3FR5vYlZ2*Z5fLE6ox.JI7SYUKPjv.3Fbb0Yi8Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQBoho*gR*fLRyhIZW3Ib7C2SMKwYem*0u2b9F4DgWKPiW9Byms.Md9kzptCdKnpOfJYMldlhCbdEG0z38YHhMc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbBt*PyyoNuHMjHgNLgNoJ5PEh..Fwm37YoJHr0JA.Ez8D*ZvBMNJe18HRkx6J6nUZ1Z6FIy0QIym7Oqs4zbGNA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUbanskXOxVJnd33Fa2Qb0k6zp1nlrz9LV4zqszxiR9nxTnFhAQdGU0BwTrmcJJa882KXUvOMJoybDkB.GzsL7Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcsQnLEjt*GRsvj1gcnUvf5MirEX210PZE5EG7CwriExTtmICrB012Oa.*bbS*erN5m9HlA3marDX97VjD3Pb0Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqe.V5i5w0PfextqJB9NBgDRt6CJFY9.9ytqT4mm5CShsqPJy3QsWx4.L2ATab2mV6RYH.NASf*ecxC3kGrdleBE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfsq.cV.Fz5J2g3D8.AUe6LhwpEld9ZYTLNToUgXSjIrpvpTsxw7kdmODX31rpnSKDszQMR1eLGy0dtMywZoQoA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sbvsj9BntS55zzI4*MvNmsMyG3ac*mNcLqQYuItNmIVVYv6unTTlSk.amLDfG0CxTEwElPrZUhDmQBIvefGGbao!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSWh9tayOu3B29tatnlnh2QhhMrueZh9qEYbF7yI1yKhVwUZ*xwD.IYA78FZ5XIzyFc9riUSSUPyC1O.ya3sbXc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZxv1aIscB1cjen*S8uIv6lfj.b5uyiYXek*Rs3WbfPeCkDQisCNid22a0VNXieY1xrvopryVGZBG.N3ZMusmHA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV71SKfkAQt2GQD.vBixXcYPVldXkO5j0ON5DQ2cV3edwhgf7xtRs2Xs.ZrAFB*Uf8bU1PZEqwJ8p2qkY3lV70A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfEhhaU2XYCz8lKQeiPfOCNfleUi6TJeaxeUq2FTIyWxsKfs.UWHa4L3LtV4*2oWWByyPrvSPTjVOH0Sn*U6Hew!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbwMbTXsuPsSTeicv3XQKihAEW0VaprbdcefSl2VIe4t9nJRQTryse2SULNu14UZJ2fGH.P5ZN6Ljf1TUvnKmJY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ9zmmcgtjDWaDxlzRZDu*yvzdxvwKd.xL1h98fn18WByxOOS583nrJKEvM.HpkKG7fjzbN8SXKa.ybnwwk1J2A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N7_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqe.V5i5w0PfextqJB9NBgDRt6CJFY9.9ytqT4mm5CShsqPJy3QsWx4.L2ATab2mV6RYH.NASf*ecxC3kGrdleBE!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfbhQnhtch1mAFamQ2.jCHwKjh80C6uHAIzXvk4iCyM5SFMl3FR5vYlZ2*Z5fLE6ox.JI7SYUKPjv.3Fbb0Yi8Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQBoho*gR*fLRyhIZW3Ib7C2SMKwYem*0u2b9F4DgWKPiW9Byms.Md9kzptCdKnpOfJYMldlhCbdEG0z38YHhMc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbBt*PyyoNuHMjHgNLgNoJ5PEh..Fwm37YoJHr0JA.Ez8D*ZvBMNJe18HRkx6J6nUZ1Z6FIy0QIym7Oqs4zbGNA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUbanskXOxVJnd33Fa2Qb0k6zp1nlrz9LV4zqszxiR9nxTnFhAQdGU0BwTrmcJJa882KXUvOMJoybDkB.GzsL7Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcsQnLEjt*GRsvj1gcnUvf5MirEX210PZE5EG7CwriExTtmICrB012Oa.*bbS*erN5m9HlA3marDX97VjD3Pb0Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqe.V5i5w0PfextqJB9NBgDRt6CJFY9.9ytqT4mm5CShsqPJy3QsWx4.L2ATab2mV6RYH.NASf*ecxC3kGrdleBE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfsq.cV.Fz5J2g3D8.AUe6LhwpEld9ZYTLNToUgXSjIrpvpTsxw7kdmODX31rpnSKDszQMR1eLGy0dtMywZoQoA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sbvsj9BntS55zzI4*MvNmsMyG3ac*mNcLqQYuItNmIVVYv6unTTlSk.amLDfG0CxTEwElPrZUhDmQBIvefGGbao!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSWh9tayOu3B29tatnlnh2QhhMrueZh9qEYbF7yI1yKhVwUZ*xwD.IYA78FZ5XIzyFc9riUSSUPyC1O.ya3sbXc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZxv1aIscB1cjen*S8uIv6lfj.b5uyiYXek*Rs3WbfPeCkDQisCNid22a0VNXieY1xrvopryVGZBG.N3ZMusmHA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV71SKfkAQt2GQD.vBixXcYPVldXkO5j0ON5DQ2cV3edwhgf7xtRs2Xs.ZrAFB*Uf8bU1PZEqwJ8p2qkY3lV70A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfEhhaU2XYCz8lKQeiPfOCNfleUi6TJeaxeUq2FTIyWxsKfs.UWHa4L3LtV4*2oWWByyPrvSPTjVOH0Sn*U6Hew!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbwMbTXsuPsSTeicv3XQKihAEW0VaprbdcefSl2VIe4t9nJRQTryse2SULNu14UZJ2fGH.P5ZN6Ljf1TUvnKmJY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ9zmmcgtjDWaDxlzRZDu*yvzdxvwKd.xL1h98fn18WByxOOS583nrJKEvM.HpkKG7fjzbN8SXKa.ybnwwk1J2A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N7_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcsQnLEjt*GRsvj1gcnUvf5MirEX210PZE5EG7CwriExTtmICrB012Oa.*bbS*erN5m9HlA3marDX97VjD3Pb0Y!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfbhQnhtch1mAFamQ2.jCHwKjh80C6uHAIzXvk4iCyM5SFMl3FR5vYlZ2*Z5fLE6ox.JI7SYUKPjv.3Fbb0Yi8Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQBoho*gR*fLRyhIZW3Ib7C2SMKwYem*0u2b9F4DgWKPiW9Byms.Md9kzptCdKnpOfJYMldlhCbdEG0z38YHhMc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbBt*PyyoNuHMjHgNLgNoJ5PEh..Fwm37YoJHr0JA.Ez8D*ZvBMNJe18HRkx6J6nUZ1Z6FIy0QIym7Oqs4zbGNA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUbanskXOxVJnd33Fa2Qb0k6zp1nlrz9LV4zqszxiR9nxTnFhAQdGU0BwTrmcJJa882KXUvOMJoybDkB.GzsL7Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcsQnLEjt*GRsvj1gcnUvf5MirEX210PZE5EG7CwriExTtmICrB012Oa.*bbS*erN5m9HlA3marDX97VjD3Pb0Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqe.V5i5w0PfextqJB9NBgDRt6CJFY9.9ytqT4mm5CShsqPJy3QsWx4.L2ATab2mV6RYH.NASf*ecxC3kGrdleBE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfsq.cV.Fz5J2g3D8.AUe6LhwpEld9ZYTLNToUgXSjIrpvpTsxw7kdmODX31rpnSKDszQMR1eLGy0dtMywZoQoA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sbvsj9BntS55zzI4*MvNmsMyG3ac*mNcLqQYuItNmIVVYv6unTTlSk.amLDfG0CxTEwElPrZUhDmQBIvefGGbao!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSWh9tayOu3B29tatnlnh2QhhMrueZh9qEYbF7yI1yKhVwUZ*xwD.IYA78FZ5XIzyFc9riUSSUPyC1O.ya3sbXc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZxv1aIscB1cjen*S8uIv6lfj.b5uyiYXek*Rs3WbfPeCkDQisCNid22a0VNXieY1xrvopryVGZBG.N3ZMusmHA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV71SKfkAQt2GQD.vBixXcYPVldXkO5j0ON5DQ2cV3edwhgf7xtRs2Xs.ZrAFB*Uf8bU1PZEqwJ8p2qkY3lV70A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfEhhaU2XYCz8lKQeiPfOCNfleUi6TJeaxeUq2FTIyWxsKfs.UWHa4L3LtV4*2oWWByyPrvSPTjVOH0Sn*U6Hew!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbwMbTXsuPsSTeicv3XQKihAEW0VaprbdcefSl2VIe4t9nJRQTryse2SULNu14UZJ2fGH.P5ZN6Ljf1TUvnKmJY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ9zmmcgtjDWaDxlzRZDu*yvzdxvwKd.xL1h98fn18WByxOOS583nrJKEvM.HpkKG7fjzbN8SXKa.ybnwwk1J2A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N7_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUbanskXOxVJnd33Fa2Qb0k6zp1nlrz9LV4zqszxiR9nxTnFhAQdGU0BwTrmcJJa882KXUvOMJoybDkB.GzsL7Y!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfbhQnhtch1mAFamQ2.jCHwKjh80C6uHAIzXvk4iCyM5SFMl3FR5vYlZ2*Z5fLE6ox.JI7SYUKPjv.3Fbb0Yi8Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQBoho*gR*fLRyhIZW3Ib7C2SMKwYem*0u2b9F4DgWKPiW9Byms.Md9kzptCdKnpOfJYMldlhCbdEG0z38YHhMc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbBt*PyyoNuHMjHgNLgNoJ5PEh..Fwm37YoJHr0JA.Ez8D*ZvBMNJe18HRkx6J6nUZ1Z6FIy0QIym7Oqs4zbGNA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUbanskXOxVJnd33Fa2Qb0k6zp1nlrz9LV4zqszxiR9nxTnFhAQdGU0BwTrmcJJa882KXUvOMJoybDkB.GzsL7Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcsQnLEjt*GRsvj1gcnUvf5MirEX210PZE5EG7CwriExTtmICrB012Oa.*bbS*erN5m9HlA3marDX97VjD3Pb0Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqe.V5i5w0PfextqJB9NBgDRt6CJFY9.9ytqT4mm5CShsqPJy3QsWx4.L2ATab2mV6RYH.NASf*ecxC3kGrdleBE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfsq.cV.Fz5J2g3D8.AUe6LhwpEld9ZYTLNToUgXSjIrpvpTsxw7kdmODX31rpnSKDszQMR1eLGy0dtMywZoQoA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sbvsj9BntS55zzI4*MvNmsMyG3ac*mNcLqQYuItNmIVVYv6unTTlSk.amLDfG0CxTEwElPrZUhDmQBIvefGGbao!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSWh9tayOu3B29tatnlnh2QhhMrueZh9qEYbF7yI1yKhVwUZ*xwD.IYA78FZ5XIzyFc9riUSSUPyC1O.ya3sbXc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZxv1aIscB1cjen*S8uIv6lfj.b5uyiYXek*Rs3WbfPeCkDQisCNid22a0VNXieY1xrvopryVGZBG.N3ZMusmHA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV71SKfkAQt2GQD.vBixXcYPVldXkO5j0ON5DQ2cV3edwhgf7xtRs2Xs.ZrAFB*Uf8bU1PZEqwJ8p2qkY3lV70A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfEhhaU2XYCz8lKQeiPfOCNfleUi6TJeaxeUq2FTIyWxsKfs.UWHa4L3LtV4*2oWWByyPrvSPTjVOH0Sn*U6Hew!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbwMbTXsuPsSTeicv3XQKihAEW0VaprbdcefSl2VIe4t9nJRQTryse2SULNu14UZJ2fGH.P5ZN6Ljf1TUvnKmJY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ9zmmcgtjDWaDxlzRZDu*yvzdxvwKd.xL1h98fn18WByxOOS583nrJKEvM.HpkKG7fjzbN8SXKa.ybnwwk1J2A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N7_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbBt*PyyoNuHMjHgNLgNoJ5PEh..Fwm37YoJHr0JA.Ez8D*ZvBMNJe18HRkx6J6nUZ1Z6FIy0QIym7Oqs4zbGNA!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfbhQnhtch1mAFamQ2.jCHwKjh80C6uHAIzXvk4iCyM5SFMl3FR5vYlZ2*Z5fLE6ox.JI7SYUKPjv.3Fbb0Yi8Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQBoho*gR*fLRyhIZW3Ib7C2SMKwYem*0u2b9F4DgWKPiW9Byms.Md9kzptCdKnpOfJYMldlhCbdEG0z38YHhMc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbBt*PyyoNuHMjHgNLgNoJ5PEh..Fwm37YoJHr0JA.Ez8D*ZvBMNJe18HRkx6J6nUZ1Z6FIy0QIym7Oqs4zbGNA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUbanskXOxVJnd33Fa2Qb0k6zp1nlrz9LV4zqszxiR9nxTnFhAQdGU0BwTrmcJJa882KXUvOMJoybDkB.GzsL7Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcsQnLEjt*GRsvj1gcnUvf5MirEX210PZE5EG7CwriExTtmICrB012Oa.*bbS*erN5m9HlA3marDX97VjD3Pb0Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqe.V5i5w0PfextqJB9NBgDRt6CJFY9.9ytqT4mm5CShsqPJy3QsWx4.L2ATab2mV6RYH.NASf*ecxC3kGrdleBE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfsq.cV.Fz5J2g3D8.AUe6LhwpEld9ZYTLNToUgXSjIrpvpTsxw7kdmODX31rpnSKDszQMR1eLGy0dtMywZoQoA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sbvsj9BntS55zzI4*MvNmsMyG3ac*mNcLqQYuItNmIVVYv6unTTlSk.amLDfG0CxTEwElPrZUhDmQBIvefGGbao!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSWh9tayOu3B29tatnlnh2QhhMrueZh9qEYbF7yI1yKhVwUZ*xwD.IYA78FZ5XIzyFc9riUSSUPyC1O.ya3sbXc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZxv1aIscB1cjen*S8uIv6lfj.b5uyiYXek*Rs3WbfPeCkDQisCNid22a0VNXieY1xrvopryVGZBG.N3ZMusmHA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV71SKfkAQt2GQD.vBixXcYPVldXkO5j0ON5DQ2cV3edwhgf7xtRs2Xs.ZrAFB*Uf8bU1PZEqwJ8p2qkY3lV70A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfEhhaU2XYCz8lKQeiPfOCNfleUi6TJeaxeUq2FTIyWxsKfs.UWHa4L3LtV4*2oWWByyPrvSPTjVOH0Sn*U6Hew!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbwMbTXsuPsSTeicv3XQKihAEW0VaprbdcefSl2VIe4t9nJRQTryse2SULNu14UZJ2fGH.P5ZN6Ljf1TUvnKmJY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ9zmmcgtjDWaDxlzRZDu*yvzdxvwKd.xL1h98fn18WByxOOS583nrJKEvM.HpkKG7fjzbN8SXKa.ybnwwk1J2A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N7_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQBoho*gR*fLRyhIZW3Ib7C2SMKwYem*0u2b9F4DgWKPiW9Byms.Md9kzptCdKnpOfJYMldlhCbdEG0z38YHhMc!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfbhQnhtch1mAFamQ2.jCHwKjh80C6uHAIzXvk4iCyM5SFMl3FR5vYlZ2*Z5fLE6ox.JI7SYUKPjv.3Fbb0Yi8Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQBoho*gR*fLRyhIZW3Ib7C2SMKwYem*0u2b9F4DgWKPiW9Byms.Md9kzptCdKnpOfJYMldlhCbdEG0z38YHhMc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbBt*PyyoNuHMjHgNLgNoJ5PEh..Fwm37YoJHr0JA.Ez8D*ZvBMNJe18HRkx6J6nUZ1Z6FIy0QIym7Oqs4zbGNA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUbanskXOxVJnd33Fa2Qb0k6zp1nlrz9LV4zqszxiR9nxTnFhAQdGU0BwTrmcJJa882KXUvOMJoybDkB.GzsL7Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcsQnLEjt*GRsvj1gcnUvf5MirEX210PZE5EG7CwriExTtmICrB012Oa.*bbS*erN5m9HlA3marDX97VjD3Pb0Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqe.V5i5w0PfextqJB9NBgDRt6CJFY9.9ytqT4mm5CShsqPJy3QsWx4.L2ATab2mV6RYH.NASf*ecxC3kGrdleBE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfsq.cV.Fz5J2g3D8.AUe6LhwpEld9ZYTLNToUgXSjIrpvpTsxw7kdmODX31rpnSKDszQMR1eLGy0dtMywZoQoA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sbvsj9BntS55zzI4*MvNmsMyG3ac*mNcLqQYuItNmIVVYv6unTTlSk.amLDfG0CxTEwElPrZUhDmQBIvefGGbao!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSWh9tayOu3B29tatnlnh2QhhMrueZh9qEYbF7yI1yKhVwUZ*xwD.IYA78FZ5XIzyFc9riUSSUPyC1O.ya3sbXc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZxv1aIscB1cjen*S8uIv6lfj.b5uyiYXek*Rs3WbfPeCkDQisCNid22a0VNXieY1xrvopryVGZBG.N3ZMusmHA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV71SKfkAQt2GQD.vBixXcYPVldXkO5j0ON5DQ2cV3edwhgf7xtRs2Xs.ZrAFB*Uf8bU1PZEqwJ8p2qkY3lV70A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfEhhaU2XYCz8lKQeiPfOCNfleUi6TJeaxeUq2FTIyWxsKfs.UWHa4L3LtV4*2oWWByyPrvSPTjVOH0Sn*U6Hew!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbwMbTXsuPsSTeicv3XQKihAEW0VaprbdcefSl2VIe4t9nJRQTryse2SULNu14UZJ2fGH.P5ZN6Ljf1TUvnKmJY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ9zmmcgtjDWaDxlzRZDu*yvzdxvwKd.xL1h98fn18WByxOOS583nrJKEvM.HpkKG7fjzbN8SXKa.ybnwwk1J2A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N7_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfbhQnhtch1mAFamQ2.jCHwKjh80C6uHAIzXvk4iCyM5SFMl3FR5vYlZ2*Z5fLE6ox.JI7SYUKPjv.3Fbb0Yi8Y!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfbhQnhtch1mAFamQ2.jCHwKjh80C6uHAIzXvk4iCyM5SFMl3FR5vYlZ2*Z5fLE6ox.JI7SYUKPjv.3Fbb0Yi8Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQBoho*gR*fLRyhIZW3Ib7C2SMKwYem*0u2b9F4DgWKPiW9Byms.Md9kzptCdKnpOfJYMldlhCbdEG0z38YHhMc!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbBt*PyyoNuHMjHgNLgNoJ5PEh..Fwm37YoJHr0JA.Ez8D*ZvBMNJe18HRkx6J6nUZ1Z6FIy0QIym7Oqs4zbGNA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUbanskXOxVJnd33Fa2Qb0k6zp1nlrz9LV4zqszxiR9nxTnFhAQdGU0BwTrmcJJa882KXUvOMJoybDkB.GzsL7Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqcsQnLEjt*GRsvj1gcnUvf5MirEX210PZE5EG7CwriExTtmICrB012Oa.*bbS*erN5m9HlA3marDX97VjD3Pb0Y!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqe.V5i5w0PfextqJB9NBgDRt6CJFY9.9ytqT4mm5CShsqPJy3QsWx4.L2ATab2mV6RYH.NASf*ecxC3kGrdleBE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfsq.cV.Fz5J2g3D8.AUe6LhwpEld9ZYTLNToUgXSjIrpvpTsxw7kdmODX31rpnSKDszQMR1eLGy0dtMywZoQoA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sbvsj9BntS55zzI4*MvNmsMyG3ac*mNcLqQYuItNmIVVYv6unTTlSk.amLDfG0CxTEwElPrZUhDmQBIvefGGbao!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSWh9tayOu3B29tatnlnh2QhhMrueZh9qEYbF7yI1yKhVwUZ*xwD.IYA78FZ5XIzyFc9riUSSUPyC1O.ya3sbXc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZxv1aIscB1cjen*S8uIv6lfj.b5uyiYXek*Rs3WbfPeCkDQisCNid22a0VNXieY1xrvopryVGZBG.N3ZMusmHA!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV71SKfkAQt2GQD.vBixXcYPVldXkO5j0ON5DQ2cV3edwhgf7xtRs2Xs.ZrAFB*Uf8bU1PZEqwJ8p2qkY3lV70A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfEhhaU2XYCz8lKQeiPfOCNfleUi6TJeaxeUq2FTIyWxsKfs.UWHa4L3LtV4*2oWWByyPrvSPTjVOH0Sn*U6Hew!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbwMbTXsuPsSTeicv3XQKihAEW0VaprbdcefSl2VIe4t9nJRQTryse2SULNu14UZJ2fGH.P5ZN6Ljf1TUvnKmJY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQ9zmmcgtjDWaDxlzRZDu*yvzdxvwKd.xL1h98fn18WByxOOS583nrJKEvM.HpkKG7fjzbN8SXKa.ybnwwk1J2A!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N10_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYkuxPKrAv29j2*kZltzMJlSXeNKi0s6sJ9b8JPN0Z6sC1N673fYVROk9aWc9BGtqjCuz5vQHCJiDYzyDHjOt2M!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYkuxPKrAv29j2*kZltzMJlSXeNKi0s6sJ9b8JPN0Z6sC1N673fYVROk9aWc9BGtqjCuz5vQHCJiDYzyDHjOt2M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWAbrPXNSxGXPGE3yZE*8kReSD8rfcq803g15ppRpFvv7hLOfE..kPxRc..TTc64O2Oc24EmEmrl1N1zNtoqHBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY1NjIbToLAvxXOoWX2MN.bkwMViVyaLn1tUzqYOwfgRV2MwJXUPlRChTt505v4fowHPyRI4T1ZlFlBIYdZTwD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWgcshDSrUGiYz6hAnEWuj8yqzw6Rr5IoZQAlCnrzw3PvEGZDXO2mvVU2WLna5UIO7ojVYQrW3xpmGaSpigxUbM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdAgTGHzrVEdXzzJdyH0PPBBe9P07Ox5yngL8AdsStqbIo7Al5TQ7lsgoR.MCAxjknLS7tFchN*SoiIy3hixQjQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqej.vJHGBhSXdTz.f.3imyNU21D2glY8*dO8VsCTkuX8JmoE1XmQD8jTmgeawPcX3CsBttWwc0awQiOiOzpMKOQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdsVyRpqgcDehj98ifltI7BT1npmoXzz.aGWcwR8WJOViRF4DwyVGHlZpO5KieBaBV8mucwuARuq1RHtsl8jb9w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSqbdqPMUT3BC9XeSIuyies6DmgAeTvzzw6BrQD4YnczsFPcLYPbM.0UItxoQTMLq2amgL2MnuB95x8BnDp.Ng0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXgnJHdQOWBJwiXP7Np3lLCqxMWKcGn*O3g5pndIsjKymIhO3NHrhwtD*0ldttvZTgYiJ5tiKnA9Kv*3oB..7U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXlsYD4criddDkyH.9LZlQ6X0eCw662xVbK0S4CjNzi3hgqqpY3JX3sniwq1NHoV2MrISpIRf1H212zhJ9T2e78!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSNkr4qCYtqiYpEywcFDV63Vb0ECH5U1PAotdWMcjckSxWvJtecTHxWm0*AGYhUY6jK6IFnjL5o7WAAeMvaeKgg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se8M3KBIBEWMjqD*2rjEQvdA1NixDFNWt9pIlOKIuMeAvZQ.Z9Dks30hAzX668Jmdrm7FdAPT0MndqNX1XpvQUQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7AFQVYXQPAKtKBgooAw45lvu36DM.XRoSX5.CwjEaygOJRr*rLnLIqIMfJQnI7kcpOP5.jt5jqf0iUcwMvaOk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWtP1uZFmBECG0uNea2jMLW.u3vwZqbFLQfls439ZcEN7dfA5C9Orviz9JPQtbm*hMTs2dFUO4LVYTNjpj7ZNSU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N10_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWAbrPXNSxGXPGE3yZE*8kReSD8rfcq803g15ppRpFvv7hLOfE..kPxRc..TTc64O2Oc24EmEmrl1N1zNtoqHBk!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYkuxPKrAv29j2*kZltzMJlSXeNKi0s6sJ9b8JPN0Z6sC1N673fYVROk9aWc9BGtqjCuz5vQHCJiDYzyDHjOt2M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWAbrPXNSxGXPGE3yZE*8kReSD8rfcq803g15ppRpFvv7hLOfE..kPxRc..TTc64O2Oc24EmEmrl1N1zNtoqHBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY1NjIbToLAvxXOoWX2MN.bkwMViVyaLn1tUzqYOwfgRV2MwJXUPlRChTt505v4fowHPyRI4T1ZlFlBIYdZTwD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWgcshDSrUGiYz6hAnEWuj8yqzw6Rr5IoZQAlCnrzw3PvEGZDXO2mvVU2WLna5UIO7ojVYQrW3xpmGaSpigxUbM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdAgTGHzrVEdXzzJdyH0PPBBe9P07Ox5yngL8AdsStqbIo7Al5TQ7lsgoR.MCAxjknLS7tFchN*SoiIy3hixQjQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqej.vJHGBhSXdTz.f.3imyNU21D2glY8*dO8VsCTkuX8JmoE1XmQD8jTmgeawPcX3CsBttWwc0awQiOiOzpMKOQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdsVyRpqgcDehj98ifltI7BT1npmoXzz.aGWcwR8WJOViRF4DwyVGHlZpO5KieBaBV8mucwuARuq1RHtsl8jb9w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSqbdqPMUT3BC9XeSIuyies6DmgAeTvzzw6BrQD4YnczsFPcLYPbM.0UItxoQTMLq2amgL2MnuB95x8BnDp.Ng0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXgnJHdQOWBJwiXP7Np3lLCqxMWKcGn*O3g5pndIsjKymIhO3NHrhwtD*0ldttvZTgYiJ5tiKnA9Kv*3oB..7U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXlsYD4criddDkyH.9LZlQ6X0eCw662xVbK0S4CjNzi3hgqqpY3JX3sniwq1NHoV2MrISpIRf1H212zhJ9T2e78!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSNkr4qCYtqiYpEywcFDV63Vb0ECH5U1PAotdWMcjckSxWvJtecTHxWm0*AGYhUY6jK6IFnjL5o7WAAeMvaeKgg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se8M3KBIBEWMjqD*2rjEQvdA1NixDFNWt9pIlOKIuMeAvZQ.Z9Dks30hAzX668Jmdrm7FdAPT0MndqNX1XpvQUQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7AFQVYXQPAKtKBgooAw45lvu36DM.XRoSX5.CwjEaygOJRr*rLnLIqIMfJQnI7kcpOP5.jt5jqf0iUcwMvaOk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWtP1uZFmBECG0uNea2jMLW.u3vwZqbFLQfls439ZcEN7dfA5C9Orviz9JPQtbm*hMTs2dFUO4LVYTNjpj7ZNSU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N10_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY1NjIbToLAvxXOoWX2MN.bkwMViVyaLn1tUzqYOwfgRV2MwJXUPlRChTt505v4fowHPyRI4T1ZlFlBIYdZTwD4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYkuxPKrAv29j2*kZltzMJlSXeNKi0s6sJ9b8JPN0Z6sC1N673fYVROk9aWc9BGtqjCuz5vQHCJiDYzyDHjOt2M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWAbrPXNSxGXPGE3yZE*8kReSD8rfcq803g15ppRpFvv7hLOfE..kPxRc..TTc64O2Oc24EmEmrl1N1zNtoqHBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY1NjIbToLAvxXOoWX2MN.bkwMViVyaLn1tUzqYOwfgRV2MwJXUPlRChTt505v4fowHPyRI4T1ZlFlBIYdZTwD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWgcshDSrUGiYz6hAnEWuj8yqzw6Rr5IoZQAlCnrzw3PvEGZDXO2mvVU2WLna5UIO7ojVYQrW3xpmGaSpigxUbM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdAgTGHzrVEdXzzJdyH0PPBBe9P07Ox5yngL8AdsStqbIo7Al5TQ7lsgoR.MCAxjknLS7tFchN*SoiIy3hixQjQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqej.vJHGBhSXdTz.f.3imyNU21D2glY8*dO8VsCTkuX8JmoE1XmQD8jTmgeawPcX3CsBttWwc0awQiOiOzpMKOQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdsVyRpqgcDehj98ifltI7BT1npmoXzz.aGWcwR8WJOViRF4DwyVGHlZpO5KieBaBV8mucwuARuq1RHtsl8jb9w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSqbdqPMUT3BC9XeSIuyies6DmgAeTvzzw6BrQD4YnczsFPcLYPbM.0UItxoQTMLq2amgL2MnuB95x8BnDp.Ng0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXgnJHdQOWBJwiXP7Np3lLCqxMWKcGn*O3g5pndIsjKymIhO3NHrhwtD*0ldttvZTgYiJ5tiKnA9Kv*3oB..7U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXlsYD4criddDkyH.9LZlQ6X0eCw662xVbK0S4CjNzi3hgqqpY3JX3sniwq1NHoV2MrISpIRf1H212zhJ9T2e78!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSNkr4qCYtqiYpEywcFDV63Vb0ECH5U1PAotdWMcjckSxWvJtecTHxWm0*AGYhUY6jK6IFnjL5o7WAAeMvaeKgg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se8M3KBIBEWMjqD*2rjEQvdA1NixDFNWt9pIlOKIuMeAvZQ.Z9Dks30hAzX668Jmdrm7FdAPT0MndqNX1XpvQUQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7AFQVYXQPAKtKBgooAw45lvu36DM.XRoSX5.CwjEaygOJRr*rLnLIqIMfJQnI7kcpOP5.jt5jqf0iUcwMvaOk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWtP1uZFmBECG0uNea2jMLW.u3vwZqbFLQfls439ZcEN7dfA5C9Orviz9JPQtbm*hMTs2dFUO4LVYTNjpj7ZNSU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N10_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWgcshDSrUGiYz6hAnEWuj8yqzw6Rr5IoZQAlCnrzw3PvEGZDXO2mvVU2WLna5UIO7ojVYQrW3xpmGaSpigxUbM!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYkuxPKrAv29j2*kZltzMJlSXeNKi0s6sJ9b8JPN0Z6sC1N673fYVROk9aWc9BGtqjCuz5vQHCJiDYzyDHjOt2M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWAbrPXNSxGXPGE3yZE*8kReSD8rfcq803g15ppRpFvv7hLOfE..kPxRc..TTc64O2Oc24EmEmrl1N1zNtoqHBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY1NjIbToLAvxXOoWX2MN.bkwMViVyaLn1tUzqYOwfgRV2MwJXUPlRChTt505v4fowHPyRI4T1ZlFlBIYdZTwD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWgcshDSrUGiYz6hAnEWuj8yqzw6Rr5IoZQAlCnrzw3PvEGZDXO2mvVU2WLna5UIO7ojVYQrW3xpmGaSpigxUbM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdAgTGHzrVEdXzzJdyH0PPBBe9P07Ox5yngL8AdsStqbIo7Al5TQ7lsgoR.MCAxjknLS7tFchN*SoiIy3hixQjQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqej.vJHGBhSXdTz.f.3imyNU21D2glY8*dO8VsCTkuX8JmoE1XmQD8jTmgeawPcX3CsBttWwc0awQiOiOzpMKOQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdsVyRpqgcDehj98ifltI7BT1npmoXzz.aGWcwR8WJOViRF4DwyVGHlZpO5KieBaBV8mucwuARuq1RHtsl8jb9w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSqbdqPMUT3BC9XeSIuyies6DmgAeTvzzw6BrQD4YnczsFPcLYPbM.0UItxoQTMLq2amgL2MnuB95x8BnDp.Ng0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXgnJHdQOWBJwiXP7Np3lLCqxMWKcGn*O3g5pndIsjKymIhO3NHrhwtD*0ldttvZTgYiJ5tiKnA9Kv*3oB..7U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXlsYD4criddDkyH.9LZlQ6X0eCw662xVbK0S4CjNzi3hgqqpY3JX3sniwq1NHoV2MrISpIRf1H212zhJ9T2e78!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSNkr4qCYtqiYpEywcFDV63Vb0ECH5U1PAotdWMcjckSxWvJtecTHxWm0*AGYhUY6jK6IFnjL5o7WAAeMvaeKgg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se8M3KBIBEWMjqD*2rjEQvdA1NixDFNWt9pIlOKIuMeAvZQ.Z9Dks30hAzX668Jmdrm7FdAPT0MndqNX1XpvQUQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7AFQVYXQPAKtKBgooAw45lvu36DM.XRoSX5.CwjEaygOJRr*rLnLIqIMfJQnI7kcpOP5.jt5jqf0iUcwMvaOk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWtP1uZFmBECG0uNea2jMLW.u3vwZqbFLQfls439ZcEN7dfA5C9Orviz9JPQtbm*hMTs2dFUO4LVYTNjpj7ZNSU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N10_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdAgTGHzrVEdXzzJdyH0PPBBe9P07Ox5yngL8AdsStqbIo7Al5TQ7lsgoR.MCAxjknLS7tFchN*SoiIy3hixQjQ!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYkuxPKrAv29j2*kZltzMJlSXeNKi0s6sJ9b8JPN0Z6sC1N673fYVROk9aWc9BGtqjCuz5vQHCJiDYzyDHjOt2M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWAbrPXNSxGXPGE3yZE*8kReSD8rfcq803g15ppRpFvv7hLOfE..kPxRc..TTc64O2Oc24EmEmrl1N1zNtoqHBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY1NjIbToLAvxXOoWX2MN.bkwMViVyaLn1tUzqYOwfgRV2MwJXUPlRChTt505v4fowHPyRI4T1ZlFlBIYdZTwD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWgcshDSrUGiYz6hAnEWuj8yqzw6Rr5IoZQAlCnrzw3PvEGZDXO2mvVU2WLna5UIO7ojVYQrW3xpmGaSpigxUbM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdAgTGHzrVEdXzzJdyH0PPBBe9P07Ox5yngL8AdsStqbIo7Al5TQ7lsgoR.MCAxjknLS7tFchN*SoiIy3hixQjQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqej.vJHGBhSXdTz.f.3imyNU21D2glY8*dO8VsCTkuX8JmoE1XmQD8jTmgeawPcX3CsBttWwc0awQiOiOzpMKOQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdsVyRpqgcDehj98ifltI7BT1npmoXzz.aGWcwR8WJOViRF4DwyVGHlZpO5KieBaBV8mucwuARuq1RHtsl8jb9w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSqbdqPMUT3BC9XeSIuyies6DmgAeTvzzw6BrQD4YnczsFPcLYPbM.0UItxoQTMLq2amgL2MnuB95x8BnDp.Ng0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXgnJHdQOWBJwiXP7Np3lLCqxMWKcGn*O3g5pndIsjKymIhO3NHrhwtD*0ldttvZTgYiJ5tiKnA9Kv*3oB..7U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXlsYD4criddDkyH.9LZlQ6X0eCw662xVbK0S4CjNzi3hgqqpY3JX3sniwq1NHoV2MrISpIRf1H212zhJ9T2e78!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSNkr4qCYtqiYpEywcFDV63Vb0ECH5U1PAotdWMcjckSxWvJtecTHxWm0*AGYhUY6jK6IFnjL5o7WAAeMvaeKgg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se8M3KBIBEWMjqD*2rjEQvdA1NixDFNWt9pIlOKIuMeAvZQ.Z9Dks30hAzX668Jmdrm7FdAPT0MndqNX1XpvQUQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7AFQVYXQPAKtKBgooAw45lvu36DM.XRoSX5.CwjEaygOJRr*rLnLIqIMfJQnI7kcpOP5.jt5jqf0iUcwMvaOk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWtP1uZFmBECG0uNea2jMLW.u3vwZqbFLQfls439ZcEN7dfA5C9Orviz9JPQtbm*hMTs2dFUO4LVYTNjpj7ZNSU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N10_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqej.vJHGBhSXdTz.f.3imyNU21D2glY8*dO8VsCTkuX8JmoE1XmQD8jTmgeawPcX3CsBttWwc0awQiOiOzpMKOQ!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYkuxPKrAv29j2*kZltzMJlSXeNKi0s6sJ9b8JPN0Z6sC1N673fYVROk9aWc9BGtqjCuz5vQHCJiDYzyDHjOt2M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWAbrPXNSxGXPGE3yZE*8kReSD8rfcq803g15ppRpFvv7hLOfE..kPxRc..TTc64O2Oc24EmEmrl1N1zNtoqHBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY1NjIbToLAvxXOoWX2MN.bkwMViVyaLn1tUzqYOwfgRV2MwJXUPlRChTt505v4fowHPyRI4T1ZlFlBIYdZTwD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWgcshDSrUGiYz6hAnEWuj8yqzw6Rr5IoZQAlCnrzw3PvEGZDXO2mvVU2WLna5UIO7ojVYQrW3xpmGaSpigxUbM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdAgTGHzrVEdXzzJdyH0PPBBe9P07Ox5yngL8AdsStqbIo7Al5TQ7lsgoR.MCAxjknLS7tFchN*SoiIy3hixQjQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqej.vJHGBhSXdTz.f.3imyNU21D2glY8*dO8VsCTkuX8JmoE1XmQD8jTmgeawPcX3CsBttWwc0awQiOiOzpMKOQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdsVyRpqgcDehj98ifltI7BT1npmoXzz.aGWcwR8WJOViRF4DwyVGHlZpO5KieBaBV8mucwuARuq1RHtsl8jb9w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSqbdqPMUT3BC9XeSIuyies6DmgAeTvzzw6BrQD4YnczsFPcLYPbM.0UItxoQTMLq2amgL2MnuB95x8BnDp.Ng0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXgnJHdQOWBJwiXP7Np3lLCqxMWKcGn*O3g5pndIsjKymIhO3NHrhwtD*0ldttvZTgYiJ5tiKnA9Kv*3oB..7U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXlsYD4criddDkyH.9LZlQ6X0eCw662xVbK0S4CjNzi3hgqqpY3JX3sniwq1NHoV2MrISpIRf1H212zhJ9T2e78!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSNkr4qCYtqiYpEywcFDV63Vb0ECH5U1PAotdWMcjckSxWvJtecTHxWm0*AGYhUY6jK6IFnjL5o7WAAeMvaeKgg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se8M3KBIBEWMjqD*2rjEQvdA1NixDFNWt9pIlOKIuMeAvZQ.Z9Dks30hAzX668Jmdrm7FdAPT0MndqNX1XpvQUQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7AFQVYXQPAKtKBgooAw45lvu36DM.XRoSX5.CwjEaygOJRr*rLnLIqIMfJQnI7kcpOP5.jt5jqf0iUcwMvaOk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWtP1uZFmBECG0uNea2jMLW.u3vwZqbFLQfls439ZcEN7dfA5C9Orviz9JPQtbm*hMTs2dFUO4LVYTNjpj7ZNSU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N10_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdsVyRpqgcDehj98ifltI7BT1npmoXzz.aGWcwR8WJOViRF4DwyVGHlZpO5KieBaBV8mucwuARuq1RHtsl8jb9w!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqYkuxPKrAv29j2*kZltzMJlSXeNKi0s6sJ9b8JPN0Z6sC1N673fYVROk9aWc9BGtqjCuz5vQHCJiDYzyDHjOt2M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWAbrPXNSxGXPGE3yZE*8kReSD8rfcq803g15ppRpFvv7hLOfE..kPxRc..TTc64O2Oc24EmEmrl1N1zNtoqHBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY1NjIbToLAvxXOoWX2MN.bkwMViVyaLn1tUzqYOwfgRV2MwJXUPlRChTt505v4fowHPyRI4T1ZlFlBIYdZTwD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWgcshDSrUGiYz6hAnEWuj8yqzw6Rr5IoZQAlCnrzw3PvEGZDXO2mvVU2WLna5UIO7ojVYQrW3xpmGaSpigxUbM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdAgTGHzrVEdXzzJdyH0PPBBe9P07Ox5yngL8AdsStqbIo7Al5TQ7lsgoR.MCAxjknLS7tFchN*SoiIy3hixQjQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqej.vJHGBhSXdTz.f.3imyNU21D2glY8*dO8VsCTkuX8JmoE1XmQD8jTmgeawPcX3CsBttWwc0awQiOiOzpMKOQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqdsVyRpqgcDehj98ifltI7BT1npmoXzz.aGWcwR8WJOViRF4DwyVGHlZpO5KieBaBV8mucwuARuq1RHtsl8jb9w!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSqbdqPMUT3BC9XeSIuyies6DmgAeTvzzw6BrQD4YnczsFPcLYPbM.0UItxoQTMLq2amgL2MnuB95x8BnDp.Ng0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXgnJHdQOWBJwiXP7Np3lLCqxMWKcGn*O3g5pndIsjKymIhO3NHrhwtD*0ldttvZTgYiJ5tiKnA9Kv*3oB..7U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXlsYD4criddDkyH.9LZlQ6X0eCw662xVbK0S4CjNzi3hgqqpY3JX3sniwq1NHoV2MrISpIRf1H212zhJ9T2e78!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSNkr4qCYtqiYpEywcFDV63Vb0ECH5U1PAotdWMcjckSxWvJtecTHxWm0*AGYhUY6jK6IFnjL5o7WAAeMvaeKgg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Se8M3KBIBEWMjqD*2rjEQvdA1NixDFNWt9pIlOKIuMeAvZQ.Z9Dks30hAzX668Jmdrm7FdAPT0MndqNX1XpvQUQ!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7AFQVYXQPAKtKBgooAw45lvu36DM.XRoSX5.CwjEaygOJRr*rLnLIqIMfJQnI7kcpOP5.jt5jqf0iUcwMvaOk!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SWtP1uZFmBECG0uNea2jMLW.u3vwZqbFLQfls439ZcEN7dfA5C9Orviz9JPQtbm*hMTs2dFUO4LVYTNjpj7ZNSU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 7; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N9_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfJFuMIOBtRtBYlVdCJFUQZ2ayhBpTosXIpf3oNFoMcRTGXQIrR9WLDU8rcOQcfsXCn3AqHNBx*17ECwTU5ddOY!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfJFuMIOBtRtBYlVdCJFUQZ2ayhBpTosXIpf3oNFoMcRTGXQIrR9WLDU8rcOQcfsXCn3AqHNBx*17ECwTU5ddOY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqarqjsOpTzE7eM**4cf21H9zM5XXybqwSmnttzzmJu2GkPdSaHHKQHuyRH4veChL2ylPgh64hQR5qzYIIaLauk4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXBeVXdDd2RtAJfkiJDoKUXIpqu.BU8Tj2l3My9u5z8mthOyxtgC6Qh7UYsVItnDpo.iz0z*mbwt.TeRCS160.Q!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUgEDb3reAKaNJ6yMo4*QOdPbDvX4sdZf36FlnWl9qaDEetbITTZMyfav*xhyjH3LCjehxvPeT6c8FGbW09ec1k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZo1vv8MJCub37ypr2qJACMRLW6gvPEkETyppHmVQU4QYt5ACEQBpKhbzRlfApOJRbq0DKbkfuD.xB9fOWs0KF0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbgk5cjtOsW942xrgmhyUVDjc0Np1K.CLQLhbr4Pzd4pZgv4cQ1Hie*StFve2t.Ds5AgcLQuz6CAFmUAvYFZJlw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW*g4RwRCZ9VPgyT2Y5YkvhsFXDXyKf91ag8wSwq9pEe5zncGo*IyFQEU92v5I2a9rnifXf0MeMzabnFd6A9oKs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTmBHj8IrQ*OhcUjixA4Cbnq6KWIlMv6DVEEHXXKSePStZYSP1O4RNQpm6W.xw2gsmpy5YcJ6VuTOpWhA.6U6iA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRx5WW6ySOzfpKBb*upHrjo8uCeTQoaZTuKEX*nhOH4X60TVWk99XPrFNE*BL98IyBe6YFMOTpiYcrI34.O2M5w!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUE7IyLf5bvOjgAXoyhieQY9lDa1gRiHXd4vC2tmTmrSPW.SPd84yI6lpmR.1AYU*ZYphj99YeM4kOF0U2S9iwU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRBU*PVnrIpkYf7axo4xaOZyBXuza4*3OfQY1hECRsN9W0ZFEEIfK8dp3HdCM4ev5ksgMQoPu4X*Bs8DeoQczow!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSAZ.jptery6KUOgKegAeGzexuqfdA8igAFP*23OiC4iHZuGAetb5PNW0slKOHG9iQm36s727HXbbiG6WDI3zGI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfL7yVy*1FOBWrr61CIlyYq.rXR3qJ7mlAZ7orobY3vQPm8LZ2YE01HjaKdyVbzfbXw.k7u66XBBZVXGXPn45cc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdN8htaPvPykb9ZVlhSoPMfdc7S*C*vT5XjnE1s3OagSaFoQBTSUpzncUCIyEPlS0oJx9EN7yYomrPj.AO7f3TI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Scf..thGmXCm8pmdPgqqa*P2GXH6IuIBFggpoWw9iMqFssUMXc1XWOhfxWZGbIzp6WDrSgoh1pfVB.q5wZB1MGg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STTS3HbmDlB0PNyBrxJWtA89CmLkT2AQkHbvsJsvu5pNSvEMEg9totT4M5ZyelqPw2r6E3NUvieOU5spSUy8d8E!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 8; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N9_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqarqjsOpTzE7eM**4cf21H9zM5XXybqwSmnttzzmJu2GkPdSaHHKQHuyRH4veChL2ylPgh64hQR5qzYIIaLauk4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfJFuMIOBtRtBYlVdCJFUQZ2ayhBpTosXIpf3oNFoMcRTGXQIrR9WLDU8rcOQcfsXCn3AqHNBx*17ECwTU5ddOY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqarqjsOpTzE7eM**4cf21H9zM5XXybqwSmnttzzmJu2GkPdSaHHKQHuyRH4veChL2ylPgh64hQR5qzYIIaLauk4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXBeVXdDd2RtAJfkiJDoKUXIpqu.BU8Tj2l3My9u5z8mthOyxtgC6Qh7UYsVItnDpo.iz0z*mbwt.TeRCS160.Q!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUgEDb3reAKaNJ6yMo4*QOdPbDvX4sdZf36FlnWl9qaDEetbITTZMyfav*xhyjH3LCjehxvPeT6c8FGbW09ec1k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZo1vv8MJCub37ypr2qJACMRLW6gvPEkETyppHmVQU4QYt5ACEQBpKhbzRlfApOJRbq0DKbkfuD.xB9fOWs0KF0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbgk5cjtOsW942xrgmhyUVDjc0Np1K.CLQLhbr4Pzd4pZgv4cQ1Hie*StFve2t.Ds5AgcLQuz6CAFmUAvYFZJlw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW*g4RwRCZ9VPgyT2Y5YkvhsFXDXyKf91ag8wSwq9pEe5zncGo*IyFQEU92v5I2a9rnifXf0MeMzabnFd6A9oKs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTmBHj8IrQ*OhcUjixA4Cbnq6KWIlMv6DVEEHXXKSePStZYSP1O4RNQpm6W.xw2gsmpy5YcJ6VuTOpWhA.6U6iA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRx5WW6ySOzfpKBb*upHrjo8uCeTQoaZTuKEX*nhOH4X60TVWk99XPrFNE*BL98IyBe6YFMOTpiYcrI34.O2M5w!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUE7IyLf5bvOjgAXoyhieQY9lDa1gRiHXd4vC2tmTmrSPW.SPd84yI6lpmR.1AYU*ZYphj99YeM4kOF0U2S9iwU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRBU*PVnrIpkYf7axo4xaOZyBXuza4*3OfQY1hECRsN9W0ZFEEIfK8dp3HdCM4ev5ksgMQoPu4X*Bs8DeoQczow!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSAZ.jptery6KUOgKegAeGzexuqfdA8igAFP*23OiC4iHZuGAetb5PNW0slKOHG9iQm36s727HXbbiG6WDI3zGI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfL7yVy*1FOBWrr61CIlyYq.rXR3qJ7mlAZ7orobY3vQPm8LZ2YE01HjaKdyVbzfbXw.k7u66XBBZVXGXPn45cc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdN8htaPvPykb9ZVlhSoPMfdc7S*C*vT5XjnE1s3OagSaFoQBTSUpzncUCIyEPlS0oJx9EN7yYomrPj.AO7f3TI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Scf..thGmXCm8pmdPgqqa*P2GXH6IuIBFggpoWw9iMqFssUMXc1XWOhfxWZGbIzp6WDrSgoh1pfVB.q5wZB1MGg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STTS3HbmDlB0PNyBrxJWtA89CmLkT2AQkHbvsJsvu5pNSvEMEg9totT4M5ZyelqPw2r6E3NUvieOU5spSUy8d8E!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 8; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N9_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXBeVXdDd2RtAJfkiJDoKUXIpqu.BU8Tj2l3My9u5z8mthOyxtgC6Qh7UYsVItnDpo.iz0z*mbwt.TeRCS160.Q!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfJFuMIOBtRtBYlVdCJFUQZ2ayhBpTosXIpf3oNFoMcRTGXQIrR9WLDU8rcOQcfsXCn3AqHNBx*17ECwTU5ddOY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqarqjsOpTzE7eM**4cf21H9zM5XXybqwSmnttzzmJu2GkPdSaHHKQHuyRH4veChL2ylPgh64hQR5qzYIIaLauk4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXBeVXdDd2RtAJfkiJDoKUXIpqu.BU8Tj2l3My9u5z8mthOyxtgC6Qh7UYsVItnDpo.iz0z*mbwt.TeRCS160.Q!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUgEDb3reAKaNJ6yMo4*QOdPbDvX4sdZf36FlnWl9qaDEetbITTZMyfav*xhyjH3LCjehxvPeT6c8FGbW09ec1k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZo1vv8MJCub37ypr2qJACMRLW6gvPEkETyppHmVQU4QYt5ACEQBpKhbzRlfApOJRbq0DKbkfuD.xB9fOWs0KF0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbgk5cjtOsW942xrgmhyUVDjc0Np1K.CLQLhbr4Pzd4pZgv4cQ1Hie*StFve2t.Ds5AgcLQuz6CAFmUAvYFZJlw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW*g4RwRCZ9VPgyT2Y5YkvhsFXDXyKf91ag8wSwq9pEe5zncGo*IyFQEU92v5I2a9rnifXf0MeMzabnFd6A9oKs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTmBHj8IrQ*OhcUjixA4Cbnq6KWIlMv6DVEEHXXKSePStZYSP1O4RNQpm6W.xw2gsmpy5YcJ6VuTOpWhA.6U6iA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRx5WW6ySOzfpKBb*upHrjo8uCeTQoaZTuKEX*nhOH4X60TVWk99XPrFNE*BL98IyBe6YFMOTpiYcrI34.O2M5w!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUE7IyLf5bvOjgAXoyhieQY9lDa1gRiHXd4vC2tmTmrSPW.SPd84yI6lpmR.1AYU*ZYphj99YeM4kOF0U2S9iwU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRBU*PVnrIpkYf7axo4xaOZyBXuza4*3OfQY1hECRsN9W0ZFEEIfK8dp3HdCM4ev5ksgMQoPu4X*Bs8DeoQczow!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSAZ.jptery6KUOgKegAeGzexuqfdA8igAFP*23OiC4iHZuGAetb5PNW0slKOHG9iQm36s727HXbbiG6WDI3zGI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfL7yVy*1FOBWrr61CIlyYq.rXR3qJ7mlAZ7orobY3vQPm8LZ2YE01HjaKdyVbzfbXw.k7u66XBBZVXGXPn45cc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdN8htaPvPykb9ZVlhSoPMfdc7S*C*vT5XjnE1s3OagSaFoQBTSUpzncUCIyEPlS0oJx9EN7yYomrPj.AO7f3TI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Scf..thGmXCm8pmdPgqqa*P2GXH6IuIBFggpoWw9iMqFssUMXc1XWOhfxWZGbIzp6WDrSgoh1pfVB.q5wZB1MGg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STTS3HbmDlB0PNyBrxJWtA89CmLkT2AQkHbvsJsvu5pNSvEMEg9totT4M5ZyelqPw2r6E3NUvieOU5spSUy8d8E!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 8; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N9_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUgEDb3reAKaNJ6yMo4*QOdPbDvX4sdZf36FlnWl9qaDEetbITTZMyfav*xhyjH3LCjehxvPeT6c8FGbW09ec1k!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfJFuMIOBtRtBYlVdCJFUQZ2ayhBpTosXIpf3oNFoMcRTGXQIrR9WLDU8rcOQcfsXCn3AqHNBx*17ECwTU5ddOY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqarqjsOpTzE7eM**4cf21H9zM5XXybqwSmnttzzmJu2GkPdSaHHKQHuyRH4veChL2ylPgh64hQR5qzYIIaLauk4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXBeVXdDd2RtAJfkiJDoKUXIpqu.BU8Tj2l3My9u5z8mthOyxtgC6Qh7UYsVItnDpo.iz0z*mbwt.TeRCS160.Q!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUgEDb3reAKaNJ6yMo4*QOdPbDvX4sdZf36FlnWl9qaDEetbITTZMyfav*xhyjH3LCjehxvPeT6c8FGbW09ec1k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZo1vv8MJCub37ypr2qJACMRLW6gvPEkETyppHmVQU4QYt5ACEQBpKhbzRlfApOJRbq0DKbkfuD.xB9fOWs0KF0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbgk5cjtOsW942xrgmhyUVDjc0Np1K.CLQLhbr4Pzd4pZgv4cQ1Hie*StFve2t.Ds5AgcLQuz6CAFmUAvYFZJlw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW*g4RwRCZ9VPgyT2Y5YkvhsFXDXyKf91ag8wSwq9pEe5zncGo*IyFQEU92v5I2a9rnifXf0MeMzabnFd6A9oKs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTmBHj8IrQ*OhcUjixA4Cbnq6KWIlMv6DVEEHXXKSePStZYSP1O4RNQpm6W.xw2gsmpy5YcJ6VuTOpWhA.6U6iA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRx5WW6ySOzfpKBb*upHrjo8uCeTQoaZTuKEX*nhOH4X60TVWk99XPrFNE*BL98IyBe6YFMOTpiYcrI34.O2M5w!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUE7IyLf5bvOjgAXoyhieQY9lDa1gRiHXd4vC2tmTmrSPW.SPd84yI6lpmR.1AYU*ZYphj99YeM4kOF0U2S9iwU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRBU*PVnrIpkYf7axo4xaOZyBXuza4*3OfQY1hECRsN9W0ZFEEIfK8dp3HdCM4ev5ksgMQoPu4X*Bs8DeoQczow!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSAZ.jptery6KUOgKegAeGzexuqfdA8igAFP*23OiC4iHZuGAetb5PNW0slKOHG9iQm36s727HXbbiG6WDI3zGI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfL7yVy*1FOBWrr61CIlyYq.rXR3qJ7mlAZ7orobY3vQPm8LZ2YE01HjaKdyVbzfbXw.k7u66XBBZVXGXPn45cc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdN8htaPvPykb9ZVlhSoPMfdc7S*C*vT5XjnE1s3OagSaFoQBTSUpzncUCIyEPlS0oJx9EN7yYomrPj.AO7f3TI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Scf..thGmXCm8pmdPgqqa*P2GXH6IuIBFggpoWw9iMqFssUMXc1XWOhfxWZGbIzp6WDrSgoh1pfVB.q5wZB1MGg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STTS3HbmDlB0PNyBrxJWtA89CmLkT2AQkHbvsJsvu5pNSvEMEg9totT4M5ZyelqPw2r6E3NUvieOU5spSUy8d8E!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 8; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N9_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZo1vv8MJCub37ypr2qJACMRLW6gvPEkETyppHmVQU4QYt5ACEQBpKhbzRlfApOJRbq0DKbkfuD.xB9fOWs0KF0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfJFuMIOBtRtBYlVdCJFUQZ2ayhBpTosXIpf3oNFoMcRTGXQIrR9WLDU8rcOQcfsXCn3AqHNBx*17ECwTU5ddOY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqarqjsOpTzE7eM**4cf21H9zM5XXybqwSmnttzzmJu2GkPdSaHHKQHuyRH4veChL2ylPgh64hQR5qzYIIaLauk4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXBeVXdDd2RtAJfkiJDoKUXIpqu.BU8Tj2l3My9u5z8mthOyxtgC6Qh7UYsVItnDpo.iz0z*mbwt.TeRCS160.Q!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUgEDb3reAKaNJ6yMo4*QOdPbDvX4sdZf36FlnWl9qaDEetbITTZMyfav*xhyjH3LCjehxvPeT6c8FGbW09ec1k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZo1vv8MJCub37ypr2qJACMRLW6gvPEkETyppHmVQU4QYt5ACEQBpKhbzRlfApOJRbq0DKbkfuD.xB9fOWs0KF0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbgk5cjtOsW942xrgmhyUVDjc0Np1K.CLQLhbr4Pzd4pZgv4cQ1Hie*StFve2t.Ds5AgcLQuz6CAFmUAvYFZJlw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW*g4RwRCZ9VPgyT2Y5YkvhsFXDXyKf91ag8wSwq9pEe5zncGo*IyFQEU92v5I2a9rnifXf0MeMzabnFd6A9oKs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTmBHj8IrQ*OhcUjixA4Cbnq6KWIlMv6DVEEHXXKSePStZYSP1O4RNQpm6W.xw2gsmpy5YcJ6VuTOpWhA.6U6iA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRx5WW6ySOzfpKBb*upHrjo8uCeTQoaZTuKEX*nhOH4X60TVWk99XPrFNE*BL98IyBe6YFMOTpiYcrI34.O2M5w!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUE7IyLf5bvOjgAXoyhieQY9lDa1gRiHXd4vC2tmTmrSPW.SPd84yI6lpmR.1AYU*ZYphj99YeM4kOF0U2S9iwU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRBU*PVnrIpkYf7axo4xaOZyBXuza4*3OfQY1hECRsN9W0ZFEEIfK8dp3HdCM4ev5ksgMQoPu4X*Bs8DeoQczow!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSAZ.jptery6KUOgKegAeGzexuqfdA8igAFP*23OiC4iHZuGAetb5PNW0slKOHG9iQm36s727HXbbiG6WDI3zGI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfL7yVy*1FOBWrr61CIlyYq.rXR3qJ7mlAZ7orobY3vQPm8LZ2YE01HjaKdyVbzfbXw.k7u66XBBZVXGXPn45cc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdN8htaPvPykb9ZVlhSoPMfdc7S*C*vT5XjnE1s3OagSaFoQBTSUpzncUCIyEPlS0oJx9EN7yYomrPj.AO7f3TI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Scf..thGmXCm8pmdPgqqa*P2GXH6IuIBFggpoWw9iMqFssUMXc1XWOhfxWZGbIzp6WDrSgoh1pfVB.q5wZB1MGg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STTS3HbmDlB0PNyBrxJWtA89CmLkT2AQkHbvsJsvu5pNSvEMEg9totT4M5ZyelqPw2r6E3NUvieOU5spSUy8d8E!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 8; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N9_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbgk5cjtOsW942xrgmhyUVDjc0Np1K.CLQLhbr4Pzd4pZgv4cQ1Hie*StFve2t.Ds5AgcLQuz6CAFmUAvYFZJlw!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfJFuMIOBtRtBYlVdCJFUQZ2ayhBpTosXIpf3oNFoMcRTGXQIrR9WLDU8rcOQcfsXCn3AqHNBx*17ECwTU5ddOY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqarqjsOpTzE7eM**4cf21H9zM5XXybqwSmnttzzmJu2GkPdSaHHKQHuyRH4veChL2ylPgh64hQR5qzYIIaLauk4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXBeVXdDd2RtAJfkiJDoKUXIpqu.BU8Tj2l3My9u5z8mthOyxtgC6Qh7UYsVItnDpo.iz0z*mbwt.TeRCS160.Q!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUgEDb3reAKaNJ6yMo4*QOdPbDvX4sdZf36FlnWl9qaDEetbITTZMyfav*xhyjH3LCjehxvPeT6c8FGbW09ec1k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZo1vv8MJCub37ypr2qJACMRLW6gvPEkETyppHmVQU4QYt5ACEQBpKhbzRlfApOJRbq0DKbkfuD.xB9fOWs0KF0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbgk5cjtOsW942xrgmhyUVDjc0Np1K.CLQLhbr4Pzd4pZgv4cQ1Hie*StFve2t.Ds5AgcLQuz6CAFmUAvYFZJlw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW*g4RwRCZ9VPgyT2Y5YkvhsFXDXyKf91ag8wSwq9pEe5zncGo*IyFQEU92v5I2a9rnifXf0MeMzabnFd6A9oKs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTmBHj8IrQ*OhcUjixA4Cbnq6KWIlMv6DVEEHXXKSePStZYSP1O4RNQpm6W.xw2gsmpy5YcJ6VuTOpWhA.6U6iA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRx5WW6ySOzfpKBb*upHrjo8uCeTQoaZTuKEX*nhOH4X60TVWk99XPrFNE*BL98IyBe6YFMOTpiYcrI34.O2M5w!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUE7IyLf5bvOjgAXoyhieQY9lDa1gRiHXd4vC2tmTmrSPW.SPd84yI6lpmR.1AYU*ZYphj99YeM4kOF0U2S9iwU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRBU*PVnrIpkYf7axo4xaOZyBXuza4*3OfQY1hECRsN9W0ZFEEIfK8dp3HdCM4ev5ksgMQoPu4X*Bs8DeoQczow!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSAZ.jptery6KUOgKegAeGzexuqfdA8igAFP*23OiC4iHZuGAetb5PNW0slKOHG9iQm36s727HXbbiG6WDI3zGI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfL7yVy*1FOBWrr61CIlyYq.rXR3qJ7mlAZ7orobY3vQPm8LZ2YE01HjaKdyVbzfbXw.k7u66XBBZVXGXPn45cc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdN8htaPvPykb9ZVlhSoPMfdc7S*C*vT5XjnE1s3OagSaFoQBTSUpzncUCIyEPlS0oJx9EN7yYomrPj.AO7f3TI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Scf..thGmXCm8pmdPgqqa*P2GXH6IuIBFggpoWw9iMqFssUMXc1XWOhfxWZGbIzp6WDrSgoh1pfVB.q5wZB1MGg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STTS3HbmDlB0PNyBrxJWtA89CmLkT2AQkHbvsJsvu5pNSvEMEg9totT4M5ZyelqPw2r6E3NUvieOU5spSUy8d8E!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 8; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N9_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW*g4RwRCZ9VPgyT2Y5YkvhsFXDXyKf91ag8wSwq9pEe5zncGo*IyFQEU92v5I2a9rnifXf0MeMzabnFd6A9oKs!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfJFuMIOBtRtBYlVdCJFUQZ2ayhBpTosXIpf3oNFoMcRTGXQIrR9WLDU8rcOQcfsXCn3AqHNBx*17ECwTU5ddOY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqarqjsOpTzE7eM**4cf21H9zM5XXybqwSmnttzzmJu2GkPdSaHHKQHuyRH4veChL2ylPgh64hQR5qzYIIaLauk4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXBeVXdDd2RtAJfkiJDoKUXIpqu.BU8Tj2l3My9u5z8mthOyxtgC6Qh7UYsVItnDpo.iz0z*mbwt.TeRCS160.Q!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUgEDb3reAKaNJ6yMo4*QOdPbDvX4sdZf36FlnWl9qaDEetbITTZMyfav*xhyjH3LCjehxvPeT6c8FGbW09ec1k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZo1vv8MJCub37ypr2qJACMRLW6gvPEkETyppHmVQU4QYt5ACEQBpKhbzRlfApOJRbq0DKbkfuD.xB9fOWs0KF0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbgk5cjtOsW942xrgmhyUVDjc0Np1K.CLQLhbr4Pzd4pZgv4cQ1Hie*StFve2t.Ds5AgcLQuz6CAFmUAvYFZJlw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW*g4RwRCZ9VPgyT2Y5YkvhsFXDXyKf91ag8wSwq9pEe5zncGo*IyFQEU92v5I2a9rnifXf0MeMzabnFd6A9oKs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTmBHj8IrQ*OhcUjixA4Cbnq6KWIlMv6DVEEHXXKSePStZYSP1O4RNQpm6W.xw2gsmpy5YcJ6VuTOpWhA.6U6iA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRx5WW6ySOzfpKBb*upHrjo8uCeTQoaZTuKEX*nhOH4X60TVWk99XPrFNE*BL98IyBe6YFMOTpiYcrI34.O2M5w!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUE7IyLf5bvOjgAXoyhieQY9lDa1gRiHXd4vC2tmTmrSPW.SPd84yI6lpmR.1AYU*ZYphj99YeM4kOF0U2S9iwU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRBU*PVnrIpkYf7axo4xaOZyBXuza4*3OfQY1hECRsN9W0ZFEEIfK8dp3HdCM4ev5ksgMQoPu4X*Bs8DeoQczow!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSAZ.jptery6KUOgKegAeGzexuqfdA8igAFP*23OiC4iHZuGAetb5PNW0slKOHG9iQm36s727HXbbiG6WDI3zGI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfL7yVy*1FOBWrr61CIlyYq.rXR3qJ7mlAZ7orobY3vQPm8LZ2YE01HjaKdyVbzfbXw.k7u66XBBZVXGXPn45cc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdN8htaPvPykb9ZVlhSoPMfdc7S*C*vT5XjnE1s3OagSaFoQBTSUpzncUCIyEPlS0oJx9EN7yYomrPj.AO7f3TI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Scf..thGmXCm8pmdPgqqa*P2GXH6IuIBFggpoWw9iMqFssUMXc1XWOhfxWZGbIzp6WDrSgoh1pfVB.q5wZB1MGg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STTS3HbmDlB0PNyBrxJWtA89CmLkT2AQkHbvsJsvu5pNSvEMEg9totT4M5ZyelqPw2r6E3NUvieOU5spSUy8d8E!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 8; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N9_8', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTmBHj8IrQ*OhcUjixA4Cbnq6KWIlMv6DVEEHXXKSePStZYSP1O4RNQpm6W.xw2gsmpy5YcJ6VuTOpWhA.6U6iA!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqfJFuMIOBtRtBYlVdCJFUQZ2ayhBpTosXIpf3oNFoMcRTGXQIrR9WLDU8rcOQcfsXCn3AqHNBx*17ECwTU5ddOY!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqarqjsOpTzE7eM**4cf21H9zM5XXybqwSmnttzzmJu2GkPdSaHHKQHuyRH4veChL2ylPgh64hQR5qzYIIaLauk4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqXBeVXdDd2RtAJfkiJDoKUXIpqu.BU8Tj2l3My9u5z8mthOyxtgC6Qh7UYsVItnDpo.iz0z*mbwt.TeRCS160.Q!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUgEDb3reAKaNJ6yMo4*QOdPbDvX4sdZf36FlnWl9qaDEetbITTZMyfav*xhyjH3LCjehxvPeT6c8FGbW09ec1k!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqZo1vv8MJCub37ypr2qJACMRLW6gvPEkETyppHmVQU4QYt5ACEQBpKhbzRlfApOJRbq0DKbkfuD.xB9fOWs0KF0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqbgk5cjtOsW942xrgmhyUVDjc0Np1K.CLQLhbr4Pzd4pZgv4cQ1Hie*StFve2t.Ds5AgcLQuz6CAFmUAvYFZJlw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqW*g4RwRCZ9VPgyT2Y5YkvhsFXDXyKf91ag8wSwq9pEe5zncGo*IyFQEU92v5I2a9rnifXf0MeMzabnFd6A9oKs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTmBHj8IrQ*OhcUjixA4Cbnq6KWIlMv6DVEEHXXKSePStZYSP1O4RNQpm6W.xw2gsmpy5YcJ6VuTOpWhA.6U6iA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRx5WW6ySOzfpKBb*upHrjo8uCeTQoaZTuKEX*nhOH4X60TVWk99XPrFNE*BL98IyBe6YFMOTpiYcrI34.O2M5w!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUE7IyLf5bvOjgAXoyhieQY9lDa1gRiHXd4vC2tmTmrSPW.SPd84yI6lpmR.1AYU*ZYphj99YeM4kOF0U2S9iwU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRBU*PVnrIpkYf7axo4xaOZyBXuza4*3OfQY1hECRsN9W0ZFEEIfK8dp3HdCM4ev5ksgMQoPu4X*Bs8DeoQczow!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSAZ.jptery6KUOgKegAeGzexuqfdA8igAFP*23OiC4iHZuGAetb5PNW0slKOHG9iQm36s727HXbbiG6WDI3zGI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfL7yVy*1FOBWrr61CIlyYq.rXR3qJ7mlAZ7orobY3vQPm8LZ2YE01HjaKdyVbzfbXw.k7u66XBBZVXGXPn45cc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdN8htaPvPykb9ZVlhSoPMfdc7S*C*vT5XjnE1s3OagSaFoQBTSUpzncUCIyEPlS0oJx9EN7yYomrPj.AO7f3TI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Scf..thGmXCm8pmdPgqqa*P2GXH6IuIBFggpoWw9iMqFssUMXc1XWOhfxWZGbIzp6WDrSgoh1pfVB.q5wZB1MGg!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STTS3HbmDlB0PNyBrxJWtA89CmLkT2AQkHbvsJsvu5pNSvEMEg9totT4M5ZyelqPw2r6E3NUvieOU5spSUy8d8E!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 8; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg8')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N8_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N8_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N8_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N8_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N8_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N8_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N8_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N8_8', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg8')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_XC_N8_9', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqY9eNuXH2tZ3DJCOD2hjmo7bq79t8bdr6kRe3ingWt9TOKeGFR2kz*XKhHLDj7yZEYaQVs52QP5RD1AZMCKBOvs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqUJlPKJ2g3HqA250i0qlkqDOrvJHU0SxhO7JZ794AVFJZ1VmUfbZ2LKgAm8GWPxmVX5gxPr*oKk4aM539ReSpmA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqVYgqLMHeCkxJhRWdTcxABy*WQuD3jJRpwZz9r2iGY121.PsYOs4djAoBJtY7vDMuiL1GufXJ*pc4aIEoe9bkB8!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqX8mGP8dwDSJQrVtgKhxJS4cnIEn2j5ccG7sX1urkkfT3S8GNyCW17VX7KYZGRrjGipcjRjMmSklr*OxGGmpQU4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaGGO9oqgMpvzRfnng8QqiXypy*h1VFkKnq920OptUKiCUnPl5M1SSMvF5wP.oFFXf0xlvMRvxFGabVoDu*8RHQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqaxEvxdGeZ7S2kPndQPgtKagGV075kMADRchHegM6YOaskcTBUKg13FrKK*ZExSzCk5oUlkizWdLuiM724dKy3o!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqWUDc8aHP7KBwSpr6*MbOrrgGOh1lG0sg0DABGTD*LSv.5BARGksuLWDTxTNrDMgqMdV.dI8QLQtlNLTcRxCHww!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqQTdnZpTyTjWTo0fQTeqQaF1uPBmm9uMMS2J4hc9h0Kx.BU9BFZiBqNYQUnSBIEDQlmTl2yV.TDPuMI0eUHx4C4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/bqQfVz5yrrGYSXMvKr.cqTQd2IDnGpsLQPk.WUQ2YMFIFEfPC2A1Y7PSyKk1zb3jRpGQ*mJv1232KUgv0K5f8ODV68V7jjZ5TOQP4*H5Vec!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZOQjodqXQAnFtU7M6Z.N2YwHzhu6byALnrdGnupu2NaReNWUygZyvljdFs0c*MbafPVfbR3WDW3.ay7pBx1F4c!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVgM9*m8APViI.6oXMY7Op1mZ*OTOrCcNASBkzh5Thndyp9aEqeLj3UmqrJUPo0rNsnXfz7Eb3PH.mL0KHlvP2U!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYlA5EmI4vut.tsfRMPoDQFyHMOycF4Lkfk45g8Dau0Uq1C41xR4FDmzXVZ9q5hUe8hWTFHLgTUU6m8btXvlxWE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY*AFxF0RSusLIaT4F5rKca3RuBJcCz9uNv4anBado2figCWgrxH*URWmKkDMEy1.bRZwYH3B4HHh*B52hd64PU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sb0zQiKUdJrVtpmh.O9jpD6CDS52C1VJPzkOyAXxLDhPsLwCRSQp2IVAlBLVuQn*b5*p0AvdIixZ3xJEORuI1KU!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY2qrBx6iU*HoCjpHeYxyNUP*z.O2p3AMX*M5DOyAV03Bhf2eueqoBcw58zl85KCTH9rlO25BblUAeW.C4d0P0g!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQKpIWTtI8Qm*y5mA..xJGuEyFVK73J57Zk280rrbeVVDnDy1lZltP3rEiNmveZu8fHIwCGXTUlHawf6qeCoCyI!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdnqW.HzTKkB7uBt6XEb8ekihkhQqJFG0G3y6HBX970682vYUBSSOyDXFIBmRgTaZkc2uDAyay1ezapzE1j8sdo!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYmpoUZYk38SZV*9DkU3rrSfETZMDys3HpO3HDLIXql2IiH4SVO3FFk8YeFBzE6kxR8pswki25mNdx7QEQa*Vzs!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg9')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2022_3_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQCCD8qBqLWoVkRex6rAFKnOW3nKoYiO7v2eo38V*1aEXMfzid3iYmdsHOc5kjpSqbsahAhNvnlN0kI6*TPGaw4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQCCD8qBqLWoVkRex6rAFKnOW3nKoYiO7v2eo38V*1aEXMfzid3iYmdsHOc5kjpSqbsahAhNvnlN0kI6*TPGaw4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQCCD8qBqLWoVkRex6rAFKnOW3nKoYiO7v2eo38V*1aEXMfzid3iYmdsHOc5kjpSqbsahAhNvnlN0kI6*TPGaw4!/mnull&bo=QAZVCEAGVQgBByA!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 1; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2022_5_23_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUHZNAiAHrgnGc9xDR3OMhnVJa4VocmSjczopbyV5rO1GtPAOXrRQLVD3L1*KUcRTGHAjHt9Mjpaz.wEFnY1xHA!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUHZNAiAHrgnGc9xDR3OMhnVJa4VocmSjczopbyV5rO1GtPAOXrRQLVD3L1*KUcRTGHAjHt9Mjpaz.wEFnY1xHA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQYIg6l085Qwf32DL1D7oWQ*uVKFp7gXedrf7by5J2ywlBq*gvyw5og9SeHoOFqOgqGNRTivFSfDnUfG4hIhjuA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYEo4K*C7YsutEDKmQPEMeadaNdwf9*nITA8s*RnRjqqu9oYhklX9..Bv3MkBhiy0ZQl8SvQ68FFzvbPeSClPqs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYrPJTCsu6Z.c9rJGx9e8Y3rkg9uCoSe30lNiCopjzRDksGNUHVEVVC8YL6q.4m8qkPNi2ZlmDQ5VPxVt.c9hxI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZTPkh1tiRgYP1EZwIZskxeHMsXIMKIttoSE7ig24hnxUqgIv.Pd0cv1TQUstnu70uuREo8s3BYx1LaJoa1FS4U!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdTpRCpUS2WQiJy12DM1VMctvflX7hgKWhePWIqrM0.6beNO3y9l1PvoLOJZatJGCiPURpauY.6NoH2tPVBlmzg!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sdwca25wmH0DCmmwCtxAiBg.aAO7AoNSONGxNfKcsGONEnRjK4u7I2kN.hZkDcudAWS630QyRg3GrR51*r2v1s4!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW4uLPn5WdCukln0JFuNA.pQg29gNsLos8PGARJGqdZnPcD8bKUxbTEd2NYKgwFhhoA6.Ej23i*b4oSRjRv5K6w!/mnull&bo=sAC0ALAAtAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2022_5_23_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQYIg6l085Qwf32DL1D7oWQ*uVKFp7gXedrf7by5J2ywlBq*gvyw5og9SeHoOFqOgqGNRTivFSfDnUfG4hIhjuA!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUHZNAiAHrgnGc9xDR3OMhnVJa4VocmSjczopbyV5rO1GtPAOXrRQLVD3L1*KUcRTGHAjHt9Mjpaz.wEFnY1xHA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQYIg6l085Qwf32DL1D7oWQ*uVKFp7gXedrf7by5J2ywlBq*gvyw5og9SeHoOFqOgqGNRTivFSfDnUfG4hIhjuA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYEo4K*C7YsutEDKmQPEMeadaNdwf9*nITA8s*RnRjqqu9oYhklX9..Bv3MkBhiy0ZQl8SvQ68FFzvbPeSClPqs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYrPJTCsu6Z.c9rJGx9e8Y3rkg9uCoSe30lNiCopjzRDksGNUHVEVVC8YL6q.4m8qkPNi2ZlmDQ5VPxVt.c9hxI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZTPkh1tiRgYP1EZwIZskxeHMsXIMKIttoSE7ig24hnxUqgIv.Pd0cv1TQUstnu70uuREo8s3BYx1LaJoa1FS4U!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdTpRCpUS2WQiJy12DM1VMctvflX7hgKWhePWIqrM0.6beNO3y9l1PvoLOJZatJGCiPURpauY.6NoH2tPVBlmzg!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sdwca25wmH0DCmmwCtxAiBg.aAO7AoNSONGxNfKcsGONEnRjK4u7I2kN.hZkDcudAWS630QyRg3GrR51*r2v1s4!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW4uLPn5WdCukln0JFuNA.pQg29gNsLos8PGARJGqdZnPcD8bKUxbTEd2NYKgwFhhoA6.Ej23i*b4oSRjRv5K6w!/mnull&bo=sAC0ALAAtAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2022_5_23_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYEo4K*C7YsutEDKmQPEMeadaNdwf9*nITA8s*RnRjqqu9oYhklX9..Bv3MkBhiy0ZQl8SvQ68FFzvbPeSClPqs!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUHZNAiAHrgnGc9xDR3OMhnVJa4VocmSjczopbyV5rO1GtPAOXrRQLVD3L1*KUcRTGHAjHt9Mjpaz.wEFnY1xHA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQYIg6l085Qwf32DL1D7oWQ*uVKFp7gXedrf7by5J2ywlBq*gvyw5og9SeHoOFqOgqGNRTivFSfDnUfG4hIhjuA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYEo4K*C7YsutEDKmQPEMeadaNdwf9*nITA8s*RnRjqqu9oYhklX9..Bv3MkBhiy0ZQl8SvQ68FFzvbPeSClPqs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYrPJTCsu6Z.c9rJGx9e8Y3rkg9uCoSe30lNiCopjzRDksGNUHVEVVC8YL6q.4m8qkPNi2ZlmDQ5VPxVt.c9hxI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZTPkh1tiRgYP1EZwIZskxeHMsXIMKIttoSE7ig24hnxUqgIv.Pd0cv1TQUstnu70uuREo8s3BYx1LaJoa1FS4U!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdTpRCpUS2WQiJy12DM1VMctvflX7hgKWhePWIqrM0.6beNO3y9l1PvoLOJZatJGCiPURpauY.6NoH2tPVBlmzg!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sdwca25wmH0DCmmwCtxAiBg.aAO7AoNSONGxNfKcsGONEnRjK4u7I2kN.hZkDcudAWS630QyRg3GrR51*r2v1s4!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW4uLPn5WdCukln0JFuNA.pQg29gNsLos8PGARJGqdZnPcD8bKUxbTEd2NYKgwFhhoA6.Ej23i*b4oSRjRv5K6w!/mnull&bo=sAC0ALAAtAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2022_5_23_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYrPJTCsu6Z.c9rJGx9e8Y3rkg9uCoSe30lNiCopjzRDksGNUHVEVVC8YL6q.4m8qkPNi2ZlmDQ5VPxVt.c9hxI!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUHZNAiAHrgnGc9xDR3OMhnVJa4VocmSjczopbyV5rO1GtPAOXrRQLVD3L1*KUcRTGHAjHt9Mjpaz.wEFnY1xHA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://phototj.photo.store.qq.com/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqQYIg6l085Qwf32DL1D7oWQ*uVKFp7gXedrf7by5J2ywlBq*gvyw5og9SeHoOFqOgqGNRTivFSfDnUfG4hIhjuA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYEo4K*C7YsutEDKmQPEMeadaNdwf9*nITA8s*RnRjqqu9oYhklX9..Bv3MkBhiy0ZQl8SvQ68FFzvbPeSClPqs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqYrPJTCsu6Z.c9rJGx9e8Y3rkg9uCoSe30lNiCopjzRDksGNUHVEVVC8YL6q.4m8qkPNi2ZlmDQ5VPxVt.c9hxI!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZTPkh1tiRgYP1EZwIZskxeHMsXIMKIttoSE7ig24hnxUqgIv.Pd0cv1TQUstnu70uuREo8s3BYx1LaJoa1FS4U!/mnull&bo=rwCvAK8ArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SdTpRCpUS2WQiJy12DM1VMctvflX7hgKWhePWIqrM0.6beNO3y9l1PvoLOJZatJGCiPURpauY.6NoH2tPVBlmzg!/mnull&bo=rACvAKwArwADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Sdwca25wmH0DCmmwCtxAiBg.aAO7AoNSONGxNfKcsGONEnRjK4u7I2kN.hZkDcudAWS630QyRg3GrR51*r2v1s4!/mnull&bo=rACsAKwArAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SW4uLPn5WdCukln0JFuNA.pQg29gNsLos8PGARJGqdZnPcD8bKUxbTEd2NYKgwFhhoA6.Ej23i*b4oSRjRv5K6w!/mnull&bo=sAC0ALAAtAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2023_2_13_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqdXJ3i0qpV75BdOsxDH0Z*zl.s2XhbIedLdJ3l2bYwLDz.uybptJ9LDYlPtTgprlfKr*VeyrmkZOasRVjurWyKA!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqdXJ3i0qpV75BdOsxDH0Z*zl.s2XhbIedLdJ3l2bYwLDz.uybptJ9LDYlPtTgprlfKr*VeyrmkZOasRVjurWyKA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqShhIkxYHdw0ahVM6yc16ORPxGHMl.glBfMYJrYgnjl.n6gCQc3vSnKFz.QThIzV9OEo5f0nLjazBU.l.Ic1qKU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqTZul8.EcQ1zLWEIBa64fMd7QIxfRaItPjery8JH0INppA4oSU.F4wWFSD9O.B76IVCQFz22M9cHX4O7lYZwzNs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqT588Ld*kXBbuLZu2BGx26tJSCQ92VU05KVK7vLIGltZsGc2.TsU9qX9GVji*kdeU2GG4vO8JbVkO21KDB7PRco!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVrQKKDH4U3TWCFDKCY1MzmgQnvfroRUzdumga7i*ask9ejX.K5zyzyAlJb2q2i.10cYOArkRuXuJtskrq1QEbM!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ3VcRz535SSWd5EXnXUBcLa3kidFjTHLhHGDUa*TYnGOgoBShcDRfKvJCIWkXARaFifT8GRJjicJxx7TUJTe8!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SezNIsGNTbLtxGszSUMeADLTTk.DNTmYNdWW*Wxv22UlqTW.*JKwzdWfYZ8iLourvEdgd9.vT1P*947a5KZfiXU!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXc151LmuqvZxGyc3r*7.8oh9K4wv*lgzOGjbg6Vk*hHKtnI.7qerRugtW7qV3YxsCFP9ws9Cu.d2x.0*Frty0!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2023_2_13_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqShhIkxYHdw0ahVM6yc16ORPxGHMl.glBfMYJrYgnjl.n6gCQc3vSnKFz.QThIzV9OEo5f0nLjazBU.l.Ic1qKU!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqdXJ3i0qpV75BdOsxDH0Z*zl.s2XhbIedLdJ3l2bYwLDz.uybptJ9LDYlPtTgprlfKr*VeyrmkZOasRVjurWyKA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqShhIkxYHdw0ahVM6yc16ORPxGHMl.glBfMYJrYgnjl.n6gCQc3vSnKFz.QThIzV9OEo5f0nLjazBU.l.Ic1qKU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqTZul8.EcQ1zLWEIBa64fMd7QIxfRaItPjery8JH0INppA4oSU.F4wWFSD9O.B76IVCQFz22M9cHX4O7lYZwzNs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqT588Ld*kXBbuLZu2BGx26tJSCQ92VU05KVK7vLIGltZsGc2.TsU9qX9GVji*kdeU2GG4vO8JbVkO21KDB7PRco!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVrQKKDH4U3TWCFDKCY1MzmgQnvfroRUzdumga7i*ask9ejX.K5zyzyAlJb2q2i.10cYOArkRuXuJtskrq1QEbM!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ3VcRz535SSWd5EXnXUBcLa3kidFjTHLhHGDUa*TYnGOgoBShcDRfKvJCIWkXARaFifT8GRJjicJxx7TUJTe8!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SezNIsGNTbLtxGszSUMeADLTTk.DNTmYNdWW*Wxv22UlqTW.*JKwzdWfYZ8iLourvEdgd9.vT1P*947a5KZfiXU!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXc151LmuqvZxGyc3r*7.8oh9K4wv*lgzOGjbg6Vk*hHKtnI.7qerRugtW7qV3YxsCFP9ws9Cu.d2x.0*Frty0!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2023_2_13_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqTZul8.EcQ1zLWEIBa64fMd7QIxfRaItPjery8JH0INppA4oSU.F4wWFSD9O.B76IVCQFz22M9cHX4O7lYZwzNs!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqdXJ3i0qpV75BdOsxDH0Z*zl.s2XhbIedLdJ3l2bYwLDz.uybptJ9LDYlPtTgprlfKr*VeyrmkZOasRVjurWyKA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqShhIkxYHdw0ahVM6yc16ORPxGHMl.glBfMYJrYgnjl.n6gCQc3vSnKFz.QThIzV9OEo5f0nLjazBU.l.Ic1qKU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqTZul8.EcQ1zLWEIBa64fMd7QIxfRaItPjery8JH0INppA4oSU.F4wWFSD9O.B76IVCQFz22M9cHX4O7lYZwzNs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqT588Ld*kXBbuLZu2BGx26tJSCQ92VU05KVK7vLIGltZsGc2.TsU9qX9GVji*kdeU2GG4vO8JbVkO21KDB7PRco!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVrQKKDH4U3TWCFDKCY1MzmgQnvfroRUzdumga7i*ask9ejX.K5zyzyAlJb2q2i.10cYOArkRuXuJtskrq1QEbM!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ3VcRz535SSWd5EXnXUBcLa3kidFjTHLhHGDUa*TYnGOgoBShcDRfKvJCIWkXARaFifT8GRJjicJxx7TUJTe8!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SezNIsGNTbLtxGszSUMeADLTTk.DNTmYNdWW*Wxv22UlqTW.*JKwzdWfYZ8iLourvEdgd9.vT1P*947a5KZfiXU!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXc151LmuqvZxGyc3r*7.8oh9K4wv*lgzOGjbg6Vk*hHKtnI.7qerRugtW7qV3YxsCFP9ws9Cu.d2x.0*Frty0!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2023_2_13_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqT588Ld*kXBbuLZu2BGx26tJSCQ92VU05KVK7vLIGltZsGc2.TsU9qX9GVji*kdeU2GG4vO8JbVkO21KDB7PRco!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqdXJ3i0qpV75BdOsxDH0Z*zl.s2XhbIedLdJ3l2bYwLDz.uybptJ9LDYlPtTgprlfKr*VeyrmkZOasRVjurWyKA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqShhIkxYHdw0ahVM6yc16ORPxGHMl.glBfMYJrYgnjl.n6gCQc3vSnKFz.QThIzV9OEo5f0nLjazBU.l.Ic1qKU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqTZul8.EcQ1zLWEIBa64fMd7QIxfRaItPjery8JH0INppA4oSU.F4wWFSD9O.B76IVCQFz22M9cHX4O7lYZwzNs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqT588Ld*kXBbuLZu2BGx26tJSCQ92VU05KVK7vLIGltZsGc2.TsU9qX9GVji*kdeU2GG4vO8JbVkO21KDB7PRco!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVrQKKDH4U3TWCFDKCY1MzmgQnvfroRUzdumga7i*ask9ejX.K5zyzyAlJb2q2i.10cYOArkRuXuJtskrq1QEbM!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ3VcRz535SSWd5EXnXUBcLa3kidFjTHLhHGDUa*TYnGOgoBShcDRfKvJCIWkXARaFifT8GRJjicJxx7TUJTe8!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SezNIsGNTbLtxGszSUMeADLTTk.DNTmYNdWW*Wxv22UlqTW.*JKwzdWfYZ8iLourvEdgd9.vT1P*947a5KZfiXU!/mnull&bo=rgCuAK4ArgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SbXc151LmuqvZxGyc3r*7.8oh9K4wv*lgzOGjbg6Vk*hHKtnI.7qerRugtW7qV3YxsCFP9ws9Cu.d2x.0*Frty0!/mnull&bo=rwCwAK8AsAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2023_4_1_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqXIAu2OqjncL4qchQtf8Q23r505BSPf3MPBVOYjul4PSHvrHgbe*HC*ZtiPQhUEcejW8WLoBs80i9T2Jv1rQuBM!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqXIAu2OqjncL4qchQtf8Q23r505BSPf3MPBVOYjul4PSHvrHgbe*HC*ZtiPQhUEcejW8WLoBs80i9T2Jv1rQuBM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqZiV*tcD0AMAvJibSuWWKF6Ayf5JS0UD8h0OfJAAMfForQAuAwjGnihpQw.S4CDGcOggw8OoODgwlRlUCom5HSw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUt8BiIl3r3kB7EY5Avux6cDv0.Fo1V7S4syCtPBKLgF9bHNtocO2nn4DBRRjFOFSz.X33KGjdg8YP6QH.cJi0U!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqb0f6DhuQuStwXYVPwRiG9HXb2AbZ3RA0Xpx36QCsVaFx*OhLzSq9HoEnr83iSPdkjzsVBaarnC1lgz6T7uH0Ls!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZqCVT.VzxGNbYzhZiNdGbR8j9YMReYaxu.3B2dUpy8sxuq0Ynm.aywUNqaUvNKNwK98u30gGsO3IXdA0wbmHNw!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSTZTrfF8pddK2HtRcP7dF7JwJzT3BgR4r7ozSBfCI4YjHq3PIQb*aVm9pl5twfjRM8JzRK8AWq*pDfZxv0gto4!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR6jDbiSqPr1DkY7.zljEAxliWK.67PcFlYy5D.BMhZARyJAKedPhIARS11rpwLx3bomP08H8pjAGGaL5Zuw25U!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUoMq3UL2AZS*DmXpyU20xLJ0TABipD9VSjA3t9xiv8WIx6GLtAYjgGkmKqzl2dR1V9mQWlWdnptlVWn3e21LwE!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2023_4_1_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqZiV*tcD0AMAvJibSuWWKF6Ayf5JS0UD8h0OfJAAMfForQAuAwjGnihpQw.S4CDGcOggw8OoODgwlRlUCom5HSw!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqXIAu2OqjncL4qchQtf8Q23r505BSPf3MPBVOYjul4PSHvrHgbe*HC*ZtiPQhUEcejW8WLoBs80i9T2Jv1rQuBM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqZiV*tcD0AMAvJibSuWWKF6Ayf5JS0UD8h0OfJAAMfForQAuAwjGnihpQw.S4CDGcOggw8OoODgwlRlUCom5HSw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUt8BiIl3r3kB7EY5Avux6cDv0.Fo1V7S4syCtPBKLgF9bHNtocO2nn4DBRRjFOFSz.X33KGjdg8YP6QH.cJi0U!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqb0f6DhuQuStwXYVPwRiG9HXb2AbZ3RA0Xpx36QCsVaFx*OhLzSq9HoEnr83iSPdkjzsVBaarnC1lgz6T7uH0Ls!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZqCVT.VzxGNbYzhZiNdGbR8j9YMReYaxu.3B2dUpy8sxuq0Ynm.aywUNqaUvNKNwK98u30gGsO3IXdA0wbmHNw!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSTZTrfF8pddK2HtRcP7dF7JwJzT3BgR4r7ozSBfCI4YjHq3PIQb*aVm9pl5twfjRM8JzRK8AWq*pDfZxv0gto4!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR6jDbiSqPr1DkY7.zljEAxliWK.67PcFlYy5D.BMhZARyJAKedPhIARS11rpwLx3bomP08H8pjAGGaL5Zuw25U!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUoMq3UL2AZS*DmXpyU20xLJ0TABipD9VSjA3t9xiv8WIx6GLtAYjgGkmKqzl2dR1V9mQWlWdnptlVWn3e21LwE!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2023_4_1_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUt8BiIl3r3kB7EY5Avux6cDv0.Fo1V7S4syCtPBKLgF9bHNtocO2nn4DBRRjFOFSz.X33KGjdg8YP6QH.cJi0U!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqXIAu2OqjncL4qchQtf8Q23r505BSPf3MPBVOYjul4PSHvrHgbe*HC*ZtiPQhUEcejW8WLoBs80i9T2Jv1rQuBM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqZiV*tcD0AMAvJibSuWWKF6Ayf5JS0UD8h0OfJAAMfForQAuAwjGnihpQw.S4CDGcOggw8OoODgwlRlUCom5HSw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUt8BiIl3r3kB7EY5Avux6cDv0.Fo1V7S4syCtPBKLgF9bHNtocO2nn4DBRRjFOFSz.X33KGjdg8YP6QH.cJi0U!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqb0f6DhuQuStwXYVPwRiG9HXb2AbZ3RA0Xpx36QCsVaFx*OhLzSq9HoEnr83iSPdkjzsVBaarnC1lgz6T7uH0Ls!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZqCVT.VzxGNbYzhZiNdGbR8j9YMReYaxu.3B2dUpy8sxuq0Ynm.aywUNqaUvNKNwK98u30gGsO3IXdA0wbmHNw!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSTZTrfF8pddK2HtRcP7dF7JwJzT3BgR4r7ozSBfCI4YjHq3PIQb*aVm9pl5twfjRM8JzRK8AWq*pDfZxv0gto4!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR6jDbiSqPr1DkY7.zljEAxliWK.67PcFlYy5D.BMhZARyJAKedPhIARS11rpwLx3bomP08H8pjAGGaL5Zuw25U!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUoMq3UL2AZS*DmXpyU20xLJ0TABipD9VSjA3t9xiv8WIx6GLtAYjgGkmKqzl2dR1V9mQWlWdnptlVWn3e21LwE!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2023_4_1_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqb0f6DhuQuStwXYVPwRiG9HXb2AbZ3RA0Xpx36QCsVaFx*OhLzSq9HoEnr83iSPdkjzsVBaarnC1lgz6T7uH0Ls!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqXIAu2OqjncL4qchQtf8Q23r505BSPf3MPBVOYjul4PSHvrHgbe*HC*ZtiPQhUEcejW8WLoBs80i9T2Jv1rQuBM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqZiV*tcD0AMAvJibSuWWKF6Ayf5JS0UD8h0OfJAAMfForQAuAwjGnihpQw.S4CDGcOggw8OoODgwlRlUCom5HSw!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqUt8BiIl3r3kB7EY5Avux6cDv0.Fo1V7S4syCtPBKLgF9bHNtocO2nn4DBRRjFOFSz.X33KGjdg8YP6QH.cJi0U!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqb0f6DhuQuStwXYVPwRiG9HXb2AbZ3RA0Xpx36QCsVaFx*OhLzSq9HoEnr83iSPdkjzsVBaarnC1lgz6T7uH0Ls!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SZqCVT.VzxGNbYzhZiNdGbR8j9YMReYaxu.3B2dUpy8sxuq0Ynm.aywUNqaUvNKNwK98u30gGsO3IXdA0wbmHNw!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSTZTrfF8pddK2HtRcP7dF7JwJzT3BgR4r7ozSBfCI4YjHq3PIQb*aVm9pl5twfjRM8JzRK8AWq*pDfZxv0gto4!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR6jDbiSqPr1DkY7.zljEAxliWK.67PcFlYy5D.BMhZARyJAKedPhIARS11rpwLx3bomP08H8pjAGGaL5Zuw25U!/mnull&bo=sQCyALEAsgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUoMq3UL2AZS*DmXpyU20xLJ0TABipD9VSjA3t9xiv8WIx6GLtAYjgGkmKqzl2dR1V9mQWlWdnptlVWn3e21LwE!/mnull&bo=tAC0ALQAtAADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 4; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2023_5_13', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqe1T3alAMbX2oHvULPY1tNe1RwBA2agc2GC0wEpn9cvZn5JJtemKjZV0OZn*KDNWom8RyZXP7WdxDEeWBuwwwZs!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqe1T3alAMbX2oHvULPY1tNe1RwBA2agc2GC0wEpn9cvZn5JJtemKjZV0OZn*KDNWom8RyZXP7WdxDEeWBuwwwZs!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/bqQfVz5yrrGYSXMvKr.cqe1T3alAMbX2oHvULPY1tNe1RwBA2agc2GC0wEpn9cvZn5JJtemKjZV0OZn*KDNWom8RyZXP7WdxDEeWBuwwwZs!/mnull&bo=QAYmCUAGJgkBByA!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 1; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2024_10_20_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SQ.b7v1OReGoSDKjtI8bP.gqynqYoNpEABz.zZPOgzSY5SQeBQsZ2JxDNc7Y5UxSas5rReq7z7DHmREOqKEoZD4!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SQ.b7v1OReGoSDKjtI8bP.gqynqYoNpEABz.zZPOgzSY5SQeBQsZ2JxDNc7Y5UxSas5rReq7z7DHmREOqKEoZD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SRgcfdtu*O7KhCdjxGIE0CG7yzA2e0EE4mkF7..oaJxJVJpskZhRUmw.4fWvnqawOFHat2*Av2KtLvl*AE5fD3M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SaTnR1FNZuDfeVJXgXr2cUmN8EAzdv70Q0dII.nVUB9oIRnHzhUwnSB8Vi7ZPwHFasyitkCe..yVL5gDklZEIn0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SerT7he4p.qN1NwOf5S2ocRsMbxgGe2QwkE7lpZGF9mMjzfaes9vTfHiaUBS*Mv151*SbFbAGpY7ttveT2ANep0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SZwOWTT2AWJwwdPBAErLwhrN5KHuZAUHHHCoBFha4gcyE*1I83H.GpTwLK5G5Bme0t.dc9ZnNiRk31Pj5UooEUY!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR0bX0X7508hWAvqIJmskWDUklyEUSkq0ahftHlVYwkmQkPDMGyFo8Nx8001l3w45E47KRttrWlRueVHn4wBKf4!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVu9Ajocot6JmLzr2jfK4uBCtRWozwE5SyFVlswKPu1HpDoLRfjhQFWyX10hIGbhvWLVj.inooArqdRH00RKu68!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ66FAdkC1kUMDFPN.eiWJc9AMkRg8oIAZYY3FFsGjsZljxB.KMPLxXe8Htvx1OS3xJKXgCSttn7vru*wx4AuY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STiOn00rK3WMA*HIQYCQ40KxEBo7206tGnRIwtxbG3Gu6Lv2QdUhbpcFPgVW0hEz.kcwWK.vC9j.y8YD49TSoWY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXatEkVMwjLXl9ilsmpSvvLw1ZdMo5r.GHDOqtdzkwAyVBmXG*V3uF261ZgUtZWjNGsj4*zxONi8*7dBFTDnQYc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 5; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2024_10_20_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SRgcfdtu*O7KhCdjxGIE0CG7yzA2e0EE4mkF7..oaJxJVJpskZhRUmw.4fWvnqawOFHat2*Av2KtLvl*AE5fD3M!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SQ.b7v1OReGoSDKjtI8bP.gqynqYoNpEABz.zZPOgzSY5SQeBQsZ2JxDNc7Y5UxSas5rReq7z7DHmREOqKEoZD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SRgcfdtu*O7KhCdjxGIE0CG7yzA2e0EE4mkF7..oaJxJVJpskZhRUmw.4fWvnqawOFHat2*Av2KtLvl*AE5fD3M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SaTnR1FNZuDfeVJXgXr2cUmN8EAzdv70Q0dII.nVUB9oIRnHzhUwnSB8Vi7ZPwHFasyitkCe..yVL5gDklZEIn0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SerT7he4p.qN1NwOf5S2ocRsMbxgGe2QwkE7lpZGF9mMjzfaes9vTfHiaUBS*Mv151*SbFbAGpY7ttveT2ANep0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SZwOWTT2AWJwwdPBAErLwhrN5KHuZAUHHHCoBFha4gcyE*1I83H.GpTwLK5G5Bme0t.dc9ZnNiRk31Pj5UooEUY!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR0bX0X7508hWAvqIJmskWDUklyEUSkq0ahftHlVYwkmQkPDMGyFo8Nx8001l3w45E47KRttrWlRueVHn4wBKf4!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVu9Ajocot6JmLzr2jfK4uBCtRWozwE5SyFVlswKPu1HpDoLRfjhQFWyX10hIGbhvWLVj.inooArqdRH00RKu68!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ66FAdkC1kUMDFPN.eiWJc9AMkRg8oIAZYY3FFsGjsZljxB.KMPLxXe8Htvx1OS3xJKXgCSttn7vru*wx4AuY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STiOn00rK3WMA*HIQYCQ40KxEBo7206tGnRIwtxbG3Gu6Lv2QdUhbpcFPgVW0hEz.kcwWK.vC9j.y8YD49TSoWY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXatEkVMwjLXl9ilsmpSvvLw1ZdMo5r.GHDOqtdzkwAyVBmXG*V3uF261ZgUtZWjNGsj4*zxONi8*7dBFTDnQYc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 5; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2024_10_20_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SaTnR1FNZuDfeVJXgXr2cUmN8EAzdv70Q0dII.nVUB9oIRnHzhUwnSB8Vi7ZPwHFasyitkCe..yVL5gDklZEIn0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SQ.b7v1OReGoSDKjtI8bP.gqynqYoNpEABz.zZPOgzSY5SQeBQsZ2JxDNc7Y5UxSas5rReq7z7DHmREOqKEoZD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SRgcfdtu*O7KhCdjxGIE0CG7yzA2e0EE4mkF7..oaJxJVJpskZhRUmw.4fWvnqawOFHat2*Av2KtLvl*AE5fD3M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SaTnR1FNZuDfeVJXgXr2cUmN8EAzdv70Q0dII.nVUB9oIRnHzhUwnSB8Vi7ZPwHFasyitkCe..yVL5gDklZEIn0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SerT7he4p.qN1NwOf5S2ocRsMbxgGe2QwkE7lpZGF9mMjzfaes9vTfHiaUBS*Mv151*SbFbAGpY7ttveT2ANep0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SZwOWTT2AWJwwdPBAErLwhrN5KHuZAUHHHCoBFha4gcyE*1I83H.GpTwLK5G5Bme0t.dc9ZnNiRk31Pj5UooEUY!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR0bX0X7508hWAvqIJmskWDUklyEUSkq0ahftHlVYwkmQkPDMGyFo8Nx8001l3w45E47KRttrWlRueVHn4wBKf4!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVu9Ajocot6JmLzr2jfK4uBCtRWozwE5SyFVlswKPu1HpDoLRfjhQFWyX10hIGbhvWLVj.inooArqdRH00RKu68!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ66FAdkC1kUMDFPN.eiWJc9AMkRg8oIAZYY3FFsGjsZljxB.KMPLxXe8Htvx1OS3xJKXgCSttn7vru*wx4AuY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STiOn00rK3WMA*HIQYCQ40KxEBo7206tGnRIwtxbG3Gu6Lv2QdUhbpcFPgVW0hEz.kcwWK.vC9j.y8YD49TSoWY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXatEkVMwjLXl9ilsmpSvvLw1ZdMo5r.GHDOqtdzkwAyVBmXG*V3uF261ZgUtZWjNGsj4*zxONi8*7dBFTDnQYc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 5; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2024_10_20_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SerT7he4p.qN1NwOf5S2ocRsMbxgGe2QwkE7lpZGF9mMjzfaes9vTfHiaUBS*Mv151*SbFbAGpY7ttveT2ANep0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SQ.b7v1OReGoSDKjtI8bP.gqynqYoNpEABz.zZPOgzSY5SQeBQsZ2JxDNc7Y5UxSas5rReq7z7DHmREOqKEoZD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SRgcfdtu*O7KhCdjxGIE0CG7yzA2e0EE4mkF7..oaJxJVJpskZhRUmw.4fWvnqawOFHat2*Av2KtLvl*AE5fD3M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SaTnR1FNZuDfeVJXgXr2cUmN8EAzdv70Q0dII.nVUB9oIRnHzhUwnSB8Vi7ZPwHFasyitkCe..yVL5gDklZEIn0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SerT7he4p.qN1NwOf5S2ocRsMbxgGe2QwkE7lpZGF9mMjzfaes9vTfHiaUBS*Mv151*SbFbAGpY7ttveT2ANep0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SZwOWTT2AWJwwdPBAErLwhrN5KHuZAUHHHCoBFha4gcyE*1I83H.GpTwLK5G5Bme0t.dc9ZnNiRk31Pj5UooEUY!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR0bX0X7508hWAvqIJmskWDUklyEUSkq0ahftHlVYwkmQkPDMGyFo8Nx8001l3w45E47KRttrWlRueVHn4wBKf4!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVu9Ajocot6JmLzr2jfK4uBCtRWozwE5SyFVlswKPu1HpDoLRfjhQFWyX10hIGbhvWLVj.inooArqdRH00RKu68!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ66FAdkC1kUMDFPN.eiWJc9AMkRg8oIAZYY3FFsGjsZljxB.KMPLxXe8Htvx1OS3xJKXgCSttn7vru*wx4AuY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STiOn00rK3WMA*HIQYCQ40KxEBo7206tGnRIwtxbG3Gu6Lv2QdUhbpcFPgVW0hEz.kcwWK.vC9j.y8YD49TSoWY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXatEkVMwjLXl9ilsmpSvvLw1ZdMo5r.GHDOqtdzkwAyVBmXG*V3uF261ZgUtZWjNGsj4*zxONi8*7dBFTDnQYc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 5; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2024_10_20_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SZwOWTT2AWJwwdPBAErLwhrN5KHuZAUHHHCoBFha4gcyE*1I83H.GpTwLK5G5Bme0t.dc9ZnNiRk31Pj5UooEUY!/=photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SQ.b7v1OReGoSDKjtI8bP.gqynqYoNpEABz.zZPOgzSY5SQeBQsZ2JxDNc7Y5UxSas5rReq7z7DHmREOqKEoZD4!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SRgcfdtu*O7KhCdjxGIE0CG7yzA2e0EE4mkF7..oaJxJVJpskZhRUmw.4fWvnqawOFHat2*Av2KtLvl*AE5fD3M!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SaTnR1FNZuDfeVJXgXr2cUmN8EAzdv70Q0dII.nVUB9oIRnHzhUwnSB8Vi7ZPwHFasyitkCe..yVL5gDklZEIn0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SerT7he4p.qN1NwOf5S2ocRsMbxgGe2QwkE7lpZGF9mMjzfaes9vTfHiaUBS*Mv151*SbFbAGpY7ttveT2ANep0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa1J4Zp2/LiySpxowE0yeWXwBdXN*SZwOWTT2AWJwwdPBAErLwhrN5KHuZAUHHHCoBFha4gcyE*1I83H.GpTwLK5G5Bme0t.dc9ZnNiRk31Pj5UooEUY!/=photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SR0bX0X7508hWAvqIJmskWDUklyEUSkq0ahftHlVYwkmQkPDMGyFo8Nx8001l3w45E47KRttrWlRueVHn4wBKf4!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVu9Ajocot6JmLzr2jfK4uBCtRWozwE5SyFVlswKPu1HpDoLRfjhQFWyX10hIGbhvWLVj.inooArqdRH00RKu68!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SfJ66FAdkC1kUMDFPN.eiWJc9AMkRg8oIAZYY3FFsGjsZljxB.KMPLxXe8Htvx1OS3xJKXgCSttn7vru*wx4AuY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*STiOn00rK3WMA*HIQYCQ40KxEBo7206tGnRIwtxbG3Gu6Lv2QdUhbpcFPgVW0hEz.kcwWK.vC9j.y8YD49TSoWY!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'https://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXatEkVMwjLXl9ilsmpSvvLw1ZdMo5r.GHDOqtdzkwAyVBmXG*V3uF261ZgUtZWjNGsj4*zxONi8*7dBFTDnQYc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 5; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_2_16_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUllxWnVc8DHvK3etBDH8bT6r.qH4woFPpbSU9WFGdQIZaTJ9IAYGphMx7YITNEhX1jNRLDCcaVjqLRQxBiQtMk!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUllxWnVc8DHvK3etBDH8bT6r.qH4woFPpbSU9WFGdQIZaTJ9IAYGphMx7YITNEhX1jNRLDCcaVjqLRQxBiQtMk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRGGoAwlSj0Pi*qZmRw5H7XmVfEJqtyci3XRhkLjPlnlpiLBmVKj1F1t3ZHtRd7xWkVLk7WvME0XUAv8oEKmQwQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUllxWnVc8DHvK3etBDH8bT6r.qH4woFPpbSU9WFGdQIZaTJ9IAYGphMx7YITNEhX1jNRLDCcaVjqLRQxBiQtMk!/mnull&bo=VQhABlUIQAYBByA!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRGGoAwlSj0Pi*qZmRw5H7XmVfEJqtyci3XRhkLjPlnlpiLBmVKj1F1t3ZHtRd7xWkVLk7WvME0XUAv8oEKmQwQ!/mnull&bo=GwtABhsLQAYBByA!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 2; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_2_16_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRGGoAwlSj0Pi*qZmRw5H7XmVfEJqtyci3XRhkLjPlnlpiLBmVKj1F1t3ZHtRd7xWkVLk7WvME0XUAv8oEKmQwQ!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUllxWnVc8DHvK3etBDH8bT6r.qH4woFPpbSU9WFGdQIZaTJ9IAYGphMx7YITNEhX1jNRLDCcaVjqLRQxBiQtMk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRGGoAwlSj0Pi*qZmRw5H7XmVfEJqtyci3XRhkLjPlnlpiLBmVKj1F1t3ZHtRd7xWkVLk7WvME0XUAv8oEKmQwQ!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SUllxWnVc8DHvK3etBDH8bT6r.qH4woFPpbSU9WFGdQIZaTJ9IAYGphMx7YITNEhX1jNRLDCcaVjqLRQxBiQtMk!/mnull&bo=VQhABlUIQAYBByA!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SRGGoAwlSj0Pi*qZmRw5H7XmVfEJqtyci3XRhkLjPlnlpiLBmVKj1F1t3ZHtRd7xWkVLk7WvME0XUAv8oEKmQwQ!/mnull&bo=GwtABhsLQAYBByA!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 2; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_4_22_1', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SUibQIDTtKx5V4F*e.sRwW6bkiqD0*dsDxvgV6nvrZC8erZ05QS0RZNyNdz8TYTbyIBDPi918SOGI.PCQYJ*NBk!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SUibQIDTtKx5V4F*e.sRwW6bkiqD0*dsDxvgV6nvrZC8erZ05QS0RZNyNdz8TYTbyIBDPi918SOGI.PCQYJ*NBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SfT10iwaDLHy4MJ8H3osCDKCEEGBdRkGrnkGIf9sGzu0GNMzUgXGklCSUY3DKWfEQE*lAVtB4gLWNn2gL3oxJ0c!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*Se4ot.g.W*d3gHwsooExc8WdcrCUvDB8SRsk3HfWZB208g8YUPOF*3PIEbcsG**6Gzni*Zo5AxdnGxhVLVigz7s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SaWi9yOqOvri3Bh7a9QMwQfYLyTU5AH02q2iWsPZUjcsK2SrKsY29BnI5n8kFEwmSlie9DzmyWPrXbpfvthUzqk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SctDzyHs3Z3FDBEOz2FOSy8MVbvaoLn7*bcqRT00XH8FbdLg.9*dYDf5UVVRHxUUa6abJkBZrdTYEjq2hDDCtvE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SS7msnq9KQLxj3C00ABsJq2HEf*TjPHL*qExSa5.5D6oaCEITTScQbNGDNfRn2wGCKIuWgXUIFjg2AecKOt72OM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SXzERF63nU60DAOFki04z.NVtKogxxfBisdt*936dTqakjm7zm3x6.4DpvfYzYoemgdPFnoIP6R3KISZnkXmGHU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVqcr7J*0ae8jl7e1AFxKS9TnHPgZhsYIanezcSBuiNakjjhDD310ix*pXI7tyVRcCgp*9z01IvlIvUG5sxzYhA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVYKzb*g3GEtjm82WU7PZ8kfU3bcYbXy56rkbxA2evFnIoIwqbAwLMzv8JgKbZssz*44WCJdHkZkmwclg64oFB0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SX2.*jW..d0niV*j2DcEQdco*IklhPq*tyBYoC.kZ5elWL7xevdkX0KOuUJhq.lUTcsd3iLkqpMzviRbi1pUTOw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY0**2bzeyfXleVy2SEiglkAyo0u07ri9PQuKZJj82KzefYyN6BA2koLxnMCSQkRUxh8oW4f6fmEZSPyV7IF7wc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQXeorS0EoY9vQg2s*6fFEe.JPJeK57tntYBxQTMAbUQgHbv9zYWIHGjGP5FOPeOZENP0TiYpf*ASHdzqkza1yw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Seas8eNoOgj5Zo0Q.2sgsVGACK4qYshgdE15ZqgUVS28wtHMjU7QMWMiY71VFHGtv0ZI9G6bFksNyRS5pl3b*ls!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYbte3B0qPxOVPnc7yrw9OCa*VuE2ZbhSxSoZ.q9MfmJrd.y8heolwDT4M39fxlA.TYknBuNBolHRosTsIcrGXE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVud8W9jArQGFMwq4wfI66.bkj60VZGi17LbWvbAby8hMyJ429gFNeLS.3L9zdVq4qy7j3D5TexnM8dYrRue0.Y!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXRYckG7Xw.kReMb6etBPW*GUx5mFdE6Qmhh4SHfo9LqzqAYCxS2E*918TaZK0Z8DJQ2rXOGkpTINwqGy*6Oj.s!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7nbNocFYoFaVL0eQgVS7AR0mhdsAnppfWYVLz*6u4oWsFhO1MM0MllgbGJhiUB9h.yhi8kcxnlbZ1PlJ9eFY0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSQ3QHBFN9IXIA*b3sfmu6VqxxWNB8i.5D0Jk2kM8cFdedLlg0qNNnLwmhzYztEEkbGBxaNKZ*CpoQcR5i8SqMc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg1')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_4_22_2', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SfT10iwaDLHy4MJ8H3osCDKCEEGBdRkGrnkGIf9sGzu0GNMzUgXGklCSUY3DKWfEQE*lAVtB4gLWNn2gL3oxJ0c!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SUibQIDTtKx5V4F*e.sRwW6bkiqD0*dsDxvgV6nvrZC8erZ05QS0RZNyNdz8TYTbyIBDPi918SOGI.PCQYJ*NBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SfT10iwaDLHy4MJ8H3osCDKCEEGBdRkGrnkGIf9sGzu0GNMzUgXGklCSUY3DKWfEQE*lAVtB4gLWNn2gL3oxJ0c!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*Se4ot.g.W*d3gHwsooExc8WdcrCUvDB8SRsk3HfWZB208g8YUPOF*3PIEbcsG**6Gzni*Zo5AxdnGxhVLVigz7s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SaWi9yOqOvri3Bh7a9QMwQfYLyTU5AH02q2iWsPZUjcsK2SrKsY29BnI5n8kFEwmSlie9DzmyWPrXbpfvthUzqk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SctDzyHs3Z3FDBEOz2FOSy8MVbvaoLn7*bcqRT00XH8FbdLg.9*dYDf5UVVRHxUUa6abJkBZrdTYEjq2hDDCtvE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SS7msnq9KQLxj3C00ABsJq2HEf*TjPHL*qExSa5.5D6oaCEITTScQbNGDNfRn2wGCKIuWgXUIFjg2AecKOt72OM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SXzERF63nU60DAOFki04z.NVtKogxxfBisdt*936dTqakjm7zm3x6.4DpvfYzYoemgdPFnoIP6R3KISZnkXmGHU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVqcr7J*0ae8jl7e1AFxKS9TnHPgZhsYIanezcSBuiNakjjhDD310ix*pXI7tyVRcCgp*9z01IvlIvUG5sxzYhA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVYKzb*g3GEtjm82WU7PZ8kfU3bcYbXy56rkbxA2evFnIoIwqbAwLMzv8JgKbZssz*44WCJdHkZkmwclg64oFB0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SX2.*jW..d0niV*j2DcEQdco*IklhPq*tyBYoC.kZ5elWL7xevdkX0KOuUJhq.lUTcsd3iLkqpMzviRbi1pUTOw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY0**2bzeyfXleVy2SEiglkAyo0u07ri9PQuKZJj82KzefYyN6BA2koLxnMCSQkRUxh8oW4f6fmEZSPyV7IF7wc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQXeorS0EoY9vQg2s*6fFEe.JPJeK57tntYBxQTMAbUQgHbv9zYWIHGjGP5FOPeOZENP0TiYpf*ASHdzqkza1yw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Seas8eNoOgj5Zo0Q.2sgsVGACK4qYshgdE15ZqgUVS28wtHMjU7QMWMiY71VFHGtv0ZI9G6bFksNyRS5pl3b*ls!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYbte3B0qPxOVPnc7yrw9OCa*VuE2ZbhSxSoZ.q9MfmJrd.y8heolwDT4M39fxlA.TYknBuNBolHRosTsIcrGXE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVud8W9jArQGFMwq4wfI66.bkj60VZGi17LbWvbAby8hMyJ429gFNeLS.3L9zdVq4qy7j3D5TexnM8dYrRue0.Y!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXRYckG7Xw.kReMb6etBPW*GUx5mFdE6Qmhh4SHfo9LqzqAYCxS2E*918TaZK0Z8DJQ2rXOGkpTINwqGy*6Oj.s!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7nbNocFYoFaVL0eQgVS7AR0mhdsAnppfWYVLz*6u4oWsFhO1MM0MllgbGJhiUB9h.yhi8kcxnlbZ1PlJ9eFY0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSQ3QHBFN9IXIA*b3sfmu6VqxxWNB8i.5D0Jk2kM8cFdedLlg0qNNnLwmhzYztEEkbGBxaNKZ*CpoQcR5i8SqMc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg2')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_4_22_3', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*Se4ot.g.W*d3gHwsooExc8WdcrCUvDB8SRsk3HfWZB208g8YUPOF*3PIEbcsG**6Gzni*Zo5AxdnGxhVLVigz7s!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SUibQIDTtKx5V4F*e.sRwW6bkiqD0*dsDxvgV6nvrZC8erZ05QS0RZNyNdz8TYTbyIBDPi918SOGI.PCQYJ*NBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SfT10iwaDLHy4MJ8H3osCDKCEEGBdRkGrnkGIf9sGzu0GNMzUgXGklCSUY3DKWfEQE*lAVtB4gLWNn2gL3oxJ0c!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*Se4ot.g.W*d3gHwsooExc8WdcrCUvDB8SRsk3HfWZB208g8YUPOF*3PIEbcsG**6Gzni*Zo5AxdnGxhVLVigz7s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SaWi9yOqOvri3Bh7a9QMwQfYLyTU5AH02q2iWsPZUjcsK2SrKsY29BnI5n8kFEwmSlie9DzmyWPrXbpfvthUzqk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SctDzyHs3Z3FDBEOz2FOSy8MVbvaoLn7*bcqRT00XH8FbdLg.9*dYDf5UVVRHxUUa6abJkBZrdTYEjq2hDDCtvE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SS7msnq9KQLxj3C00ABsJq2HEf*TjPHL*qExSa5.5D6oaCEITTScQbNGDNfRn2wGCKIuWgXUIFjg2AecKOt72OM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SXzERF63nU60DAOFki04z.NVtKogxxfBisdt*936dTqakjm7zm3x6.4DpvfYzYoemgdPFnoIP6R3KISZnkXmGHU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVqcr7J*0ae8jl7e1AFxKS9TnHPgZhsYIanezcSBuiNakjjhDD310ix*pXI7tyVRcCgp*9z01IvlIvUG5sxzYhA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVYKzb*g3GEtjm82WU7PZ8kfU3bcYbXy56rkbxA2evFnIoIwqbAwLMzv8JgKbZssz*44WCJdHkZkmwclg64oFB0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SX2.*jW..d0niV*j2DcEQdco*IklhPq*tyBYoC.kZ5elWL7xevdkX0KOuUJhq.lUTcsd3iLkqpMzviRbi1pUTOw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY0**2bzeyfXleVy2SEiglkAyo0u07ri9PQuKZJj82KzefYyN6BA2koLxnMCSQkRUxh8oW4f6fmEZSPyV7IF7wc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQXeorS0EoY9vQg2s*6fFEe.JPJeK57tntYBxQTMAbUQgHbv9zYWIHGjGP5FOPeOZENP0TiYpf*ASHdzqkza1yw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Seas8eNoOgj5Zo0Q.2sgsVGACK4qYshgdE15ZqgUVS28wtHMjU7QMWMiY71VFHGtv0ZI9G6bFksNyRS5pl3b*ls!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYbte3B0qPxOVPnc7yrw9OCa*VuE2ZbhSxSoZ.q9MfmJrd.y8heolwDT4M39fxlA.TYknBuNBolHRosTsIcrGXE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVud8W9jArQGFMwq4wfI66.bkj60VZGi17LbWvbAby8hMyJ429gFNeLS.3L9zdVq4qy7j3D5TexnM8dYrRue0.Y!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXRYckG7Xw.kReMb6etBPW*GUx5mFdE6Qmhh4SHfo9LqzqAYCxS2E*918TaZK0Z8DJQ2rXOGkpTINwqGy*6Oj.s!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7nbNocFYoFaVL0eQgVS7AR0mhdsAnppfWYVLz*6u4oWsFhO1MM0MllgbGJhiUB9h.yhi8kcxnlbZ1PlJ9eFY0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSQ3QHBFN9IXIA*b3sfmu6VqxxWNB8i.5D0Jk2kM8cFdedLlg0qNNnLwmhzYztEEkbGBxaNKZ*CpoQcR5i8SqMc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg3')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_4_22_4', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SaWi9yOqOvri3Bh7a9QMwQfYLyTU5AH02q2iWsPZUjcsK2SrKsY29BnI5n8kFEwmSlie9DzmyWPrXbpfvthUzqk!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SUibQIDTtKx5V4F*e.sRwW6bkiqD0*dsDxvgV6nvrZC8erZ05QS0RZNyNdz8TYTbyIBDPi918SOGI.PCQYJ*NBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SfT10iwaDLHy4MJ8H3osCDKCEEGBdRkGrnkGIf9sGzu0GNMzUgXGklCSUY3DKWfEQE*lAVtB4gLWNn2gL3oxJ0c!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*Se4ot.g.W*d3gHwsooExc8WdcrCUvDB8SRsk3HfWZB208g8YUPOF*3PIEbcsG**6Gzni*Zo5AxdnGxhVLVigz7s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SaWi9yOqOvri3Bh7a9QMwQfYLyTU5AH02q2iWsPZUjcsK2SrKsY29BnI5n8kFEwmSlie9DzmyWPrXbpfvthUzqk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SctDzyHs3Z3FDBEOz2FOSy8MVbvaoLn7*bcqRT00XH8FbdLg.9*dYDf5UVVRHxUUa6abJkBZrdTYEjq2hDDCtvE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SS7msnq9KQLxj3C00ABsJq2HEf*TjPHL*qExSa5.5D6oaCEITTScQbNGDNfRn2wGCKIuWgXUIFjg2AecKOt72OM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SXzERF63nU60DAOFki04z.NVtKogxxfBisdt*936dTqakjm7zm3x6.4DpvfYzYoemgdPFnoIP6R3KISZnkXmGHU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVqcr7J*0ae8jl7e1AFxKS9TnHPgZhsYIanezcSBuiNakjjhDD310ix*pXI7tyVRcCgp*9z01IvlIvUG5sxzYhA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVYKzb*g3GEtjm82WU7PZ8kfU3bcYbXy56rkbxA2evFnIoIwqbAwLMzv8JgKbZssz*44WCJdHkZkmwclg64oFB0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SX2.*jW..d0niV*j2DcEQdco*IklhPq*tyBYoC.kZ5elWL7xevdkX0KOuUJhq.lUTcsd3iLkqpMzviRbi1pUTOw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY0**2bzeyfXleVy2SEiglkAyo0u07ri9PQuKZJj82KzefYyN6BA2koLxnMCSQkRUxh8oW4f6fmEZSPyV7IF7wc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQXeorS0EoY9vQg2s*6fFEe.JPJeK57tntYBxQTMAbUQgHbv9zYWIHGjGP5FOPeOZENP0TiYpf*ASHdzqkza1yw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Seas8eNoOgj5Zo0Q.2sgsVGACK4qYshgdE15ZqgUVS28wtHMjU7QMWMiY71VFHGtv0ZI9G6bFksNyRS5pl3b*ls!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYbte3B0qPxOVPnc7yrw9OCa*VuE2ZbhSxSoZ.q9MfmJrd.y8heolwDT4M39fxlA.TYknBuNBolHRosTsIcrGXE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVud8W9jArQGFMwq4wfI66.bkj60VZGi17LbWvbAby8hMyJ429gFNeLS.3L9zdVq4qy7j3D5TexnM8dYrRue0.Y!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXRYckG7Xw.kReMb6etBPW*GUx5mFdE6Qmhh4SHfo9LqzqAYCxS2E*918TaZK0Z8DJQ2rXOGkpTINwqGy*6Oj.s!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7nbNocFYoFaVL0eQgVS7AR0mhdsAnppfWYVLz*6u4oWsFhO1MM0MllgbGJhiUB9h.yhi8kcxnlbZ1PlJ9eFY0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSQ3QHBFN9IXIA*b3sfmu6VqxxWNB8i.5D0Jk2kM8cFdedLlg0qNNnLwmhzYztEEkbGBxaNKZ*CpoQcR5i8SqMc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg4')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_4_22_5', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SctDzyHs3Z3FDBEOz2FOSy8MVbvaoLn7*bcqRT00XH8FbdLg.9*dYDf5UVVRHxUUa6abJkBZrdTYEjq2hDDCtvE!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SUibQIDTtKx5V4F*e.sRwW6bkiqD0*dsDxvgV6nvrZC8erZ05QS0RZNyNdz8TYTbyIBDPi918SOGI.PCQYJ*NBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SfT10iwaDLHy4MJ8H3osCDKCEEGBdRkGrnkGIf9sGzu0GNMzUgXGklCSUY3DKWfEQE*lAVtB4gLWNn2gL3oxJ0c!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*Se4ot.g.W*d3gHwsooExc8WdcrCUvDB8SRsk3HfWZB208g8YUPOF*3PIEbcsG**6Gzni*Zo5AxdnGxhVLVigz7s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SaWi9yOqOvri3Bh7a9QMwQfYLyTU5AH02q2iWsPZUjcsK2SrKsY29BnI5n8kFEwmSlie9DzmyWPrXbpfvthUzqk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SctDzyHs3Z3FDBEOz2FOSy8MVbvaoLn7*bcqRT00XH8FbdLg.9*dYDf5UVVRHxUUa6abJkBZrdTYEjq2hDDCtvE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SS7msnq9KQLxj3C00ABsJq2HEf*TjPHL*qExSa5.5D6oaCEITTScQbNGDNfRn2wGCKIuWgXUIFjg2AecKOt72OM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SXzERF63nU60DAOFki04z.NVtKogxxfBisdt*936dTqakjm7zm3x6.4DpvfYzYoemgdPFnoIP6R3KISZnkXmGHU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVqcr7J*0ae8jl7e1AFxKS9TnHPgZhsYIanezcSBuiNakjjhDD310ix*pXI7tyVRcCgp*9z01IvlIvUG5sxzYhA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVYKzb*g3GEtjm82WU7PZ8kfU3bcYbXy56rkbxA2evFnIoIwqbAwLMzv8JgKbZssz*44WCJdHkZkmwclg64oFB0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SX2.*jW..d0niV*j2DcEQdco*IklhPq*tyBYoC.kZ5elWL7xevdkX0KOuUJhq.lUTcsd3iLkqpMzviRbi1pUTOw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY0**2bzeyfXleVy2SEiglkAyo0u07ri9PQuKZJj82KzefYyN6BA2koLxnMCSQkRUxh8oW4f6fmEZSPyV7IF7wc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQXeorS0EoY9vQg2s*6fFEe.JPJeK57tntYBxQTMAbUQgHbv9zYWIHGjGP5FOPeOZENP0TiYpf*ASHdzqkza1yw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Seas8eNoOgj5Zo0Q.2sgsVGACK4qYshgdE15ZqgUVS28wtHMjU7QMWMiY71VFHGtv0ZI9G6bFksNyRS5pl3b*ls!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYbte3B0qPxOVPnc7yrw9OCa*VuE2ZbhSxSoZ.q9MfmJrd.y8heolwDT4M39fxlA.TYknBuNBolHRosTsIcrGXE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVud8W9jArQGFMwq4wfI66.bkj60VZGi17LbWvbAby8hMyJ429gFNeLS.3L9zdVq4qy7j3D5TexnM8dYrRue0.Y!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXRYckG7Xw.kReMb6etBPW*GUx5mFdE6Qmhh4SHfo9LqzqAYCxS2E*918TaZK0Z8DJQ2rXOGkpTINwqGy*6Oj.s!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7nbNocFYoFaVL0eQgVS7AR0mhdsAnppfWYVLz*6u4oWsFhO1MM0MllgbGJhiUB9h.yhi8kcxnlbZ1PlJ9eFY0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSQ3QHBFN9IXIA*b3sfmu6VqxxWNB8i.5D0Jk2kM8cFdedLlg0qNNnLwmhzYztEEkbGBxaNKZ*CpoQcR5i8SqMc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg5')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_4_22_6', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SS7msnq9KQLxj3C00ABsJq2HEf*TjPHL*qExSa5.5D6oaCEITTScQbNGDNfRn2wGCKIuWgXUIFjg2AecKOt72OM!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SUibQIDTtKx5V4F*e.sRwW6bkiqD0*dsDxvgV6nvrZC8erZ05QS0RZNyNdz8TYTbyIBDPi918SOGI.PCQYJ*NBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SfT10iwaDLHy4MJ8H3osCDKCEEGBdRkGrnkGIf9sGzu0GNMzUgXGklCSUY3DKWfEQE*lAVtB4gLWNn2gL3oxJ0c!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*Se4ot.g.W*d3gHwsooExc8WdcrCUvDB8SRsk3HfWZB208g8YUPOF*3PIEbcsG**6Gzni*Zo5AxdnGxhVLVigz7s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SaWi9yOqOvri3Bh7a9QMwQfYLyTU5AH02q2iWsPZUjcsK2SrKsY29BnI5n8kFEwmSlie9DzmyWPrXbpfvthUzqk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SctDzyHs3Z3FDBEOz2FOSy8MVbvaoLn7*bcqRT00XH8FbdLg.9*dYDf5UVVRHxUUa6abJkBZrdTYEjq2hDDCtvE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SS7msnq9KQLxj3C00ABsJq2HEf*TjPHL*qExSa5.5D6oaCEITTScQbNGDNfRn2wGCKIuWgXUIFjg2AecKOt72OM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SXzERF63nU60DAOFki04z.NVtKogxxfBisdt*936dTqakjm7zm3x6.4DpvfYzYoemgdPFnoIP6R3KISZnkXmGHU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVqcr7J*0ae8jl7e1AFxKS9TnHPgZhsYIanezcSBuiNakjjhDD310ix*pXI7tyVRcCgp*9z01IvlIvUG5sxzYhA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVYKzb*g3GEtjm82WU7PZ8kfU3bcYbXy56rkbxA2evFnIoIwqbAwLMzv8JgKbZssz*44WCJdHkZkmwclg64oFB0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SX2.*jW..d0niV*j2DcEQdco*IklhPq*tyBYoC.kZ5elWL7xevdkX0KOuUJhq.lUTcsd3iLkqpMzviRbi1pUTOw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY0**2bzeyfXleVy2SEiglkAyo0u07ri9PQuKZJj82KzefYyN6BA2koLxnMCSQkRUxh8oW4f6fmEZSPyV7IF7wc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQXeorS0EoY9vQg2s*6fFEe.JPJeK57tntYBxQTMAbUQgHbv9zYWIHGjGP5FOPeOZENP0TiYpf*ASHdzqkza1yw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Seas8eNoOgj5Zo0Q.2sgsVGACK4qYshgdE15ZqgUVS28wtHMjU7QMWMiY71VFHGtv0ZI9G6bFksNyRS5pl3b*ls!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYbte3B0qPxOVPnc7yrw9OCa*VuE2ZbhSxSoZ.q9MfmJrd.y8heolwDT4M39fxlA.TYknBuNBolHRosTsIcrGXE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVud8W9jArQGFMwq4wfI66.bkj60VZGi17LbWvbAby8hMyJ429gFNeLS.3L9zdVq4qy7j3D5TexnM8dYrRue0.Y!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXRYckG7Xw.kReMb6etBPW*GUx5mFdE6Qmhh4SHfo9LqzqAYCxS2E*918TaZK0Z8DJQ2rXOGkpTINwqGy*6Oj.s!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7nbNocFYoFaVL0eQgVS7AR0mhdsAnppfWYVLz*6u4oWsFhO1MM0MllgbGJhiUB9h.yhi8kcxnlbZ1PlJ9eFY0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSQ3QHBFN9IXIA*b3sfmu6VqxxWNB8i.5D0Jk2kM8cFdedLlg0qNNnLwmhzYztEEkbGBxaNKZ*CpoQcR5i8SqMc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg6')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_4_22_7', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SXzERF63nU60DAOFki04z.NVtKogxxfBisdt*936dTqakjm7zm3x6.4DpvfYzYoemgdPFnoIP6R3KISZnkXmGHU!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SUibQIDTtKx5V4F*e.sRwW6bkiqD0*dsDxvgV6nvrZC8erZ05QS0RZNyNdz8TYTbyIBDPi918SOGI.PCQYJ*NBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SfT10iwaDLHy4MJ8H3osCDKCEEGBdRkGrnkGIf9sGzu0GNMzUgXGklCSUY3DKWfEQE*lAVtB4gLWNn2gL3oxJ0c!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*Se4ot.g.W*d3gHwsooExc8WdcrCUvDB8SRsk3HfWZB208g8YUPOF*3PIEbcsG**6Gzni*Zo5AxdnGxhVLVigz7s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SaWi9yOqOvri3Bh7a9QMwQfYLyTU5AH02q2iWsPZUjcsK2SrKsY29BnI5n8kFEwmSlie9DzmyWPrXbpfvthUzqk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SctDzyHs3Z3FDBEOz2FOSy8MVbvaoLn7*bcqRT00XH8FbdLg.9*dYDf5UVVRHxUUa6abJkBZrdTYEjq2hDDCtvE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SS7msnq9KQLxj3C00ABsJq2HEf*TjPHL*qExSa5.5D6oaCEITTScQbNGDNfRn2wGCKIuWgXUIFjg2AecKOt72OM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SXzERF63nU60DAOFki04z.NVtKogxxfBisdt*936dTqakjm7zm3x6.4DpvfYzYoemgdPFnoIP6R3KISZnkXmGHU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVqcr7J*0ae8jl7e1AFxKS9TnHPgZhsYIanezcSBuiNakjjhDD310ix*pXI7tyVRcCgp*9z01IvlIvUG5sxzYhA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVYKzb*g3GEtjm82WU7PZ8kfU3bcYbXy56rkbxA2evFnIoIwqbAwLMzv8JgKbZssz*44WCJdHkZkmwclg64oFB0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SX2.*jW..d0niV*j2DcEQdco*IklhPq*tyBYoC.kZ5elWL7xevdkX0KOuUJhq.lUTcsd3iLkqpMzviRbi1pUTOw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY0**2bzeyfXleVy2SEiglkAyo0u07ri9PQuKZJj82KzefYyN6BA2koLxnMCSQkRUxh8oW4f6fmEZSPyV7IF7wc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQXeorS0EoY9vQg2s*6fFEe.JPJeK57tntYBxQTMAbUQgHbv9zYWIHGjGP5FOPeOZENP0TiYpf*ASHdzqkza1yw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Seas8eNoOgj5Zo0Q.2sgsVGACK4qYshgdE15ZqgUVS28wtHMjU7QMWMiY71VFHGtv0ZI9G6bFksNyRS5pl3b*ls!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYbte3B0qPxOVPnc7yrw9OCa*VuE2ZbhSxSoZ.q9MfmJrd.y8heolwDT4M39fxlA.TYknBuNBolHRosTsIcrGXE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVud8W9jArQGFMwq4wfI66.bkj60VZGi17LbWvbAby8hMyJ429gFNeLS.3L9zdVq4qy7j3D5TexnM8dYrRue0.Y!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXRYckG7Xw.kReMb6etBPW*GUx5mFdE6Qmhh4SHfo9LqzqAYCxS2E*918TaZK0Z8DJQ2rXOGkpTINwqGy*6Oj.s!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7nbNocFYoFaVL0eQgVS7AR0mhdsAnppfWYVLz*6u4oWsFhO1MM0MllgbGJhiUB9h.yhi8kcxnlbZ1PlJ9eFY0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSQ3QHBFN9IXIA*b3sfmu6VqxxWNB8i.5D0Jk2kM8cFdedLlg0qNNnLwmhzYztEEkbGBxaNKZ*CpoQcR5i8SqMc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg7')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_4_22_8', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVqcr7J*0ae8jl7e1AFxKS9TnHPgZhsYIanezcSBuiNakjjhDD310ix*pXI7tyVRcCgp*9z01IvlIvUG5sxzYhA!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SUibQIDTtKx5V4F*e.sRwW6bkiqD0*dsDxvgV6nvrZC8erZ05QS0RZNyNdz8TYTbyIBDPi918SOGI.PCQYJ*NBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SfT10iwaDLHy4MJ8H3osCDKCEEGBdRkGrnkGIf9sGzu0GNMzUgXGklCSUY3DKWfEQE*lAVtB4gLWNn2gL3oxJ0c!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*Se4ot.g.W*d3gHwsooExc8WdcrCUvDB8SRsk3HfWZB208g8YUPOF*3PIEbcsG**6Gzni*Zo5AxdnGxhVLVigz7s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SaWi9yOqOvri3Bh7a9QMwQfYLyTU5AH02q2iWsPZUjcsK2SrKsY29BnI5n8kFEwmSlie9DzmyWPrXbpfvthUzqk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SctDzyHs3Z3FDBEOz2FOSy8MVbvaoLn7*bcqRT00XH8FbdLg.9*dYDf5UVVRHxUUa6abJkBZrdTYEjq2hDDCtvE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SS7msnq9KQLxj3C00ABsJq2HEf*TjPHL*qExSa5.5D6oaCEITTScQbNGDNfRn2wGCKIuWgXUIFjg2AecKOt72OM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SXzERF63nU60DAOFki04z.NVtKogxxfBisdt*936dTqakjm7zm3x6.4DpvfYzYoemgdPFnoIP6R3KISZnkXmGHU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVqcr7J*0ae8jl7e1AFxKS9TnHPgZhsYIanezcSBuiNakjjhDD310ix*pXI7tyVRcCgp*9z01IvlIvUG5sxzYhA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVYKzb*g3GEtjm82WU7PZ8kfU3bcYbXy56rkbxA2evFnIoIwqbAwLMzv8JgKbZssz*44WCJdHkZkmwclg64oFB0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SX2.*jW..d0niV*j2DcEQdco*IklhPq*tyBYoC.kZ5elWL7xevdkX0KOuUJhq.lUTcsd3iLkqpMzviRbi1pUTOw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY0**2bzeyfXleVy2SEiglkAyo0u07ri9PQuKZJj82KzefYyN6BA2koLxnMCSQkRUxh8oW4f6fmEZSPyV7IF7wc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQXeorS0EoY9vQg2s*6fFEe.JPJeK57tntYBxQTMAbUQgHbv9zYWIHGjGP5FOPeOZENP0TiYpf*ASHdzqkza1yw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Seas8eNoOgj5Zo0Q.2sgsVGACK4qYshgdE15ZqgUVS28wtHMjU7QMWMiY71VFHGtv0ZI9G6bFksNyRS5pl3b*ls!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYbte3B0qPxOVPnc7yrw9OCa*VuE2ZbhSxSoZ.q9MfmJrd.y8heolwDT4M39fxlA.TYknBuNBolHRosTsIcrGXE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVud8W9jArQGFMwq4wfI66.bkj60VZGi17LbWvbAby8hMyJ429gFNeLS.3L9zdVq4qy7j3D5TexnM8dYrRue0.Y!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXRYckG7Xw.kReMb6etBPW*GUx5mFdE6Qmhh4SHfo9LqzqAYCxS2E*918TaZK0Z8DJQ2rXOGkpTINwqGy*6Oj.s!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7nbNocFYoFaVL0eQgVS7AR0mhdsAnppfWYVLz*6u4oWsFhO1MM0MllgbGJhiUB9h.yhi8kcxnlbZ1PlJ9eFY0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSQ3QHBFN9IXIA*b3sfmu6VqxxWNB8i.5D0Jk2kM8cFdedLlg0qNNnLwmhzYztEEkbGBxaNKZ*CpoQcR5i8SqMc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg8')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });

    bindElement('.img_2025_4_22_9', () => {
        fourBox.style.display = 'flex';
        fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVYKzb*g3GEtjm82WU7PZ8kfU3bcYbXy56rkbxA2evFnIoIwqbAwLMzv8JgKbZssz*44WCJdHkZkmwclg64oFB0!/photolist&t=5';

        // 在初始化时绑定事件委托（只需要执行一次）
        bottomNavigation.addEventListener('click', function (e) {
            const target = e.target.closest('.tongYongNovImg1, .tongYongNovImg2, .tongYongNovImg3, .tongYongNovImg4, .tongYongNovImg5, .tongYongNovImg6, .tongYongNovImg7, .tongYongNovImg8, .tongYongNovImg9');
            if (!target) return;

            // 移除所有同类元素的边框
            document.querySelectorAll('.bottomNavigation img').forEach(img => {
                img.style.outline = '';
            });

            // 添加当前点击元素的边框
            target.style.outline = '2px solid #1296db';

            // 根据类名设置不同的大图
            if (target.classList.contains('tongYongNovImg1')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SUibQIDTtKx5V4F*e.sRwW6bkiqD0*dsDxvgV6nvrZC8erZ05QS0RZNyNdz8TYTbyIBDPi918SOGI.PCQYJ*NBk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg2')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SfT10iwaDLHy4MJ8H3osCDKCEEGBdRkGrnkGIf9sGzu0GNMzUgXGklCSUY3DKWfEQE*lAVtB4gLWNn2gL3oxJ0c!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg3')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*Se4ot.g.W*d3gHwsooExc8WdcrCUvDB8SRsk3HfWZB208g8YUPOF*3PIEbcsG**6Gzni*Zo5AxdnGxhVLVigz7s!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg4')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SaWi9yOqOvri3Bh7a9QMwQfYLyTU5AH02q2iWsPZUjcsK2SrKsY29BnI5n8kFEwmSlie9DzmyWPrXbpfvthUzqk!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg5')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SctDzyHs3Z3FDBEOz2FOSy8MVbvaoLn7*bcqRT00XH8FbdLg.9*dYDf5UVVRHxUUa6abJkBZrdTYEjq2hDDCtvE!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg6')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SS7msnq9KQLxj3C00ABsJq2HEf*TjPHL*qExSa5.5D6oaCEITTScQbNGDNfRn2wGCKIuWgXUIFjg2AecKOt72OM!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg7')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SXzERF63nU60DAOFki04z.NVtKogxxfBisdt*936dTqakjm7zm3x6.4DpvfYzYoemgdPFnoIP6R3KISZnkXmGHU!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg8')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVqcr7J*0ae8jl7e1AFxKS9TnHPgZhsYIanezcSBuiNakjjhDD310ix*pXI7tyVRcCgp*9z01IvlIvUG5sxzYhA!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            } else if (target.classList.contains('tongYongNovImg9')) {
                fourBoxSuimg.src = '';
                fourBoxSuimg.src = 'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa4JuwKw/LiySpxowE0yeWXwBdXN*SVYKzb*g3GEtjm82WU7PZ8kfU3bcYbXy56rkbxA2evFnIoIwqbAwLMzv8JgKbZssz*44WCJdHkZkmwclg64oFB0!/photolist&t=5';
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
            // 添加其他类名的处理...
        });

        // 设置导航小图
        const imgSrcs = [
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SX2.*jW..d0niV*j2DcEQdco*IklhPq*tyBYoC.kZ5elWL7xevdkX0KOuUJhq.lUTcsd3iLkqpMzviRbi1pUTOw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SY0**2bzeyfXleVy2SEiglkAyo0u07ri9PQuKZJj82KzefYyN6BA2koLxnMCSQkRUxh8oW4f6fmEZSPyV7IF7wc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SQXeorS0EoY9vQg2s*6fFEe.JPJeK57tntYBxQTMAbUQgHbv9zYWIHGjGP5FOPeOZENP0TiYpf*ASHdzqkza1yw!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*Seas8eNoOgj5Zo0Q.2sgsVGACK4qYshgdE15ZqgUVS28wtHMjU7QMWMiY71VFHGtv0ZI9G6bFksNyRS5pl3b*ls!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SYbte3B0qPxOVPnc7yrw9OCa*VuE2ZbhSxSoZ.q9MfmJrd.y8heolwDT4M39fxlA.TYknBuNBolHRosTsIcrGXE!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SVud8W9jArQGFMwq4wfI66.bkj60VZGi17LbWvbAby8hMyJ429gFNeLS.3L9zdVq4qy7j3D5TexnM8dYrRue0.Y!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SXRYckG7Xw.kReMb6etBPW*GUx5mFdE6Qmhh4SHfo9LqzqAYCxS2E*918TaZK0Z8DJQ2rXOGkpTINwqGy*6Oj.s!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SV7nbNocFYoFaVL0eQgVS7AR0mhdsAnppfWYVLz*6u4oWsFhO1MM0MllgbGJhiUB9h.yhi8kcxnlbZ1PlJ9eFY0!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5',
            'http://m.qpic.cn/psc?/V50ZViJb1tHZiA47k99q0gKdaa0FSnRP/LiySpxowE0yeWXwBdXN*SSQ3QHBFN9IXIA*b3sfmu6VqxxWNB8i.5D0Jk2kM8cFdedLlg0qNNnLwmhzYztEEkbGBxaNKZ*CpoQcR5i8SqMc!/mnull&bo=vgC.AL4AvgADByI!&rf=photolist&t=5'
        ];

        // 只显示前7个导航小图
        const maxVisibleCount = 9; // 设置最大显示数量
        document.querySelectorAll('.bottomNavigation img').forEach((navImg, index) => {
            if (index < maxVisibleCount) {
                navImg.style.display = 'inline-block';
                navImg.src = imgSrcs[index % imgSrcs.length];

                // 根据类名设置默认轮廓颜色
                if (navImg.classList.contains('tongYongNovImg9')) {
                    navImg.style.outline = '2px solid #1296db'; // 默认轮廓颜色
                    // 将该图片滚动到可见位置
                    navImg.scrollIntoView({
                        behavior: 'smooth', // 平滑滚动
                        block: 'nearest', // 垂直方向上最近位置
                        inline: 'center' // 水平方向上居中
                    });
                } else {
                    navImg.style.outline = ''; // 其他小图无轮廓
                }
            } else {
                navImg.style.display = 'none'; // 隐藏超出数量的元素
            }
        });
    });


    // bindElement('.img_XC_N8_999', () => {
    // });

    // 添加更多图片绑定...
    // bindElement('.img_XC_N8_9', () => {
    // 你的具体图片逻辑...
    // });

    // 其他图片类名绑定...
}

// 确保通用函数可用（如果主文件已加载可删除此部分）
// 简化版绑定函数（已移除防重复逻辑）
function bindElement(selector, handler) {
    document.addEventListener('click', (e) => {
        const target = e.target.closest(selector);
        if (target) {
            handler.call(target, e); // 直接执行不再检查标记
        }
    });
}

// 执行绑定
rebindImageEvents();

