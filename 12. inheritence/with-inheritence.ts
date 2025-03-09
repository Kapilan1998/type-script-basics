class GrandFather {
    firstName: string;
    lastName: string;
    myAge: number;

    constructor(fName: string, lName: string, age: number) {
        this.firstName = fName;
        this.lastName = lName;
        this.myAge = age;
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}.`
    }

    getAge() {
        return `I am ${this.myAge} years old.`
    }

}

class Father extends GrandFather {
    children: number;

    constructor(fName: string, lName: string, age: number, childrenCount: number) {
        super(fName, lName, age);
        this.children = childrenCount;
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}. I have ${this.children} children.`
    }
}


class Son extends Father{
    school:string;
    constructor(fName: string, lName: string, age: number, childrenCount: number,studiesAt:string) {
        super(fName, lName, age,childrenCount);
        this.school = studiesAt;
    }

    greet() {
        return `Hello ${this.firstName} ${this.lastName}. I have ${this.children} children. I am studying at ${this.school}`
    }
}



let grandFather1 = new GrandFather("Nuwan","Kulasekara",56);
let father01 = new Father("Travis","Head",39,3);
let son01 = new Son("Matheesha","Pathira",16,0,"Galle international pvt ltd.");

console.log(grandFather1.greet());
console.log(father01.greet());
console.log(son01.greet());