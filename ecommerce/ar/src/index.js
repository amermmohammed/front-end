import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap';


$(function() {

    $('[data-toggle="tooltip"]').tooltip();
    $('.add-to-cart-btn').click(function() {
        alert('تمت إضافة المنتج إلى عربة الشراء');
    });
});