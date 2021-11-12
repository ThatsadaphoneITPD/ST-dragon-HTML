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

//string
let str  = "Can u locate the word \"u\" ? ";

function findWord() {
    
    text1 = document.getElementById("findword").innerHTML = str.indexOf("u");
}

function sliceWord() {
    
    text2 = document.getElementById("findword").innerHTML = str.slice(4,6);
}

//number
x = 50
y = 6.96969

function numberPlus() {
    num1 = x + y ;
    document.getElementById("number").innerHTML = num1;
}

function toFixed() {
    num2 = document.getElementById("number").innerHTML = y.toFixed(3)
}

function toPrecision() {
    document.getElementById("number").innerHTML = 
    y.toPrecision() + "<br>" +
    y.toPrecision(2) + "<br>" +
    y.toPrecision(4) + "<br>" +
    y.toPrecision(6);  
}

//array
const fruits = ["Mango" , "Durian" , "Lemon" , "Apple"]

function fruitList() {
    document.getElementById("arrayDisplay").innerHTML = fruits.toString() + "<br>" + "damn this ugly";
}

function fruitList1() {
    document.getElementById("arrayDisplay").innerHTML = fruits.join(", ")
}

function fruitPop(){
    document.getElementById("arrayDisplay").innerHTML = "Imma take the fruit" + " " +
    fruits.pop() + '<br>' +
    'u only have : ' + fruits.join(", "); //pop take away the last element of the array, shifting gonna take the first one of the array
}

function fruitPush() {
    document.getElementById("arrayDisplay").innerHTML = "I'll give u my kiwi " + 
    fruits.push('kiwi') + '<br>' +
    'u only have : ' + fruits.join(", "); //push add the last element of the array, unshift gonna add to the last element of the array
}

function fruitSort() {
    document.getElementById("arrayDisplay").innerHTML =  fruits.sort()
}

function HourTime() {
    var d = new Date();
    var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("Date1").innerHTML = n;
}
function fullDateTime() {
    var d = new Date();          
    var n = d.toLocaleString([], { hour12: true});
    document.getElementById("Date1").innerHTML = n;
}

function hourGreeting() {
    if(new Date().getHours() < 18) {
        document.getElementById("Date1").innerHTML = "Go back to work u lazy bum"
    }
}

function dayGreeting() {
    var hour = new Date().getHours();
    let greeting;
    if(hour<11) {
        greeting = "Good Morning" ;
    } else if (hour<18) {
        greeting = "Good Afternoon"
    }else {
        greeting = "Good Night"
    }
    document.getElementById("Date1").innerHTML = greeting;
}

// switch
function dayWhat(){
    let day;
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case  6:
            day = "Saturday";
    }
    document.getElementById("Date1").innerHTML= "Today is" + " " + day;
}