class User {
    name:string;
    static totalUsers: number =0;

    constructor(name:string){
        this.name = name;
        User.totalUsers++;
    }

    getName(){
        return this.name;
    }
    static getTotalUsers(){
        return User.totalUsers;
    }
}


let user1 = new User("Kohli");
let user2 = new User("Rohit");
console.log(user1);
console.log(user2);
console.log(User.totalUsers);
console.log(User.getTotalUsers());
