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

function showImage(src){
    document.getElementById('img_meo').src = src;
}

var name = "Manh Hai";
var firstName, lastName;
function printName(){
    document.getElementById('displayName').innerHTML = name;
}

function myFunction(param){
    if (typeof param === 'function'){
    param('test js');
    }
}

function myCallback(value){
    console.log('value: ', value);
}

myFunction(myCallback);


var courses = [
    'haha',
    'hoho',
    'hihi',
];

Array.prototype.map2 = function(callback1){
    var output = [];
    var arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i){
       var result = callback1(this[i], i);
        output.push(result);
       //        console.log('result: ', result);
    }
    return output;
}

var htmls = courses.map2(function(course){
    return `<h2>${course}<h2>`;
});
console.log(htmls.join(''));

// var htmls = courses.map(function(course) {
//     return `<h2>${course}<h2>`;
// });

// console.log(htmls.join(''));

var input = document.getElementById("myInput");

function testFunction() {
    var filter, ul, li, a, i;
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    if (!filter) {
      ul.style.display = "none";
    }else{
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              ul.style.display = "block";
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";

          }
      }
    }
}
//input.addEventListener("keyup", testFunction);


function myMove() {
    var btn = document.getElementById("btn"); 
    btn.style.display = "none";
    var elem = document.getElementById("myAnimation");   
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
  }



  //function do_something(){
  //  alert('đã click vào nút này?');
//}


var a_list = document.getElementsByClassName("show");
             
            for (var i = 0; i < a_list.length; i++){
                a_list[i].onclick = function()
                {
                    alert('vừa click vào ?');
                   
                    return false
                };
            }