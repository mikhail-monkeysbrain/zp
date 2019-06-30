function _citySelect () {
    $('.selector').select2({
        placeholder: ' ',
    });
    $('.selector__footer').select2({
        placeholder: ' ',
        dropdownParent: $('.footer-drop')
    });
    $('.selector__header').select2({
        placeholder: ' ',
        dropdownParent: $('.header-drop')
    });
}


$(document).ready(
    _citySelect()
)