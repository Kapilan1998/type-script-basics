// create class
var User = /** @class */ (function () {
    function User(firstName, lastName, myAge) {
        this.fName = firstName;
        this.lName = lastName;
        this.age = myAge;
    }
    User.prototype.greet = function () {
        return "Hello ".concat(this.fName, " ").concat(this.lName, ".");
    };
    User.prototype.getAge = function () {
        return "I am ".concat(this.age, " years old.");
    };
    return User;
}());
// create instance (object)
var newUser1 = new User("Alistar", "cook", 28);
var newUser2 = new User("Hasim", "Amla", 34);
console.log(newUser1); // User { fName: 'Alistar', lName: 'cook', age: 28 }
console.log(newUser2); // User { fName: 'Hasim', lName: 'Amla', age: 34 }
console.log(newUser1.greet());
console.log(newUser2.greet());
console.log(newUser1.getAge());
console.log(newUser2.getAge());
