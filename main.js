/**
 * Created by draven on 6/22/15.
 */
$(document).ready(function(){
    $('.add').each(function(){
        $(this).click(function(){
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
            var row_name = name +1;
            var ap_name_new = name +1;
            $(ap_amount).attr('class', ap_name_new);
            var rows = $(row).addClass(row_name);
            $(rows).ready(function(){
                $(ap_amount).change(function(){
                        var changeAmount = (ap_amount).val();
                        var apt = changeAmount*price;
                        $(rows).children('.sumcalc').text(apt);
                    });
            });
            $(document).mousemove(function(){
                var summ = 0;
                $('.sumcalc').each(function() {
                    summ += parseFloat($(this).text());
                    $('.total').text('total sum =' + summ)
                });

            });
            $(document).change(function(){
                var summ = 0;
                $('.sumcalc').each(function() {
                    summ += parseFloat($(this).text());
                    $('.total').text('total sum =' + summ)
                });

            });
        });
    });
});

$(document).on('click', '.btn', function (){
    $(this).parent('.row').remove();
});

