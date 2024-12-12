'use strict';

//buttons

const five = $('#5');
const ten = $('#10');
const fifteen = $('#15');
const twentyFive = $('#25');
const fifty = $('#50');
const custom = $('#custom');
const button =$('.button');
const reset =$('#reset');


// Original Input fields

const bill = $('#bill');
const diners = $('#diners');

const billError = $('.user-input div span');
const dinersError = $('.person div span');

const dinersInput = Number(diners.val());
const billInput = document.querySelector('#bill').value;



// const btns = [five, ten, fifteen, twentyFive, fifty];
const customInput = $('<input type="number" style"padding: 0px; margin: 0px; height:100%;">');

function changeBgColor () {
    button.removeClass("active");
    $(this).toggleClass("active");
    reset.addClass('clear');
}

function customValue(){

    custom.after(customInput);
    customInput.width(custom.width());
    customInput.hide();

    
    custom.click(function(){
        $(this).hide();
        customInput.show().focus();
    });
    customInput.blur(function(){
        $(this).hide();
        custom.show();
        if(Number(customInput.val()) >= 1 && customInput.val() !== '') {
            reset.addClass("clear");
        }
    });
}

function billErrorMesaage() {

    bill.blur(function () {
        if(Number($(this).val()) === 0 ) {
            billError.css({"display":"block"});
            bill.addClass("error");
            
        } else {
            bill.removeClass("error");
            billError.css({"display":"none"});
        }
        resetAll();
    })
}

function dinerErrorMesaage() {
    diners.blur(function () {
        if(Number($(this).val()) === 0 ) {
            dinersError.css({"display":"block"});
            diners.addClass("error");
        }else {
            diners.removeClass("error");
            dinersError.css({"display":"none"});
        }
        resetAll();
    })
}

function resetAll () {
    if(Number(bill.val()) >= 1 && bill.val() !== '' || 
        Number(diners.val()) >= 1 && diners.val() !== ''  
    ) {
    reset.addClass("clear");
} else {
    reset.removeClass("clear");
}
    reset.click(function() {
        bill.val('');
        customInput.val('')
        diners.val('');
        reset.removeClass('clear');
        button.removeClass("active");
    })
}


//invoking functions
button.on("click", changeBgColor);
customValue();
billErrorMesaage();
dinerErrorMesaage();
resetAll()