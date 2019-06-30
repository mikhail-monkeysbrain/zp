function _send () {
    $('.jsNeedCallHeader').submit(function (e) {
        e.preventDefault()
        e.stopPropagation()
        $.ajax({
            // url: 'url',
            type: "POST",
            data: '',
            success: function() {
                $('.tooltype__heading--call').text('Спасибо за заявку!')
            }
        });
    })
}

$(document).ready(
    _send()
)