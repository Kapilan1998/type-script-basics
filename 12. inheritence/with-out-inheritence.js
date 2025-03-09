var User = /** @class */ (function () {
    function User(fName, lName, age) {
        this.firstName = fName;
        this.lastName = lName;
        this.myAge = age;
    }
    User.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    User.prototype.getAge = function () {
        return "I am ".concat(this.myAge, " years old.");
    };
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(fName, lName, age, role) {
        this.firstName = fName;
        this.lastName = lName;
        this.myAge = age;
        this.adminRole = role;
    }
    Admin.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName, ". You are ").concat(this.adminRole, ".");
    };
    Admin.prototype.getAge = function () {
        return "I am ".concat(this.myAge, " years old.");
    };
    Admin.prototype.manageUser = function () {
        return "Managing users with role ".concat(this.adminRole);
    };
    return Admin;
}());
var user01 = new User("Rohit", "Sharma", 39);
var user02 = new Admin("Travis", "Head", 39, "Administrator");
console.log(user01.greet());
console.log(user01.getAge());
console.log(user02.greet());
console.log(user02.getAge());
console.log(user02.manageUser());
