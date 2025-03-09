// create class
class User {
    fName:string;
    lName:string;
    age:number


    constructor(firstName:string,lastName:string,myAge:number){
        this.fName = firstName;
        this.lName = lastName;
        this.age = myAge;
    }

    greet(){
        return `Hello ${this.fName} ${this.lName}.`;
    }

    getAge(){
        return `I am ${this.age} years old.`
    }
}


// create instance (object)
let newUser1 = new User("Alistar","cook",28);
let newUser2 = new User("Hasim","Amla",34);

console.log(newUser1);      // User { fName: 'Alistar', lName: 'cook', age: 28 }
console.log(newUser2);      // User { fName: 'Hasim', lName: 'Amla', age: 34 }
console.log(newUser1.greet());      // Hello Alistar cook.
console.log(newUser2.greet());      // Hello Hasim Amla.
console.log(newUser1.getAge());     // I am 28 years old.
console.log(newUser2.getAge());     // I am 34 years old.
