function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var result;

    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Error! Division by zero!";
            break;
        case '**':
            result = Math.pow(num1, num2);
            
        default:
            result = "Error! Invalid operator!";
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}
