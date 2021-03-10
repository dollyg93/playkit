(function($, window, document) {
    $('input[name="intervaltype"]').click(function () {
        $(this).tab('show');
        $(this).removeClass('active');
    });
    $('input[type="file"]').imageuploadify();
})(jQuery, window, document);