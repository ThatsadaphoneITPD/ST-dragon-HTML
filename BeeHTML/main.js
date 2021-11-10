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
    document.getElementById("op2").innerHTML = ` x: ${x}; y: ${y}; z:${z} ` ;
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


