function _dateStart () {
    $('.jsDateStart').datepicker($.extend({
        inline: true,
        changeYear: true,
        changeMonth: true,
        defaultDate: "+5d"
    },
     $.datepicker.regional['ru']
   ));
}

function _dateFinish () {
    $('.jsDateFinish').datepicker($.extend({
        inline: true,
        changeYear: true,
        changeMonth: true,
        defaultDate: "+12d"
    },
     $.datepicker.regional['ru']
   ));
}

$(document).ready(
    _dateStart(),
    _dateFinish()
)