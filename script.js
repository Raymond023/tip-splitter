'use strict';

//buttons
const custom = $('#custom');
const button =$('.button');
const reset =$('#reset');


// Input fields

const bill = $('#bill');
const diners = $('#diners');

const billError = $('.user-input div span');
const dinersError = $('.person div span');

const customInput = $('<input type="number" id ="customInput" style"padding: 0px; margin: 0px; height:100%;">');


// input values
let billInput = 0;
let dinersInput = 1;

// Results
let tipAmount = $('#tipAmount');
let total = $('#totalAmount');

// functions
function tipCalculator(percentage) {
    if(dinersInput > 0) {
        let tip = (billInput * percentage) / dinersInput;
        let totalCost = (billInput / dinersInput) + tip;

        tipAmount.text('$' + tip.toFixed(2));
        total.text('$' + totalCost.toFixed(2));
    } else {
        tipAmount.text('$0.00');
        total.text('$0.00');
    }

}


function customPercent () {
    customInput.on('input', function() {
        let percent = parseFloat($(this).val()) / 100;
        tipCalculator(percent)

    });
}

function buttonPercent() {
    button.click(function() {
        let percent = parseFloat($(this).attr('id')) /100;
        
        tipCalculator(percent)
        
    })
}

function userInput (inputValue) {
    inputValue.on('input', function() {
        billInput = parseFloat(bill.val()) || 0;
        dinersInput = parseInt(diners.val()) || 0;
        tipCalculator(0)
        
    })
}

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

function validateInput(input, error) {

    input.blur(function () {
        if(Number($(this).val()) === 0 ) {
            error.css({"display":"block"});
            input.addClass("error");
            
        } else {
            input.removeClass("error");
            error.css({"display":"none"});
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
        bill.removeClass("error");
        billError.css({"display":"none"});
        bill.val('');
        customInput.val('')
        diners.val('');
        diners.removeClass("error");
        dinersError.css({"display":"none"});
        reset.removeClass('clear');
        button.removeClass("active");
        tipAmount.text('$0.00');
        total.text('$0.00');
    })
}

//invoking functions
button.on("click", changeBgColor);
customValue();
validateInput(bill, billError);
validateInput(diners, dinersError);
resetAll();
userInput(bill);
userInput(diners);
customPercent();
buttonPercent();