interface User {
    firstName: string,
    lastName: string,
     age?: number
}
function greetUser(user: User) {
    return `Hello ${user.firstName} ${user.lastName}`;
}

function logUserDetails(user: User) {
    console.log(`User ${user.firstName} ${user.lastName}, I am ${user.age} years old.`);
}

let user1 = { firstName: "Lasith", lastName: "Malinga", age: 30 };
let user2 = { firstName: "David", lastName: "Warner"};
console.log(greetUser(user2));      // Hello Lasith Malinga
logUserDetails(user1);      // User Lasith Malinga, I am 30 years old.