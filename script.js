'use strict';

//buttons

// const five = $('#5');
// const ten = $('#10');
// const fifteen = $('#15');
// const twentyFive = $('#25');
// const fifty = $('#50');
const custom = $('#custom');
const button =$('.button');
const reset =$('#reset');


// Original Input fields

const bill = $('#bill');
const diners = $('#diners');

const billError = $('.user-input div span');
const dinersError = $('.person div span');



const customInput = $('<input type="number" id ="customInput" style"padding: 0px; margin: 0px; height:100%;">');


// input values
const billInput = userInput(bill);
const dinersInput = userInput(diners);
// const customInputValue = parseFloat(customPercent(customInput));
// let clickedButton = buttonPercent()

// Results
let tipAmount = $('.tip p:last-child');
let total = $('.total p:last-child');

//
function tipCalculator(percentage) {

    let tip = (billInput * percentage) / diners;
    let totalCost = billInput / diners + tip;

    tipAmount.innerText =  '$' + tip;
    total.innerText = '$' + totalCost;
}
Calculator()

function customPercent () {
    customInput.on('input', function() {
        let percent = parseFloat($(this).val()/100);
        tipCalculator(percent)

    });
}

function buttonPercent() {
    button.click(function() {
        let percent = parseFloat($(this).attr('id')/100);
        
        tipCalculator(percent)
        
    })
}

function userInput (inputValue) {
    inputValue.on('input', function() {
        let percent = parseFloat($(this).val());
        tipCalculator(percent)
        
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
        bill.val('');
        customInput.val('')
        diners.val('');
        reset.removeClass('clear');
        button.removeClass("active");
        tipAmount.innerText = '$0.0';
        total.innerText = '$0.00';
    })
}



//invoking functions
button.on("click", changeBgColor);
customValue();
validateInput(bill, billError);
validateInput(diners, dinersError);
resetAll();

