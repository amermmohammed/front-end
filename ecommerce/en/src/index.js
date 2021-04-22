import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap';

$(function() {

    $('[data-toggle="tooltip"]').tooltip();
    $('.add-to-cart-btn').click(function() {
        alert('The product has been added to the cart');
    });
    $('#copyright').text("All rights reserved" + " " + new Date().getFullYear());
});