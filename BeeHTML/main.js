//alert("Helle Builder")
//constant String, number boolean and null
const name4 = "Hui";
const age = 32;
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

// what is JavaScript?

function Myjs(){
    document.getElementById('jsdemo').innerHTML = "JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible—applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.";
}
function On(){
    document.getElementById('myImage').src='image/light-on.gif';
}
function Off(){
    document.getElementById('myImage').src='image/puffin.jpg';
}

// variable
function v1() {
    var i = 5;
    var y = 6;
    var z = i + y;
    document.getElementById('v1').innerHTML =z;
    console.log(`vaiable i + y = z : ${z} `);
}


// var2
function v2() {
    var price1 = 5;
    var price2 = 8;
    var total = price1 + price2;
    document.getElementById('v2').innerHTML =total;
    console.log(`vaiable plus price 1 & 2 = total : ${total} `);
}
//var 3
function v3(){
    var person = "John Doe", carName = "Volvo", price = 200;
    document.getElementById("v3").innerHTML = `carname and price : ${carName} and ${price} `;
}
//var 4
function v4(){
    var x = 2 + 3 + "5";
    document.getElementById("v4").innerHTML = x;
}
//Data type

function dt1(){
    let x1 = 16 + "Volvo";
    let x2 = 16 + 5 + "Volvo";
    let x3 = "Volvo" + 16 + 78 ;
    let x4 = 16;                               
    let x5 = "Johnson";                    
    let x6 = {firstName:"John", lastName:"Doe"};
    let x7;
    x7 = 5;
    x7 = "John";
    let x8 = 34.00;     // Written with decimals
    let p = 5;
    let y = 5;
    let z = 6;
    //(p == y)       // Returns true
    //(p == z)       // Returns false
    const cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("dt1").innerHTML = ` x1: ${x1}; ${"<br>"} x2: ${x2}; ${"<br>"} x3: ${x3}; ${"<br>"} x4: ${x4}; ${"<br>"}
     x5: ${x5}; ${"<br>"} x6: ${x6.lastName}; ${"<br>"} x7: ${x7}; ${"<br>"} 
    x8: ${x8}; ${"<br>"} (p == y): ${(p == y)}; ${"<br>"} (z == y)${(z == y)}; ${"<br>"} cars: ${cars[1]}` ;
}

//operators
function op1(){
    let x = 5;
    let y = 2;
    let z = x * y;
    document.getElementById("op1").innerHTML = z;
}
function op2(){
    var x = 10;
    x += 5;
    var x1 = 19;
    x1 %= 8;
    let text1 = "What a very ";
    text1 += "nice day";
    document.getElementById("op2").innerHTML = x + " , "+ x1 + " , " + text1 ;
}
function op3(){
    let x = 5 + 5;
    let y = "5" + 5;
    let z = "Hello" + 5;
    document.getElementById("op3").innerHTML = ` x: ${x}; y: ${y}; z:${z} ` ;
}
function op4() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("op4").innerHTML = voteable + " to vote.";
}
function op5(){
    let x2 = 5 & 1;
    let x3 = 5 | 1;
    let x4 = 5 ^ 1;
    let x5 = ~5;
    let x6 = 5 << 1;
    let x7 = -5 >> 1;
    let x8 = 5 >>> 1;
    document.getElementById("op5").innerHTML = ` x2: ${x2}; x3: ${x3}; x4: ${x4}; x5: ${x5}; x6: ${x6}; x7: ${x7}; x8: ${x8};` ;

}


// var data type

var a = [1, 2, 3];// a store address
var b = [1, 2, 3];// b address
var c = [1, 2, 3];// c address
var d = c; // d store address same C
var e = [1, 2, 3]; //e store address
//
var f = e.slice(); //when using slice for f so, f will copy the value of e but in the other store address so it's will return false
console.log('a: ' + a)
console.log('d: ' + d)
console.log('c: ' + c)
console.log('e: ' + e)
console.log('d: ' + d)
console.log('f: ' + e)
console.log(`different store address: a === b : ${a === b} `);
console.log(`same store address: c === d : ${c === d} `);
console.log(`same value but not same store address: e === f : ${e === f} `);

// Let data type

const cars = ["Saab", "Volvo", "BMW"];
console.log(`const cars array : ${cars} `);

// Change an element:
cars[0] = "Toyota";
console.log(`const cars array change in index[0] : ${cars} `);

// Add an element:
cars.push("Audi");
console.log(`const cars array add new value : ${cars} `);

//function call

function myFunction1(p1, p2) {
    return p1 * p2;
}
console.log(`myFunction 4 * 5 : ${myFunction1(4,5)} `);


//object 

function ob1(){
    // Create an object:
    const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

    // Display some data from the object:
    document.getElementById("ob1").innerHTML =
    person.firstName + " is " + person.age + " years old.";
}

//Accessing Object Properties

function ob2(){
    // Create an object:
    const person = {
        firstName: "John",
        lastName : "Doe",
        id     :  5566
    };
    
    // Display some data from the object:
    document.getElementById("ob2").innerHTML =
    person.firstName + " " + person.lastName + " or " + person["firstName"] + " " + person["lastName"];
}

//Object Method

function ob3(){
    // Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object:
  document.getElementById("ob3").innerHTML = person.fullName() + " must not without this () " + person.fullName;
}
//event 

function displayDate() {
    document.getElementById("evn2").innerHTML = Date();
}
//formate Date
function HourTime() {
    var d = new Date();
    var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("Date1").innerHTML = n;
}
function fullDateTime() {
    var d = new Date();          
    var n = d.toLocaleString([], { hour12: true});
    document.getElementById("Date2").innerHTML = n;
}

// string method
function str1(){
    let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let str1 = "Apple, Banana, Kiwi";
    let str2 = "Apple, Banana, Kiwi";
    let text = "Please visit Microsoft!";
    let text1 = "My under Body is So Some big!";
    let text2 = "Hello";
    let text3 = "World";
    let text4 = "      Hello World!      ";
    let text5 = "5";
    let text6 = "HELLO WORLD";
    let text7 = "a,b,c,d,e,f";


    document.getElementById("str1").innerHTML = 
    `txt.length: ${txt.length}; ${"<br>"}
    str1.slice(7,13): ${str1.slice(7,17)}; ${"<br>"}
    str2.slice(-15,-6): ${str2.slice(-15,-6)}; ${"<br>"}
    str2.slice(7): ${str2.slice(7)}; ${"<br>"}
    str2.slice(12): ${str2.slice(-12)}; ${"<br>"}
    str2.slice(7): ${str2.slice(7)}; ${"<br>"}
    str2.substring(7,15): ${str2.substring(7,15)}; ${"<br>"}
    str2.2substr(7, 6): ${str2.substr(7, 6)}; ${"<br>"}
    str2.2substr(7): ${str2.substr(7)}; ${"<br>"}
    str2.2substr(-4): ${str2.substr(-4)}; ${"<br>"}
    text.replace("Microsoft", "ST-Big_Dragon"): ${text.replace("Microsoft", "ST-Big_Dragon")};${"<br>"}
    text.replace(/MICROSOFT/i, "ST-Dragon"): ${text.replace(/MICROSOFT/i, "St-Dagron")};${"<br>"}
    text.replace(/MICROSOFT/g, "ST-Dragon"): ${text.replace(/MICROSOFT/g, "St-Dagron")};${"<br>"}
    text1.toLowerCase(): ${text1.toUpperCase()}; ${"<br>"}
    text1.toLowerCase(): ${text1.toLowerCase()}; ${"<br>"} 
    text2.concat(" ", text3) ${text2.concat(" ", text3)}; ${"<br>"}
    let text4.trim(): ${text4.trim()}; ${"<br>"}
    text5.padStart(4,0): ${text5.padStart(4,0)}; ${"<br>"}
    text5.padEnd(4,0): ${text5.padEnd(4,0)}; ${"<br>"}
    text6.charAt(0): ${text6.charAt(0)}; ${"<br>"}
    text6.charAt(0): ${text6.charCodeAt(0)}; ${"<br>"}
    text6[0]: ${text6[0]}; ${"<br>"}
    text7.split(","): ${text7.split(",")}; ${"<br>"}
    text6.split(""): ${text6.split("")}; ${"<br>"}
    `
    ;
}

function num1(){
    let x = 567;
    let x1 = 9.656;
    let x6 = 6;


    document.getElementById("num1").innerHTML = 
    `
    (100 + 23).toString(): ${"sample"}; ${"<Br>"}
    x.toString(): ${x.toString() }; ${"<Br>"}
    (123).toString(): ${(123).toString()}; ${"<Br>"}
    (100 + 23).toString(): ${(100 + 253).toString() }; ${"<Br>"}
    
    x1.toExponential(2): ${x1.toExponential(2)}; ${"<Br>"}
    x1.toExponential(4): ${x1.toExponential(4)}; ${"<Br>"}
    x1.toExponential(6): ${x1.toExponential(6)}; ${"<Br>"}
    x1.toFixed(0): ${x1.toFixed(0)}; ${"<Br>"}
    x1.toFixed(2): ${x1.toFixed(2)}; ${"<Br>"}
    x1.toFixed(4): ${x1.toFixed(4)}; ${"<Br>"}
    x1.toFixed(6): ${x1.toFixed(6)}; ${"<Br>"}
    x1.toPrecision(): ${x1.toPrecision()}; ${"<Br>"}
    x1.toPrecision(2): ${x1.toPrecision(2)}; ${"<Br>"}
    x1.toPrecision(4): ${x1.toPrecision(4)}; ${"<Br>"}
    x1.toPrecision(6): ${x1.toPrecision(6)}; ${"<Br>"}
    x.valueOf(): ${x.valueOf()}; ${"<Br>"}
    (123).valueOf(): ${(123).valueOf()}; ${"<Br>"}
    (100 + 23).valueOf(): ${(100 + 23).valueOf()}; ${"<Br>"}
    Number(true): ${Number(true)}; ${"<Br>"}
    Number(false); ${Number(false)}; ${"<Br>"}
    Number("10"): ${Number("10")}; ${"<Br>"}
    Number("  10"): ${Number("  10")}; ${"<Br>"}
    Number("10.33"): ${Number("10.33")}; ${"<Br>"}
    Number("10,33"): ${Number("10,33")}; ${"<Br>"}
    Number("10 33"): ${Number("10 33")}; ${"<Br>"}
    Number("John"): ${Number("John")}; ${"<Br>"}
    Number(new Date("1970-01-01")): ${Number(new Date("1970-01-01"))}; ${"<Br>"}
    Number(new Date("2017-09-30")): ${Number(new Date("2017-09-30"))}; ${"<Br>"}
    parseInt("-10"): ${parseInt("-10")}; ${"<Br>"}
    parseInt("-10.33"): ${parseInt("-10.33")}; ${"<Br>"}
    parseInt("10"): ${parseInt("10")}; ${"<Br>"}
    parseInt("10.33"): ${parseInt("10.33")}; ${"<Br>"}
    parseInt("10 20 30"): ${parseInt("10 20 33")}; ${"<Br>"}
    parseInt("10 years"): ${parseInt("10 years")}; ${"<Br>"}
    parseInt("years 10"): ${parseInt("years 10")}; ${"<Br>"}
    parseFloat("10"): ${parseFloat("10")}; ${"<Br>"}
    parseFloat("10.33"): ${parseFloat("10.33")}; ${"<Br>"}
    parseFloat("10 20 30"): ${parseFloat("10 20 30")}; ${"<Br>"}
    parseFloat("10 years"): ${parseFloat("10 years")}; ${"<Br>"}
    parseFloat("years 10"): ${parseFloat("years 10")}; ${"<Br>"}
    let x = Number.MAX_VALUE; ${Number.MAX_VALUE}; ${"<Br>"}
    let x = Number.MIM_VALUE; ${Number.MIM_VALUE}; ${"<Br>"}
    let x = 1/0;: ${1/0}; ${"<Br>"}
    let x = Number.NEGATIVE_INFINITY;: ${Number.NEGATIVE_INFINITY}; ${"<Br>"}
    let x = -1/0; ${-1/0};: ${"<Br>"}
    let x = Number.NaN: ${Number.NaN}; ${"<Br>"}
    let x = 100 / "Apple";: ${100/"Apple"}; ${"<Br>"}
    x6.MAX_VALUE;: ${x6.MAX_VALUE}; ${"<Br>"}
    `
    ;
}

 //Arraay Methob 
 function Arr1(){
    const fruits = ["Banana", "Orange", "Apple", "Mango", "Melo", "Pei", "Arrow","Semi", "Onikiri"];
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];

    document.getElementById("Arr1").innerHTML = 
    `
    fruits.toString(): ${fruits.toString()}; ${"<Br>"}
    fruits.join(): ${fruits.join(" * ")}; ${"<Br>"}
    fruits.pop(): ${fruits.pop() + "<br>"}; ${"<Br>"}
    fruits : ${fruits}; <br><br>
    fruits.push(): ${fruits.push() + "<br>"}; ${"<Br>"}
    fruits : ${fruits}; <br><br>
    let fruit = fruits.shift(): ${fruits.shift() + "<br>"}; <br>
    fruits : ${fruits}; <br><br>
    fruits.unshift("Lemon"): ${fruits.unshift("Lemon") + "<br>"}; ${"<Br>"}
    fruits : ${fruits}; <br><br>
    fruits[0] = "Kiwi"; : ${fruits[0] = "Kiwi" }; <br><br>
    fruits : ${fruits}; ${"<br>"} ${"<br>"}
    fruits[fruits.length] = "Kiwi";: ${fruits[fruits.length] = "kiwi"}; <br><br>
    fruits : ${fruits}; ${"<br>"} ${"<br>"}
    delete fruits[0]: ${delete fruits[0] + "<br>"}; <br>
    fruits : ${fruits}; <br><br>
    Add em by fruits.splice(2, 2, "LemonWine", "SemiKiwi"); : ${fruits.splice(2, 2, "LemonWine", "SemiKiwi")}; <br><br>
    fruits : ${fruits}; <br> <br>
    Remove without hole by fruits.splice(0, 1); : ${fruits.splice(0, 1)}; <br><br>
    fruits : ${fruits}; <br> <br>
    const myChildren = myGirls.concat(myBoys); : ${ myGirls.concat(myBoys)}; <br> <br>
    Merge multi arr by arr1.concat(arr2, arr3); : ${arr1.concat(arr2, arr3)}; <br><br>
    Merge single str by arr1.concat("Peter"); : ${arr1.concat("Peter")}; <br><br>
    fruits : ${fruits}; <br><br>
    const citrus = fruits.slice(1); : ${fruits.slice(1)}; <br><br>
    const citrus = fruits.slice(1, 3); : ${fruits.slice(1, 3)}; <br><br>

    `;
}

//Condition
function cond(){
    if (new Date().getHours() < 18) {
        document.getElementById("Hours").innerHTML = "Good day with @_@ Google!!";
    }
}
function cond1() {
    let hour = document.getElementById("Hour").value;
    if ( hour < 18) {
        document.getElementById("hourcon").innerHTML = "Good day with Google of Holy fucker ";
        
    }
}
function cond2() {
    let hour = document.getElementById("HourC2").value;
    if ( hour < 20) {
        document.getElementById("Hourss").innerHTML = "Good day with Google Know? ";
    }
    else{
        document.getElementById("Hourss").innerHTML = "Bad day with Google stock Market Know? ";
    }
}

function cond3() {
    let hour = document.getElementById("HourC3").value;
    if ( hour < 15) {
        document.getElementById("Hoursss").innerHTML = "Good day with Google Know? ";
    }
    else if(hour >20 ){
        document.getElementById("Hoursss").innerHTML = "Worth day for Buy all Stock market ";
    }
    else{
        document.getElementById("Hoursss").innerHTML = "Bad day with Google stock Market Know? ";
    }
}
//Js For loop
function loopstrArr(){
    const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

    let text = "";
    for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
    }

    document.getElementById("lp").innerHTML = text;

}
function loopNum(){
    let text = "";

    for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
    }
    document.getElementById("lp").innerHTML = text
}

function loopInitVar(){
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let i, len, text;
    for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
    }
    document.getElementById("lp").innerHTML = text;
}
function LoopEvaluCondiIniVar(){
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let i = 2;
    let len = cars.length;
    let text = "";
    for (; i< len; i++){
        text += cars[i] + "<br>";
        // text = text + cars[i] + "<br>";
    }
    document.getElementById("lp").innerHTML = text
}
function loopIncreValue(){
    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let i = 0;
    let len = cars.length;
    let text = "";

    for (; i < len; ) {
    text += cars[i] + "<br>";
    i++;
    }
    document.getElementById("lp").innerHTML = text;
}
function LoopscopeVar(){
    var i = 5;
    var word = "have"
    var text = ""
    for (var i = 0; i < 10; i++) {
    
      text+= word + i +" "
      // some statements 
    }
    document.getElementById("lp").innerHTML = text + "<br>" + i;
}
function LoopscopeLet(){
    let i = 5;
    for (let i = 0; i < 10; i++) {
    // some statements
    }
    document.getElementById("lp").innerHTML = i;
}
//for loop in
function LoopIn(){
    const person = {fname:"John", lname:"Doe", age:25}; 

    let txt = "";
    for (let x in person) {
    txt += person[x] + " ";
    }
    const numbers = [45, 4, 9, 16, 25];

    let txt1 = "";
    for (let n in numbers) {
    txt1 += numbers[n];
    }
    document.getElementById("lp").innerHTML = `Loopin person: <br>${txt} <br> LoopIn numbers: <br> ${txt1} `;
}

function LoopArrforEach(){
    const numbers = [45, 4, 9, 16, 25];
    let txt = "";
    function MyValArr(value, index, array){
        txt += value+ "<br>";
    }
    numbers.forEach(MyValArr);
    document.getElementById("lp").innerHTML = txt;
}

//for loop in
function LoopOf(){
    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
    text += x + "<br>";
    }
    let language = "JavaScript";
    let text1 = "";
    for (let n of language) {
    text1 += n + "<br>";
    }
    document.getElementById("lp").innerHTML = `Loopof cars's obj: <br>${text} <br> LoopOf str language : <br> ${text1} `;;
}

//function 
function LoopWhile(){
    let text = "";
    let i = 0;
    while (i < 10) {
    text += "<br>The number is " + i;
    i++;
    }

    const cars = ["BMW", "Volvo", "Saab", "Ford"];
    let n = 0;
    let text1 = "";
    while (cars[n]) {
    text1 += cars[n] + "<br>";
    n++;
    }
    document.getElementById("lp").innerHTML = `LoopoWhile number: <br>${text} <br> LoopWhile car's obj : <br> ${text1} `;;
}

// convert str to number

function convertStrToNum(){
    document.getElementById("Convert1").innerHTML = 
    `Convert Str to number: <br>
    Number("3.14"):  ${Number("3.14")} <br> 
    Number(" "):  ${Number(" ")} <br>
    Number(""):  ${Number("")} <br>
    Number("99 88"):  ${Number("99 88")} <br>
    `;
}

function converNumToStr(){
    let x = 1234555888;
    document.getElementById("Convert2").innerHTML = 
    `Covert number to Str: <br>
    let x = 1234555888 <br>
    String(x):  ${String(x)} <br> 
    String(123567):  ${String(123567)} <br>
    String(123 + 44):  ${String(123 + 44)} <br>
    x.toString(): ${x.toString()} <br>
    (123).toString(): ${(123).toString()} <br>
    (100 + 37).toString(): ${(100 + 37).toString()} <br>
    `;
}

function convertStrToNum(){
    document.getElementById("Convert1").innerHTML = 
    `Convert Str to number: <br>
    Number("3.14"):  ${Number("3.14")} <br> 
    Number(" "):  ${Number(" ")} <br>
    Number(""):  ${Number("")} <br>
    Number("99 88"):  ${Number("99 88")} <br>
    `;
}

// Convert  Date  and fotmate to Full data /Am/pm

function DateToNum(){
    document.getElementById("Convert3").innerHTML = 
    `Convert Date to number: <br>
    DateHourTIme: ${new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")} <br>
    d = new Date();:  ${d = new Date()} <br> 
    Number(d):  ${Number(d)} <br>
    d.getTime():  ${d.getTime()} <br>
    `;
}
function DateToStr(){
    document.getElementById("Convert3").innerHTML = 
    `Convert Date to Str: <br>
    DateHourTIme: ${new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")} <br>
    String(Date()):  ${String(Date())} <br> 
    Date().toString() :  ${Date().toString()} <br>
    `;
}

function convertBooleamsToNum(){
    document.getElementById("Convert4").innerHTML = 
    `Convert Booleams to number: <br>
    Number(false):  ${Number(false)}; <br>
    Number(true):  ${Number(true)}: <br>
    `;
}
function convertBooleamsToStr(){
    document.getElementById("Convert4").innerHTML = 
    `Convert Booleams to Str: <br>
    String(false):  ${String(false)} <br> 
    String(true):  ${String(true)} <br>
    false.toString():  ${false.toString()} <br>
    true.toString():  ${true.toString()} <br>
    `;
}
function AutomaticTypeConvert(){
    document.getElementById("Convert5").innerHTML = 
    `Automatic Type Conversion: <br>
    (5 + null):::   ${(5 + null)}<br>
    ("5" + null):::   ${("5" + null)}<br>
    ("5" + 2):::   ${("5" + 2)}<br>
    ("5" - 2):::   ${("5" - 2)}<br>
    ("5" * "2"):::   ${("5" * "2")}<br>
    ("5" / "2"):::  ${("5" / "2")}<br>
    `;
}
//arraow function 

function arrowFun(){
    const arrowMulti = (x,y) => x*y;
    const arrowMulCur = (x, y) => { return x * y };
    document.getElementById("ES6").innerHTML = 
    `Arrow Function: <br>
    const arrowMulti = (x , y) => x*y; use by arrowMulti(5 , 5) :  ${arrowMulti(5,5)}; <br>
    const arrowMulCur = (x , y) => { return x * y };  buse by arrowMulCur(6 , 7):  ${arrowMulCur(6,7)}: <br>
    `;
}
//js class
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
function CarClass(){
    const Name = document.getElementById("Name").value;
    const Year = document.getElementById("Year").value;
    const d = new Date().toLocaleString([], { hour12: true});
    //add info in Car to variable
    const MyownCar = new Car(Name, Year);
    document.getElementById("class1").innerHTML= `CLass Car: Name: ${MyownCar.name + " Sold out : " + MyownCar.year} <br> ${"Date: " + d} `;
    //on console
    const C = MyownCar.name + " " + MyownCar.year;
    console.log(C)
}

// Promises
function Promises()
{
    const myPromise = new Promise(function(myResolve, myReject) {
        // "Producing Code" (May take some time)
        setTimeout(function(){ myResolve("I love You !!take time 3second/3000 to say"); myReject("i don't Love u bitch");}, 3000);
    });
      // "Consuming Code" (Must wait for a fulfilled Promise).
      
      myPromise.then(function(value) {
        document.getElementById("Promises1").innerHTML = value;
      });

}
//Symbol
function SymbolMet(){
    const person = {
        firstName: "Bee",
        lastName: "BabyDriver",
        age: 21,
        eyeColor:"BullEye"
    }

    let Id = Symbol("id");
    person[Id] = 3201999;

    document.getElementById("Symbol1").innerHTML =  `let Id = Symbol("id"); <br> person[Id] = 3201999; <br> person[Id]: ${person[Id]} <br> person.id: ${person.Id}`;
    console.log(person[Id] + " " + person.Id)
}
// String in ES6
var text = "Hello world, welcome to the universe. Jon Doe";

function Strinclu(){
    var inclu = text.includes("World");
    document.getElementById("Strtext").innerHTML = inclu;
}
function Strstrat(){
    var star = text.startsWith("Hello");
    document.getElementById("Strtext").innerHTML = star;
}
function Strend(){
    var end = text.endsWith("Doe");
    document.getElementById("Strtext").innerHTML = end;
}


function Es6Arr(){
    //Arry.from()
    const text1 = "ABCDEFGHIJKL";
    const myArr = Array.from(text1);
    //Array.Key()
    const fruits = ["Banana", "Papaya", "Milk", "SexOntheBreach", "Mango"]
    
    const keys = fruits.keys();
    let text = "";
    for (let x of keys) {
    text += x + "<br>";
    }

    //Array.find() and Array.findIndex()
    const numbers = [4, 9, 16, 25, 29];
    function myFind(value, index, array) {
        return value > 18;
    }
    
    let fin = numbers.find(myFind);
    let finindex = numbers.findIndex(myFind);
    document.getElementById("Array1").innerHTML =  
    `
    <br><br>Array.from("ABCDEFG"): <br>Output: <br> ${myArr}
    <br><br>fruits.keys(): <br>Output: <br> ${keys}
    <br><br>let text = "" of fruits.keys(): <br>Output: <br> ${text}
    <br><br> numbers.find(myFind): <br>Output: <br>${fin}
    <br><br> numbers.findIndex(myFind): <br>Output: <br>${finindex}
    `;
}







