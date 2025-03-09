class User {
    firstName:string;
    lastName:string;
    myAge:number;

    constructor(fName:string,lName:string,age:number){
        this.firstName=fName;
        this.lastName = lName;
        this.myAge = age;
    }

    greet(){
        return `Hello ${this.firstName} ${this.lastName}.`
    }

    getAge(){
        return `I am ${this.myAge} years old.`
    }

}

class Admin{
    firstName:string;
    lastName:string;
    myAge:number;
    adminRole:string

    constructor(fName:string,lName:string,age:number,role:string){
        this.firstName=fName;
        this.lastName = lName;
        this.myAge = age;
        this.adminRole = role;
    }

    greet(){
        return `Hello ${this.firstName} ${this.lastName}. You are ${this.adminRole}.`
    }

    getAge(){
        return `I am ${this.myAge} years old.`
    }

    manageUser(){
        return `Managing users with role ${this.adminRole}`
    }

}


let user01 = new User("Rohit","Sharma",39);
let admin01 = new Admin("Travis","Head",39,"Administrator");

console.log(user01.greet());    // Hello Rohit Sharma.
console.log(user01.getAge());   // I am 39 years old.

console.log(admin01.greet());    // Hello Travis Head. You are Administrator.
console.log(admin01.getAge());   // I am 39 years old.
console.log(admin01.manageUser());   // Managing users with role Administrator