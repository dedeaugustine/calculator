"use strict"
console.log("it is working!")

window.onload = init;

function init(){

const addButton = document.querySelector("#addButton");
const subtractButton = document.querySelector("#subtractButton");
const multiplyButton = document.querySelector("#multiplyButton");
const divideButton = document.querySelector("#divideButton");

addButton.addEventListener("click", add);
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click" , multiply);
divideButton.addEventListener("click", divide);

}

//create an add function that gets num1 and num2 of the page and sums them
function add(){

    //get the values out of the input fields the user types in
let number1 = Number (document.querySelector("#number1Field").value);
let number2 = Number (document.querySelector("#number2Field").value);

//do the math
let result = number1 + number2;

//put the result in the answer input field
document.querySelector("#answerField").value = result;
}

//create a subtract function that gets num1 and num2 of the page and subtracts them
function subtract(){

    //get the values out of the input fields the user types in
let number1 = Number (document.querySelector("#number1Field").value);
let number2 = Number (document.querySelector("#number2Field").value);

//do the math
let result = number1 - number2;

//put the result in the answer input field
document.querySelector("#answerField").value = result;
}

function multiply(){

    //get the values out of the input fields the user types in
let number1 = Number (document.querySelector("#number1Field").value);
let number2 = Number (document.querySelector("#number2Field").value);

//do the math
let result = number1 * number2;

//put the result in the answer input field
document.querySelector("#answerField").value = result;
}

function divide(){

    //get the values out of the input fields the user types in
let number1 = Number ( document.querySelector("#number1Field").value);
let number2 = Number ( document.querySelector("#number2Field").value);

//do the math
let result = number1 / number2;

//put the result in the answer input field
document.querySelector("#answerField").value = result;
}