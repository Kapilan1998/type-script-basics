var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.setName = function (newName) {
        this.name = newName;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    return Employee;
}());
var emp1 = new Employee("Abinaya", 26);
console.log("Before modify :- Employee age is ".concat(emp1.getAge()));
console.log("Before modify :- Employee name is ".concat(emp1.getName()));
//  can't modify or access values as fields are private
// emp1.name = "Mithujana";
// emp1.age = 24;
emp1.setName("Pramoda");
emp1.setAge(27);
console.log("After modify :- Employee age is ".concat(emp1.getAge()));
console.log("After modify :- Employee name is ".concat(emp1.getName()));
