jQuery(function () {
    $('#eye').click(function() {
        $(this).toggleClass('bi-eye-slash-fill bi-eye-fill');
        if($('.pass').attr('type')==='password'){
            $('.pass').attr({'type':'text'});
        }else{
            $('.pass').attr({'type':'password'});
        }
    });
});