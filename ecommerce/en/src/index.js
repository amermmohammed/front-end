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
    $('.product-option input[type="radio"]').change(function() {
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');
    });

    $('[data-product-quantity]').on("change", function() {


        var newQuantity = $(this).val();


        var $parent = $(this).parents('[data-product-info]');


        var pricePerUnit = $parent.attr('data-product-price');


        var totalPriceForProduct = newQuantity * pricePerUnit;


        $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');


        calculateTotalPrice();

    });
    $('[data-remove-from-cart]').on("click", function() {
        $(this).parents('[data-product-info]').remove();


        calculateTotalPrice();
    });

    function calculateTotalPrice() {


        var totalPriceForAllProducts = 0;


        $('[data-product-info]').each(function() {


            var pricePerUnit = $(this).attr('data-product-price');

            var quantity = $(this).find('[data-product-quantity]').val();

            var totalPriceForProduct = pricePerUnit * quantity;


            totalPriceForAllProducts = totalPriceForAllProducts + (totalPriceForProduct);
        });
        $('#total-price-for-all-products').text(totalPriceForAllProducts);
    }
    var citiesByCountry = {
        sa: ['Makkah Al-Mukarramah', 'Riyadh', 'Jeddah', 'Medina', 'Al-Ahsa', 'Dammam', 'Taif', 'Buraidah', 'Tabuk', 'Al-Qatif', 'Khamis Mushait', 'Al-Khobar ', ' Hafar Al-Batin ', ' Jubail ', ' Al-Kharj ', ' Abha ', ' Hail ', ' Najran '],
        eg: ['Cairo', 'Giza', 'Alexandria', 'Shubra al-Khaima', 'Port Said', 'Suez', 'Mahalla al-Kubra', 'Luxor', 'Assiut'],
        jo: ['Amman', 'Zarqa'],
        sy: ['Damascus', 'Aleppo', 'Hama']
    };


    $('#form-checkout select[name="country"]').on("change", function() {

        var country = $(this).val();

        var cities = citiesByCountry[country];

        $('#form-checkout select[name="city"]').empty();


        $('#form-checkout select[name="city"]').append(
            '<option disabled selected value="">choose city</option>'
        );


        cities.forEach(function(city) {
            var newOption = $('<option></option>');
            newOption.text(city);
            newOption.val(city);
            $('#form-checkout select[name="city"]').append(newOption);
        });
    });


    $('#form-checkout input[name="payment_method"]').on("change", function() {


        var paymentMethod = $(this).val();

        if (paymentMethod === 'on_delivery') {


            $('#credit-card-info input').prop('disabled', true);

        } else {


            $('#credit-card-info input').prop('disabled', false);
        }

        $('#credit-card-info').toggle();
    });
});