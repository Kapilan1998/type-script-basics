var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GrandFather = /** @class */ (function () {
    function GrandFather(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.myAge = age;
    }
    GrandFather.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    GrandFather.prototype.getAge = function () {
        return "I am ".concat(this.myAge, " years old.");
    };
    return GrandFather;
}());
var Father = /** @class */ (function (_super) {
    __extends(Father, _super);
    function Father(fName, lName, age, childrenCount) {
        var _this = _super.call(this, fName, lName, age) || this;
        _this.children = childrenCount;
        return _this;
    }
    Father.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, ". I have ").concat(this.children, " children.");
    };
    return Father;
}(GrandFather));
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(fName, lName, age, childrenCount, studiesAt) {
        var _this = _super.call(this, fName, lName, age, childrenCount) || this;
        _this.school = studiesAt;
        return _this;
    }
    Son.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, ". I have ").concat(this.children, " children. I am studying at ").concat(this.school);
    };
    return Son;
}(Father));
var grandFather1 = new GrandFather("Nuwan", "Kulasekara", 56);
var father01 = new Father("Travis", "Head", 39, 3);
var son01 = new Son("Matheesha", "Pathira", 16, 0, "Galle international pvt ltd.");
console.log(grandFather1.greet());
console.log(father01.greet());
console.log(son01.greet());
