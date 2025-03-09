let user1 = {firstName:"Amuku", lastName:"Dumuku", age:24};
let user2 = {firstName:"Steven", lastName:"Smith", age:26};

function displayUser(user:{firstName:string,lastName:string}){
    return `Hello ${user.firstName} ${user.lastName}`;
}

function displayAge(user:{age:number}){
    return `Age = ${user.age}`
}

console.log(displayUser(user1));
console.log(displayAge(user1));


console.log(displayUser(user2));
console.log(displayAge(user2));