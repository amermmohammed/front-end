$(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
        $("#navBar").addClass("noTransparrent");
    } else {
        $("#navBar").removeClass("noTransparrent");
    }
});

$(document).ready(function() {
    $("a.scroll").on('click', function(event) {
        var hash = this.hash;
        $('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function() {});
    });
});