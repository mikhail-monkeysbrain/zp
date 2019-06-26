function _toggleMenu () {
    $('.header--nav-toggler').click(function() {
        $('body').toggleClass('header--opened')
    })
}

function _showDepthMenu () {
    let wWidth = $(window).width();

    $('.nav__main--depth-0 li').mouseover(function () {
        $('.nav__main--depth-0 li').removeClass('depth-active')
        $(this).addClass('depth-active')
    })
    // mobile & tablet
    $('.nav-arrow').click(function () {
        $(this).toggleClass('nav-arrow--revert').next().slideToggle()
    })
}

$(document).ready(
    _toggleMenu(),
    _showDepthMenu()
)