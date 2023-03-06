function Add() {
    var number1,number2 , sum;
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    sum = number1 + number2;
    document.getElementById("result").value = sum;
}
function Sub() {
    var number1,number2 , sub;
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    sub = number1 - number2;
    document.getElementById("result").value = sub;
}
function Mul() {
    var number1,number2 , mul;
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    mul = number1 * number2;
    document.getElementById("result").value = mul;
}
function Div() {
    var number1,number2 , div;
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    div = number1 / number2;
    document.getElementById("result").value = div;
}
function Mod() {
    var number1,number2 , mod;
    number1 = parseInt(document.getElementById("number1").value);
    number2 = parseInt(document.getElementById("number2").value);
    mod = number1 % number2;
    document.getElementById("result").value = mod;
}