var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        this.items.pop();
        return this.items;
    };
    return Stack;
}());
var stackForString = new Stack();
stackForString.push("Welcome");
stackForString.push("To");
stackForString.push("India");
stackForString.push("Paksitan");
console.log(stackForString.pop());
var stackForNumber = new Stack();
stackForNumber.push(46);
stackForNumber.push(12);
stackForNumber.push(3939);
stackForNumber.push(48);
console.log(stackForNumber.pop());
