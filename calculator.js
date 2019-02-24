let displayValueArr = [];

const container = document.querySelector('#screen');
container.style.color = 'blue';
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
btnClear.onclick = () => display('');
const btnPlus = document.querySelector("#add");
btnPlus.onclick = () => display('+');
const btnMinus = document.querySelector("#subtract");
btnMinus.onclick = () => display('-');
const btnMultiply = document.querySelector("#multiply");
btnMultiply.onclick = () => display('*');
const btnDivide = document.querySelector("#divide");
btnDivide.onclick = () => display('/');




function display(x) {
	if (x=='') {
		displayValueArr = [];
	}
	displayValueArr.push(x);
	let displayValueStr = displayValueArr.join(' ');
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

function operate (x,y,z) {
if(z=='+') {
	return add(x,y);
}
else if(z=='-') {
	return subtract(x,y);
}
else if(z=='*') {
	return multiply(x,y);
}
else if(z=='/') {
	return divide(x,y);
}
}
