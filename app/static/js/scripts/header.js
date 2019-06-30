function _showTooltype () {
    $('.header--icon').hover(function () {
        $(this).toggleClass('header--icon--show-content')
    })
}

$(document).ready(
    _showTooltype
)