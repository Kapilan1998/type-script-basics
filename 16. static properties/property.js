var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        User.totalUsers++;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.getTotalUsers = function () {
        return User.totalUsers;
    };
    User.totalUsers = 0;
    return User;
}());
var user1 = new User("Kohli");
var user2 = new User("Rohit");
console.log(user1);
console.log(user2);
console.log(User.totalUsers);
console.log(User.getTotalUsers());
