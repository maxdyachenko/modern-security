$( document ).ready(function() {
    //menu dropdown animation
    $('.toggler').click(function () {
            $(this).toggleClass('active');
            $('.dropdown').slideToggle(250);
        }
    );
    //scroll for aside menu
    $(function(){
        $('#content').slimScroll({
            height: 'auto',
            color: '#78c8d6'
        });
    });
    $('.mobile-menu').click(function () {
        $('aside').toggleClass('active');
    })
});