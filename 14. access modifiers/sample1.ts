class Employee {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public setName(newName: string) {
        this.name = newName;
    }
    public getName() {
        return this.name;
    }
    public setAge(newAge: number) {
        this.age = newAge;
    }
    public getAge() {
        return this.age;
    }
}

let emp1 = new Employee("Abinaya", 26);
console.log(`Before modify :- Employee age is ${emp1.getAge()}`);
console.log(`Before modify :- Employee name is ${emp1.getName()}`);

//  can't modify or access values as fields are private
// emp1.name = "Mithujana";
// emp1.age = 24;

emp1.setName("Pramoda");
emp1.setAge(27);
console.log(`After modify :- Employee age is ${emp1.getAge()}`);
console.log(`After modify :- Employee name is ${emp1.getName()}`);