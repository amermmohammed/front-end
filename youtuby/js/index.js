$(document).ready(function() {
    $(".first-list-element").addClass("active");
    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
});