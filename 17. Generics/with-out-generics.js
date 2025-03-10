var NumberStack = /** @class */ (function () {
    function NumberStack() {
        this.items = [];
    }
    NumberStack.prototype.push = function (item) {
        this.items.push(item);
    };
    NumberStack.prototype.pop = function () {
        this.items.pop();
        return this.items;
    };
    return NumberStack;
}());
var StringStack = /** @class */ (function () {
    function StringStack() {
        this.items = [];
    }
    StringStack.prototype.push = function (item) {
        this.items.push(item);
    };
    StringStack.prototype.pop = function () {
        this.items.pop();
        return this.items;
    };
    return StringStack;
}());
var numArr = new NumberStack();
numArr.push(89);
numArr.push(45);
numArr.push(38);
console.log(numArr.pop());
var stringArr = new StringStack();
stringArr.push("Hello");
stringArr.push("Friend");
stringArr.push("Welcome");
console.log(stringArr.pop());
