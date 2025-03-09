function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function logUserDetails(user) {
    console.log("User ".concat(user.firstName, " ").concat(user.lastName, ", I am ").concat(user.age, " years old."));
}
var user1 = { firstName: "Lasith", lastName: "Malinga", age: 30 };
console.log(greetUser(user1)); // Hello Lasith Malinga
logUserDetails(user1); // User Lasith Malinga, I am 30 years old.
