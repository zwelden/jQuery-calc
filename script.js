/* 
js event keycode info
http://keycode.info/  */

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
		$('.results-field').text(String(lastInput));
		lastInput = undefined;
		lastOperator = undefined;
	}

}

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

function clickHandle(input) {
	if (buttonNumTexts.indexOf(input) > -1) {
		var currentFieldValue = $('.results-field').text();
		newFieldValue = currentFieldValue + String(input);
		$('.results-field').text(newFieldValue);
	}
	else if (operators.indexOf(input) > -1){
		if (typeof lastInput ===  'undefined') {
			lastInput = Number($('.results-field').text());
			lastOperator = input;
			$('.results-field').text('');
		}
		else {
			doMath(input);
		}
	}
	else {
		return;
	}
	return;
}

function eventHandle(e) {

}

function main() {
	$('.button').on('click', function(){
		var input = $(this).data("value");
		clickHandle(input);
	});
}

var eventNumInputs = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '190'];
var buttonNumTexts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
var operators = ['+', '-', '=', '/', '*']

var lastInput;
var lastOperator;

$(document).ready(main);