function addBy() {
    var num1= document.getElementById("firstNumber").value;
    var num2= document.getElementById("secondNumber").value;
    var sum = +num1 + +num2;
    document.getElementById("result").innerHTML = sum;
}
function subtractBy() {
    var num1= document.getElementById("firstNumber").value;
    var num2= document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 - num2;
}


function multiplyBy() {
    var num1= document.getElementById("firstNumber").value;
    var num2= document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    var num1= document.getElementById("firstNumber").value;
    var num2= document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}
