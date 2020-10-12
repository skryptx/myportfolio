$(document).ready(function(){
    $(".nav-link").on('click', function(){
        $(".navbar-toggler-icon").click();
    });
    $(window).scroll(function() {
        var position = $(this).scrollTop();

        $('.section').each(function() {
            var target = $(this).offset().top;
            var id = $(this).attr('id');

            if (position >= target - 300) {
                $('.navbar > ul > li > a').removeClass('active');
                $('.navbar > ul > li > a[href=\\#' + id + ']').addClass('active');
        }
        });
    });
    $(".nav-link").click(function(){
        $('.navbar > ul > li > a').removeClass('active');
        $(this).addClass('active');
    });
    $(".social-links i").hover(function(){
        $(this).parent().find("span").addClass("glyphicon-hover");
    });
    $(".social-links i").mouseleave(function(){
        $(this).parent().find("span").removeClass("glyphicon-hover");
    });
});
