interface User {
    name:string;
    age:number;
}

let jsonData = '{"name":"Axar","age":28}';
// type casting to User
let user = JSON.parse(jsonData) as User;  // so only we can access the fields of User
console.log(`Name ${user.name}, Age: ${user.age}`);
