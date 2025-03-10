interface Employee {
    name:string;
    id:number;
}

interface Admin {
    isAdmin:boolean;
    accessLevel:number;
}

// adding 2 different interfaces in intersection-type
// for this newly created intersection type, we need to give all the fields to create object
type Adminemployee = Admin & Employee ;
let adminEmployee : Adminemployee = {
    name:"Eruma maadu",
    id:4500,
    isAdmin:true,
    accessLevel:1
}

console.log(adminEmployee);  // { name: 'Eruma maadu', id: 4500, isAdmin: true, accessLevel: 1 }
