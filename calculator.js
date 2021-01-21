// Spremeni tekst na ekranu
document.getElementById("screen").innerHTML = "0";

// spremenljivke v kateri se zapise stevilka ena in stevilka dve ter operator
let x = 0;
let y = 0;
let operator = "";

// Klik na gumb spremeni tekst na ekranu
function printToScreen(number) {
    // gleda ce je nic
    let currentNumbers = document.getElementById("screen").innerHTML;
    // vpise stevilke
    if(currentNumbers.length == 1 && currentNumbers == "0") {
        document.getElementById("screen").innerHTML = number;
    } else {
        // ko pride do 10 se ustavi
        if(currentNumbers.length < 10){
        document.getElementById("screen").innerHTML += number;
        }
    }
    // zmanjša font
    if(currentNumbers.length >= 7) {
        document.getElementById("screen").style.fontSize = "40px";
    } else {
        document.getElementById("screen").style.fontSize = "60px";
    }  
}

// funkcija, ki izvaja operacije
function operation(x,y,operator) {
    if (operator == "+") {
        return x+y;
    } else if(operator == "-") {
        return x-y;
    } else if(operator == "*") {
        return x*y;
    } else if(operator == "/" && y!=0) {
        return x/y;
    } else {
        return "error";
    }
}

// funkcija, ki izbriše operatorjem ozadje
function resetBgColor() {
    document.getElementById("sum").classList.remove("colorOnClickActive");
    document.getElementById("subtraction").classList.remove("colorOnClickActive");
    document.getElementById("multiplication").classList.remove("colorOnClickActive");
    document.getElementById("division").classList.remove("colorOnClickActive");
}

// funkcija, ki menja ac v c
function acToC() {
    document.getElementById("ac").innerHTML = "C";
}
// funkcija, ki menja c v ac
function cToAc() {
    document.getElementById("ac").innerHTML = "AC";
}

document.getElementById("null").onclick = function() {
    printToScreen(0);
    resetBgColor();
    acToC();
}
document.getElementById("one").onclick = function() {
    printToScreen(1);
    resetBgColor();
    acToC();
}
document.getElementById("two").onclick = function() {
    printToScreen(2);
    resetBgColor();
    acToC();
}
document.getElementById("three").onclick = function() {
    printToScreen(3);
    resetBgColor();
    acToC();
}
document.getElementById("four").onclick = function() {
    printToScreen(4);
    resetBgColor();
    acToC();
}
document.getElementById("five").onclick = function() {
    printToScreen(5);
    resetBgColor();
    acToC();
}
document.getElementById("six").onclick = function() {
    printToScreen(6);
    resetBgColor();
    acToC();
}
document.getElementById("seven").onclick = function() {
    printToScreen(7);
    resetBgColor();
    acToC();
}
document.getElementById("eight").onclick = function() {
    printToScreen(8);
    resetBgColor();
    acToC();
}
document.getElementById("nine").onclick = function() {
    printToScreen(9);
    resetBgColor();
    acToC();
}
document.getElementById("ac").onclick = function() {
    document.getElementById("screen").innerHTML = "0";
    document.getElementById("screen").style.fontSize = "60px";
    if(document.getElementById("ac").innerHTML == "C") {
        document.getElementById("screen").innerHTML = "0";
        cToAc();
    } else {
        x = 0;
        y = 0;
        operator = "";
    }
    resetBgColor();
}
document.getElementById("dot").onclick = function() {
    let screen = document.getElementById("screen").innerHTML;
    let dot = "."
    if(screen.indexOf(dot) == -1) {
        // piko doda temu kar je ze izpisano na ekranu
        document.getElementById("screen").innerHTML = screen + dot;
    }
    acToC();
}
document.getElementById("sum").onclick = function () {
    let currentNumbers = document.getElementById("screen").innerHTML;
    x = currentNumbers;
    operator = "+";
    document.getElementById("screen").innerHTML = 0;
    // doda razlicno ozadje
    document.getElementById("sum").classList.add("colorOnClickActive");
}
document.getElementById("subtraction").onclick = function () {
    let currentNumbers = document.getElementById("screen").innerHTML;
    x = currentNumbers;
    operator = "-";
    document.getElementById("screen").innerHTML = 0;
     // doda razlicno ozadje
     document.getElementById("subtraction").classList.add("colorOnClickActive");
}
document.getElementById("multiplication").onclick = function () {
    let currentNumbers = document.getElementById("screen").innerHTML;
    x = currentNumbers;
    operator = "*";
    document.getElementById("screen").innerHTML = 0;
     // doda razlicno ozadje
     document.getElementById("multiplication").classList.add("colorOnClickActive");
}
document.getElementById("division").onclick = function () {
    let currentNumbers = document.getElementById("screen").innerHTML;
    x = currentNumbers;
    operator = "/";
    document.getElementById("screen").innerHTML = 0;
     // doda razlicno ozadje
     document.getElementById("division").classList.add("colorOnClickActive");
}
document.getElementById("equal").onclick = function () {
    let currentNumbers = document.getElementById("screen").innerHTML;
    y = currentNumbers;
    document.getElementById("screen").innerHTML = 0;
    // parseInt - spremeni iz stringa v stevilko parseFloat uposteva decimalke
    let result = operation(parseFloat(x),parseFloat(y),operator);
    printToScreen(result);
}
document.getElementById("plusMinus").onclick = function () {
    // mnozi z -1, da dobi s klikom na +/- pravi predznak
    let currentNumbers = document.getElementById("screen").innerHTML;
    let x = parseFloat(currentNumbers) * -1;
    document.getElementById("screen").innerHTML = x;
}


