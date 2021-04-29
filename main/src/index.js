import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap';
import 'animate.css/animate.min.css';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js';
import 'wow.js';


$(window).scroll(function() {
    if ($(this).scrollTop() >= 250) {
        $("#navBar").addClass("noTransparrent");
    } else {
        $("#navBar").removeClass("noTransparrent");
    }
});
$(document).ready(function() {

    $("a.scroll").on('click', function(event) {
        var hash = this.hash;
        $('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800, function() {});
    });
    $('#progressbar  p span').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.count1').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.count2').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now) + '+');
            }
        });
    });
    $('.count3').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now) + '%');
            }
        });
    });

    $('[data-toggle="tooltip"]').tooltip();
    $('.add-to-cart-btn').click(function() {
        alert('The product has been added to the cart');
    });
    $('#copyright').text("All rights reserved" + " " + new Date().getFullYear());


});