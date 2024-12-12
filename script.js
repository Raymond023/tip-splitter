'use strict';

//buttons
const five = $('#5');
const ten = $('#10');
const fifteen = $('#15');
const twentyFive = $('#25');
const fifty = $('#50');
const custom = $('#custom');

const bill = $('#bill');
const diners = $('#diners');

const billError = $('.user-input div span');
const dinersError = $('.person div span');

const button =$('.button');

const reset =$('#reset');

// const btns = [five, ten, fifteen, twentyFive, fifty];
const customInput = $('<input type="number" style"padding: 0px; margin: 0px; height:100%; width:100px;">');

function changeBgColor () {
    button.removeClass("active");
    $(this).toggleClass("active");
};
function customValue(){

    custom.after(customInput);
    customInput.hide();
    customInput.width(custom.width());
    
    custom.click(function(){
        $(this).hide();
        customInput.show().focus();
    });
    customInput.blur(function(){
        $(this).hide();
        custom.show();
    });
}
function billErrorMesaage() {

    bill.blur(function () {
        if($(this).val() == 0 ) {
            billError.css({"display":"block"});
            bill.addClass("error");
        } else {
            bill.removeClass("error");
            billError.css({"display":"none"});
        }
    })
}
function dinerErrorMesaage() {
    diners.blur(function () {
        if($(this).val() == 0 ) {
            dinersError.css({"display":"block"});
            diners.addClass("error");
        }else {
            diners.removeClass("error");
            dinersError.css({"display":"none"});
        }
    })
}

if(parseInt(bill.val()) != 0 || 
    parseInt(diners.val()) != 0) {
    reset.addClass("clear");
} else {
    reset.removeClass("clear");
}


reset.click(function() {
    bill.val() == 0 && diners.val() == 0
})


button.on("click", changeBgColor);
customValue();
billErrorMesaage();
dinerErrorMesaage();
