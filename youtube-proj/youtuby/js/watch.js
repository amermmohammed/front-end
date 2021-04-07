$(document).ready(function() {
    $("#myBtn").on("click", function() {
        read();
    });
    $(".replay").click(function() {
        $(this).parents("div.row").next("div.card").toggle()
    });
});

function read() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
}