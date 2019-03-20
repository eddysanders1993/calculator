let displayValueArr = [];
let displayValueStr = '';
let numberStr = '';
let valueArr = [];
let numArr = [];
let solution = '';
let solutionFloat = '';
let solutionFloatRounded = '';
let decimalArr = [];
let valString = '';

let lastOperator = [];
let lastNumber = '';



const container = document.querySelector('#screen');
container.style.cssText = 'color: white';
const btnSeven = document.querySelector("#seven");
btnSeven.onclick = () => display(7);
const btnEight = document.querySelector("#eight");
btnEight.onclick = () => display(8);
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
btnZero.onclick = () => display(0);
const btnClear = document.querySelector("#clear");
btnClear.onclick = () => clearDisplay();
const btnPlus = document.querySelector("#add");
btnPlus.onclick = () => saveValues('+');
const btnMinus = document.querySelector("#subtract");
btnMinus.onclick = () => saveValues('-');
const btnMultiply = document.querySelector("#multiply");
btnMultiply.onclick = () => saveValues('*');
const btnDivide = document.querySelector("#divide");
btnDivide.onclick = () => saveValues('/');
const btnEqual = document.querySelector("#equals");
btnEqual.onclick = () => saveAndOperate();
const btnDecimal = document.querySelector("#decimal");
btnDecimal.onclick = () => display('.');
/*const btnBackSpace = 	document.querySelector("#backspace");
btnBackSpace.onclick = () => goBack();

function goBack() {
valArr.incluedes(operator) and numberStr !== '' ? splice numberStr :
	else if valArr includes operator splice valArr and valArr.join = numberStr (this will
	put valArr into numberStr so future digits can be added on)

	numArr.splice(-1,1);
	numberStr = numberStr.slice(0,numberStr.length-1);
	displayValueArr.splice(-1,1);
	valueArr.splice(-1,1);
	if (displayValueStr.length == 1) {
		displayValueStr = '';
		container.textContent = displayValueStr;
	}
	else {
	displayValueStr = displayValueStr.slice(0,displayValueStr.length-1);
	if(displayValueStr[displayValueStr.length-1] == '+' ||displayValueStr[displayValueStr.length-1] == '-' ||displayValueStr[displayValueStr.length-1] == '*' ||displayValueStr[displayValueStr.length-1] == '/') {
		displayValueArr.splice(-1,1);
		valueArr.splice(-1,1);

		lastOperator = displayValueArr.lastIndexOf('+');
		lastNumber =  displayValueStr.slice(lastOperator+1);
		numberStr = lastNumber.slice(0,lastNumber.length-1);
		numArr = numberStr.split('');

		displayValueStr = displayValueStr.slice(0,displayValueStr.length-1);
		container.textContent = displayValueStr;
	}

}
*/
container.textContent = 0;

function displaySolution() {
	valString = valueArr.toString();
	/*decimalArr = valString.split('');*/
	if (valString.includes('I')) {
		container.textContent = 'Error';
	}
	else if (valString.includes('.')) {
			/*solution = decimalArr.join('');*/
			solutionFloat = parseFloat(valString);
			solutionFloatRounded = solutionFloat.toFixed(2);
			/*decimalArr = [];*/
			container.textContent = solutionFloatRounded;
	}
	else {
		container.textContent = valString;
	}
}






function clearDisplay() {
	displayValueArr = [];
	displayValueStr = '';
	numberStr = '';
	valueArr = [];
	numArr = [];
	solution = '';
	solutionFloat = '';
	solutionFloatRounded = '';
	decimalArr = [];
	container.textContent = 0;
}



function saveAndOperate() {
	finalNumberStr = numArr.join('');
	valueArr.push(finalNumberStr);
	numArr = [];
	numberStr = '';
	operate();

}

function saveValues(x) {

		if(valueArr.includes('*')||valueArr.includes('/')||valueArr.includes('+')||valueArr.includes('-')) {
			valueArr.push(numberStr);
			operate();
			valueArr.push(x);
			numArr = [];
			numberStr = '';
			displayValueArr.push(x);
			displayValueStr = displayValueArr.join('');
			container.textContent = displayValueStr;
		}
		else {
		if(numberStr=='') {
			valueArr.push(x);
			numArr = [];
			numberStr = '';
			displayValueArr.push(x);
			displayValueStr = displayValueArr.join('');
			container.textContent = displayValueStr;
		}
		else {
		valueArr.push(numberStr);
		valueArr.push(x);
		numArr = [];
		numberStr = '';
		displayValueArr.push(x);
		displayValueStr = displayValueArr.join('');
		container.textContent = displayValueStr;
		}
	}
}




function display(x) {

	if (displayValueStr.length<13) {
		numArr.push(x);
		numberStr = numArr.join('');
		displayValueArr.push(x);
		displayValueStr = displayValueArr.join('');
		container.textContent = displayValueStr;
	}
	else if(displayValueStr.length==13) {
		displayValueStr = "TOO LONG";
		container.textContent = displayValueStr;


	}
}



function multiply (x,y) {
	return x * y;
}

function add (x,y) {
	return x + y;
}

function subtract (x,y) {
	return x - y;
}

function divide (x,y) {
	return x / y;
}


function operate() {
	if(valueArr.includes('*')) {
		let multiplication = valueArr.indexOf('*')
		valueArr.splice(multiplication-1,3,multiply(parseFloat(valueArr[multiplication-1]),parseFloat(valueArr[multiplication+1])));
	}
	else if(valueArr.includes('/')) {
		let division = valueArr.indexOf('/')
		valueArr.splice(division-1,3,divide(parseFloat(valueArr[division-1]),parseFloat(valueArr[division+1])));
	}
	else if(valueArr.includes('-')) {
		let subtraction = valueArr.indexOf('-')
		valueArr.splice(subtraction-1,3,subtract(parseFloat(valueArr[subtraction-1]),parseFloat(valueArr[subtraction+1])));
	}
	else if(valueArr.includes('+')) {
		let addition = valueArr.indexOf('+')
		valueArr.splice(addition-1,3,add(parseFloat(valueArr[addition-1]),parseFloat(valueArr[addition+1])));
	}
	displaySolution();
	}
