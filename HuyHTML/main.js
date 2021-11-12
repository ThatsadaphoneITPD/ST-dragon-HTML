function Hello(){
    document.getElementById('demo2').innerHTML = "Hello World";
}

function showDate(){
    document.getElementById('demo1').innerHTML = Date();
}

function showString() {
    let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = txt.length;
    let str = "Pear, Guava, Grapes, Watermelon, Tomato, Orange, Lime, Lemon";
    let part1 = str.slice(3, 6);
    let part2 = str.substring(5, 2);
    let part3 = str.substr(2, 5);
    document.getElementById('demo3').innerHTML = ` ${length} ${part1} <br> ${part2} <br> ${part3}`;
    let
}




