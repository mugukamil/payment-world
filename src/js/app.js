//=include lib/jquery.min.js

jQuery(document).ready(function($) {
    var $jsSelect = $('.js-select'),
        $inputNumWrap = $('.input-num-wrapper'),
        $inputNum = $('.input-num'),
        $payListImgWrap = $('.payments-list__img-wrap');

    $jsSelect.next('.btn--orange').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            $jsSel = $(this).siblings('.js-select');
        if ($jsSel.val().length) {
            $this.after('<span class="label label-default">' + $jsSel.val() + '</span>');
        }
    });
    $inputNumWrap.next('.btn--orange').on('click', function(e) {
        e.preventDefault();
        var $this = $(this),
            $jsSel = $(this).siblings('.js-select'),
            $inpNum = $this.siblings('.input-num-wrapper').find('.input-num');

        if ($jsSel.val().length && $inpNum.val().length) {
            $this.after('<span class="label label-default">' + $jsSel.val()
                        + ' - ' + $inpNum.val() + '%</span>');
        }
    });

    $payListImgWrap.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active checked');
    });

});
