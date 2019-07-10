$(function() {
    var menu_list = $(".menu-item");
    var body = $("body");
    //menu_listがクリックされた時の処理
    menu_list.click(function() {
        //クリックされた要素のhrefを取得
        var menu = $(this).attr("href");
        //スクロール位置
        var scroll_point = $(menu).offset().top;
        body.animate({
            scrollTop: scroll_point
        }, 300);
    });




    jQuery('.icon-hamburger').on('click', function() {
        if (jQuery('.menu-container .menu-right').css('display') === 'block') {
            jQuery('.menu-container .menu-right').slideUp('1500');
        } else {
            jQuery('.menu-container .menu-right').slideDown('1500');
        }
    });

    // 流体アニメーション
    const windowW = $(window).width();
    console.log(windowW);
    let randomness = 90, // 振れ幅（例：90の場合は0〜90の値になる）
        threshold = 100; // 元のサイズ
    let randomness02 = 90, // 振れ幅（例：90の場合は0〜90の値になる）
        threshold02 = 100; // 元のサイズ
    if (windowW > 760) {
        randomness = 50; // 振れ幅（例：90の場合は0〜90の値になる）
        threshold = 250; // 元のサイズ
        randomness02 = 90; // 振れ幅（例：90の場合は0〜90の値になる）
        threshold02 = 210; // 元のサイズ
    } else {
        andomness = 50; // 振れ幅（例：90の場合は0〜90の値になる）
        threshold = 100; // 元のサイズ
        randomness02 = 50; // 振れ幅（例：90の場合は0〜90の値になる）
        threshold02 = 100; // 元のサイズ
    }


    $('.team-member').hover(
        function() {
            //マウスカーソルが重なった時の処理
            $(this).removeClass('fluidD');
            $(this).addClass('fluid2 gradation');
            fluid2();
        },
        function() {
            //マウスカーソルが離れた時の処理
            $(this).removeClass('fluid2 gradation');
            $(this).addClass('fluidD');
        }
    );

    // 流体アニメーション関数を定義
    const fluid = function() {

        // animate関数を使用
        $('.fluid').animate({

            height: String(Math.round((Math.random() * randomness + threshold)) + 'px'),
            'width': String(Math.round((Math.random() * randomness02 + threshold02)) + 'px'),
            borderTopLeftRadius: String(Math.round((Math.random() * randomness02 + threshold02)) + 'px'),
            borderTopRightRadius: String(Math.round((Math.random() * randomness + threshold)) + 'px'),
            borderBottomLeftRadius: String(Math.round((Math.random() * randomness + threshold)) + 'px'),
            borderBottomRightRadius: String(Math.round((Math.random() * randomness02 + threshold02)) + 'px'),
        }, {
            duration: 900,
            　 //形が変わる速さ
            complete: fluid　 //繰り返し
        });
    }
    const fluid2 = function() {

        // animate関数を使用
        $('.fluid2').animate({

            borderTopLeftRadius: String(Math.round((Math.random() * randomness02 + threshold02)) + 'px'),
            borderTopRightRadius: String(Math.round((Math.random() * randomness + threshold)) + 'px'),
            borderBottomLeftRadius: String(Math.round((Math.random() * randomness + threshold)) + 'px'),
            borderBottomRightRadius: String(Math.round((Math.random() * randomness02 + threshold02)) + 'px'),
        }, {
            duration: 900,
            　 //形が変わる速さ
            complete: fluid2　 //繰り返し
        });
    }



    // animate関数を使用


    // 流体アニメーション関数を実行
    fluid();


});