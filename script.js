function doMath(input) {
	var currentInput = Number($('.results-field').text());
	var operator = lastOperator;
	lastOperator = input;
	$('.results-field').text('');

	switch (operator) {
		case '+':
			lastInput = add(lastInput, currentInput);
			break;
		case '-':
			lastInput = subtract(lastInput, currentInput);
			break
		case '/':
			lastInput = divide(lastInput, currentInput);
			break;
		case '*':
			lastInput = multiply(lastInput, currentInput);
			break;
	}


	if (input === '=') {
		equals();
	}

}

/* 
Math Functions
*/

function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;

}

function multiply(x, y) {
	return x * y;
}

function divide(x, y)  {
	return x / y;
}

/*
Other input related functions
*/

function clr() {
	/* clears input field as well as lastInput and last Operator variables */
	$('.results-field').text("");
	lastInput = undefined;
	lastOperator = undefined;
}

function del(){
	/* deletes last number */
	var string = $('.results-field').text();
	$('.results-field').text(string.slice(0, -1));
}

function changeSign() {
	/* changes current input to positive or negative */
	var num = Number($('.results-field').text());
	num *= -1;
	$('.results-field').text(String(num));
}

function equals() {
	/* return result of calculation */
	if (String(lastInput).length >= 10) {
		/* convert to exponitial notation for numbers too large
		to fit on the screen */

		lastInput = Number(lastInput).toExponential(4)
	}
	$('.results-field').text(String(lastInput));
	lastInput = undefined;
	lastOperator = undefined;
}


/* input handling functions */

function clickHandle(input) {
	/* handles input from button clicks */	
	if (buttonNumTexts.indexOf(input) > -1) {
		/* check to see if input is a number
		if so, display the number in the results-field area */	
		var currentFieldValue = $('.results-field').text();
		if (currentFieldValue.length < 9) {
			newFieldValue = currentFieldValue + String(input);
			$('.results-field').text(newFieldValue);
		}
	}
	else if (operators.indexOf(input) > -1){
		/* check to see if input is an operator (+, -, *, etc)
		if the last input is undefined, prepare lastInput and lastOperator
		variables for use in calculation after next input occurs.
		otherwise, calls the doMath function to perform a calculation */
		if (typeof lastInput ===  'undefined') {
			lastInput = Number($('.results-field').text());
			lastOperator = input;
			$('.results-field').text('');
		}
		else {
			doMath(input);
		}
	}
	else if (input === 'clr') {
		clr();
	}
	else if (input === 'del') {
		del();
	}
	else if (input === '-/+') {
		changeSign();
	}
	else {
		return;
	}
	return;
}

function eventHandle(e) {
	/* future use for keyboard input */
}

function main() {
	$('.button').on('click', function(){
		var input = $(this).data("value");
		clickHandle(input);
	});
}

/* global variables */

const eventNumInputs = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '190'];
const buttonNumTexts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
const operators = ['+', '-', '=', '/', '*']

var lastInput;
var lastOperator;

$(document).ready(main);