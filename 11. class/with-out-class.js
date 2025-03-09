var user1 = { firstName: "Amuku", lastName: "Dumuku", age: 24 };
var user2 = { firstName: "Steven", lastName: "Smith", age: 26 };
function displayUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function displayAge(user) {
    return "Age = ".concat(user.age);
}
console.log(displayUser(user1));
console.log(displayAge(user1));
console.log(displayUser(user2));
console.log(displayAge(user2));
