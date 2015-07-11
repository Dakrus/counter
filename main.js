/**
 * Created by draven on 6/22/15.
 */
$(document).ready(function(){
    TotalPrice();
    $('.add').click(function(){
        AddNewRow();
        TotalPrice();
    });
});

$(document).on('change', '.inputy', function (){
    var changeAmount = $(this).val();
    var price = $(this).closest('.row').children('.pricecalc').text()
    var rowSum = $(this).closest('.row').children('.sumcalc')
    var apt = changeAmount*price;
    rowSum.text(apt);
    TotalPrice();
});

$(document).on('click', '.btn', function (){
    $(this).parent('.row').remove();
    TotalPrice();
});

function TotalPrice() {
    var summ = 0;
    $('.sumcalc').each(function() {
        summ += parseFloat($(this).text());
        $('.total').text('total sum =' + summ)
    });
}


function AddNewRow() {
    var name = $('input[placeholder=name]').val();
    var price = $('input[placeholder=price]').val();
    var amount = $('input[placeholder=amount]').val();
    var sum = amount*price;
    var ap_name = $('<p class="namecalc" class="pi">' + name +'</p>');
    var ap_price = $('<p class="pricecalc" class="pi">' + price +'</p>');
    var ap_amount = $("<input class='inputy' class='one' step='1' type='number' value='amount'>");
    var ap_sum = $('<p class="sumcalc" class="pi">' + sum  +'</p>');
    var ap_btn = $('<button class="btn">X</button>');
    var row = $('<div class="row"></div>').append(ap_name, ap_price, ap_amount, ap_sum, ap_btn);
    $('.rows').append(row);
    $(ap_amount).attr('value', amount);
}

