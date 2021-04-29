import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';



$(window).scroll(function() {
    if ($(this).scrollTop() >= 250) {
        $("#navBar").addClass("noTransparrent");
    } else {
        $("#navBar").removeClass("noTransparrent");
    }
    if ($(this).scrollTop() >= 350) {
        $("#progress1").addClass("progress-bar1");
    } else {
        $("#progress1").removeClass("progress-bar1");
    }
    if ($(this).scrollTop() >= 350) {
        $("#progress2").addClass("progress-bar2");
    } else {
        $("#progress2").removeClass("progress-bar2");
    }
    if ($(this).scrollTop() >= 350) {
        $("#progress3").addClass("progress-bar3");
    } else {
        $("#progress3").removeClass("progress-bar3");
    }
    if ($(this).scrollTop() >= 350) {
        $("#progress4").addClass("progress-bar4");
    } else {
        $("#progress4").removeClass("progress-bar4");
    }
});
$(document).ready(function() {
    AOS.init({
        duration: 800,
        disable: 'mobile',
    });
    $("a.scroll").on('click', function(event) {
        var hash = this.hash;
        $('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800, function() {});
    });

    $('#progressbar  p span').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
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
            duration: 1000,
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
            duration: 1000,
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
            duration: 1000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now) + '%');
            }
        });
    });

    $('#copyright').text("All rights reserved" + " " + new Date().getFullYear());


});