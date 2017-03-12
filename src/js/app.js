//=include lib/jquery.min.js

jQuery(document).ready(function($) {
    var $mainForm = $('form.main-form'),
        $jsSelect = $('.js-select'),
        $inputNumWrap = $('.input-num-wrapper'),
        $inputNum = $('.input-num'),
        $payListImgWrap = $('.payments-list__img-wrap'),
        $formDirector = $('.js-form-director'),
        $index3form = $('.main-form__first.index3')

    $jsSelect.next('.js-button').on('click', function() {
        var $this = $(this),
            $jsSel = $this.siblings('.js-select'),
            $jsSelVal = $jsSel.val(),
            $labelText = $this.siblings('.label').text()

        if ($labelText.indexOf($jsSelVal) > -1) {
            return;
        }

        if ($jsSelVal.length) {
            $this.after('<span class="label label-default">' + $jsSelVal + '<span class="label__remove"><i class="glyphicon glyphicon-remove"></i></span></span>')
        }
    });

    $inputNumWrap.next('.btn--orange').on('click', function(e) {
        e.preventDefault();
        
        var $this = $(this),
            $jsSel = $this.siblings('.js-select'),
            $inpNum = $this.siblings('.input-num-wrapper').find('.input-num');

        if ($jsSel.val().length && $inpNum.val().length) {
            $this.after('<span class="label label-default">' + $jsSel.val()
                        + ' - ' + $inpNum.val() + '%<span class="label__remove"><i class="glyphicon glyphicon-remove"></i></span></span>');
        }
    });

    $formDirector.on('click', '.btn--orange', function(e) {
        e.preventDefault();

        $formDirector.clone(true).insertAfter($formDirector).find('.col-md-4').html('');
    });

    $index3form.on('click', '.btn--orange', function(e) {
        e.preventDefault();

        $index3form.clone(true).insertAfter($index3form);
    });

    $mainForm.on('click', '.label__remove', function(event) {
        event.preventDefault();
        $(this).closest('.label').remove();
    });

    $mainForm.on('submit', function(e) {
        var $form = $(this);
        var postData = $form.serialize();

        $.ajax({
            url: $form.attr('action'),
            method: 'post',
            data: postData,
            success: function() {
                location.assign('index2.php')
            },
            error: function(jqXHR, textStatus, errorThrown) {
            }
        });

        return false;
    });

    $('.main-nav__step').on('click', 'a', function(e) {
        e.preventDefault()

        console.log('clicked');

        $(this).closest('body').find('form .btn.btn--big').click()
    })

});
