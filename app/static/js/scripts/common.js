function _readMore () {
    $('.read-more').click(function() {
        $(this).toggleClass('collapse').prev().slideToggle();
    })
}

function _asideScroll () {
    $('.left-aside__shadow').click(function () {
        let $currentScroll = $(this).prev().scrollTop()
        $(this).prev().scrollTop($currentScroll + 21)
        $(this).prev().prev().addClass('vis')
    })
    $('.left-aside__shadow--top').click(function () {
        let
            $currentScroll = $(this).next().scrollTop()
            $newScroll = ($(this).next().scrollTop() - 21);
        $(this).next().scrollTop($newScroll)
        $currentScroll < 22 ? $(this).removeClass('vis') : $(this).addClass('vis')
        console.log($newScroll)
    })
}

function _masks () {
    $(".jsInputPhone").inputmask({"mask": "+7 (999) 999-9999"})
}

function _ancor () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top - 35;

        $('html, body').animate({scrollTop: dn}, 1000);
    });
}

function _scroll () {
    // $(".selector").overlayScrollbars({ });
    // $("ul").on("customScroll", function(event, scrollData) {});

}


$(document).ready(
    _readMore(),
    _asideScroll(),
    _masks(),
    _ancor(),
    _scroll()
)