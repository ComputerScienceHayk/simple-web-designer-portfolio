$('#contactform').on('submit', function (e) {
    $(this).attr("disabled", true);
    $('.contact-submit').text('Sending Message...');
    var dataString = $(".contact-form form").serialize();
    $.ajax({
        type: 'POST',
        url: "contact.php",
        data: dataString,
        success: function () {
            $('.contact-form form').hide();
            $('.contact-form').html("<div id='message'></div>");
            $('#message').html("<h2 class='thanks'>Thanks, We got your Message!</h2>")
                .append("<p class='ill'>I will be in touch soon.</p>");
        },
        error: function (data) {
            console.log('Silent failure.');
        }
    });
    return false;
});