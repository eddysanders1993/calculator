let displayValueArr = [];
let displayValueStr = '';
let numberStr = '';
let valueArr = [];
let numArr = [];
let secondNumber = '';
let secondNumberArr = [];
let firstOperator = '';
let firstOperatorIndex = [];

const container = document.querySelector('#screen');
container.style.color = 'blue';
const btnSeven = document.querySelector("#seven");
btnSeven.onclick = () => display('7');
const btnEight = document.querySelector("#eight");
btnEight.onclick = () => display('8');
const btnNine = document.querySelector("#nine");
btnNine.onclick = () => display(9);
const btnFour = document.querySelector("#four");
btnFour.onclick = () => display(4);
const btnFive = document.querySelector("#five");
btnFive.onclick = () => display(5);
const btnSix = document.querySelector("#six");
btnSix.onclick = () => display(6);
const btnOne = document.querySelector("#one");
btnOne.onclick = () => display(1);
const btnTwo = document.querySelector("#two");
btnTwo.onclick = () => display(2);
const btnThree = document.querySelector("#three");
btnThree.onclick = () => display(3);
const btnZero = document.querySelector("#zero");
btnZero.onclick = () => display('0');
const btnClear = document.querySelector("#clear");
btnClear.onclick = () => clearDisplay();
const btnPlus = document.querySelector("#add");
btnPlus.onclick = () => saveValues('+');
const btnMinus = document.querySelector("#subtract");
btnMinus.onclick = () => saveValues('-');
const btnMultiply = document.querySelector("#multiply");
btnMultiply.onclick = () => display('*');
const btnDivide = document.querySelector("#divide");
btnDivide.onclick = () => display('/');
const btnEqual = document.querySelector("#equals");
btnEqual.onclick = () => saveAndOperate();


/*function saveOperations(x) {
	if(displayValueArr.includes('+'||'-'||'/'||'*')) {
		displayValueArr.push(x);
		displayValueStr = displayValueArr.join('');
	}
	else {
		displayValueArr.push(x);
		displayValueStr = displayValueArr.join('');
		firstNumber= firstNumberArray.join('');
		firstOperator = x;
	}
	container.textContent = displayValueStr;
}*/



function clearDisplay() {
	displayValueArr = [];
	displayValueStr = '';
	firstNumber = '';
	firstNumberArray = [];
	secondNumber = '';
	secondNumberArr = [];
	firstOperator = '';
	firstOperatorIndex = [];

	container.textContent = '';
}
/*press operator
all numbers before operator become firstNumber
create firstNumberArray
join Array into firstNumberString when first operator pressed
*/

function saveAndOperate() {


finalNumberStr = numArr.join('');
valueArr.push(finalNumberStr);
operate(valueArr);
}


function saveValues(x) {
	displayValueArr.push(x);
	displayValueStr = displayValueArr.join('');
	container.textContent = displayValueStr;
	numberStr = numArr.join('');
	numArr = [];
	valueArr.push(numberStr);
	valueArr.push(x);
}



function display(x) {
	numArr.push(x);
	displayValueArr.push(x);
	displayValueStr = displayValueArr.join('');
	container.textContent = displayValueStr;
	}


function multiply (x,y) {
return x * y;
}

function add (x,y) {
	return x+y;

}

function subtract (x,y) {
return x-y;
}

function divide (x,y) {
return x / y;
}

function operate (x) {


		while(valueArr.includes('+')) {
		let plus = valueArr.indexOf('+')
		return add(parseInt(valueArr[plus-1]),parseInt(valueArr[plus+1]));
	}

}
//only performs operations on first two numbers
// need to replace elements in array with solution


/*if(z=='+') {
	return container.textContent = add(x,y);
}
else if(z=='-') {
	return container.textContent = subtract(x,y);
}
else if(z=='*') {
	return container.textContent = multiply(x,y);
}
else if(z=='/') {
	return container.textContent = divide(x,y);
}
}*/
