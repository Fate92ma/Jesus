$(document).ready(function () { // Start Coding Here

    // ScrollSpy

    $('.section').headerhighlight({
        elementsChanging: $('.nav-link'),
        currentClass: 'nav-active',
        offset: 0
    });

    // Smooth Scroll

    $('nav a').click(function () {

        var sectionTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1200);

    });

    // Sticky Nav

    $(window).scroll(function () {

        var windScro = $(window).scrollTop();

        if (windScro >= 790) {
            $("nav").addClass("fixed");

        } else {
            $("nav").removeClass("fixed");
        }
    });

    // Blog

    $('#mixedSlider').multislider({
        duration: 1200,
        interval: 3000
    });

    // Gallery

    $(".tabs li").click(function () {
        var tab = $(this).attr("tab");
        $("#gallery1 , #gallery2 , #gallery3, #gallery4").hide();
        $("#" + tab).fadeIn();
    });

    $("[tab]").on("click", function () {
        $('[tab]').removeClass('active');
        $(this).addClass('active');
    });

    // Switch Colors

    var li = $("ol li");

    li.eq(0).css({
        background: "#fdd55a",
        color: "#000"
    });

    li.eq(1).css({
        background: "#286178",
        color: "#fff"
    });

    li.eq(2).css({
        background: "#62bfe6",
        color: "#fff"
    });

    li.click(function () {
        $(".btn1, .btn2, .btn3, [type=submit], [type=reset]").css({
            "background": $(this).css("background"),
            "color": $(this).css("color")
        })
    });

}); // End Code