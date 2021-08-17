jQuery('.slider').click(function(){
    jQuery('body').toggleClass('dark');
    if (jQuery('body').hasClass('dark') === true){
        jQuery('#mode').text('Back to normal')
    } else {
        jQuery('#mode').text('Dark Mode')

    }
});