//alert("Helle Builder")
//constant String, number boolean and null
const name4 = "Khoa";
const age = 21;
//concatenation 
console.log(`My name ${name4} and age ${age}`);
//template string by backtick ` `
const Greeting = `My name ${name4} and Age ${age}`;
console.log(Greeting);
//Properties and Methods()
//get index number by .length
console.log(Greeting.length);
//method toUpperCase() and low()
const S = 'Hello New World';
console.log(S.toUpperCase());
console.log(S.toLowerCase());
console.log(Greeting.toUpperCase());

function ChangeText() {
    document.getElementById('introduction2').innerHTML = "This is taken by Js";
}

function Alert() {
    alert("You HAVE BEEN WARNED AND U STILL PRESS THIS ????? What wrong with you")
}


//Function with local and outer variable

let username = "Khoa" ; //outer variable
function Showmessage() {
    username = "Not Khoa"; //local variable
    let message = 'Hello' + username;
    alert(message);
} 

//Function with local and outer variable same datatype

let username2 = "Khoa" ; //outer variable
function Showmessage2() {
    let username2 = "Not Khoa"; //local variable
    let message = 'Hello' + username2;
    alert(message);
} 

//call backfunction

function Showmessage3(multmes) {
    document.getElementById("callbackMulti").innerHTML= multmes ;
}

function calcMulti(num1,num2,cbMulti) { 
    let sum = num1 + num2 ;
    cbMulti(sum) ;
}

const person= {fullname: "Khoa", age: "23"};
