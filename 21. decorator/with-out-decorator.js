var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (num1, num2) {
        console.log("calling add method to add ".concat(num1, " with ").concat(num2));
        var result = num1 + num2;
        console.log("Result = ".concat(result));
        return result;
    };
    Calculator.prototype.subtract = function (num1, num2) {
        console.log("calling subtract method to subtract ".concat(num1, " from ").concat(num2));
        var result = num1 - num2;
        console.log("Result = ".concat(result));
        return result;
    };
    return Calculator;
}());
var calculator = new Calculator();
calculator.add(17, 5);
calculator.subtract(17, 5);
