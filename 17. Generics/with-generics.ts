class Stack<T>{
    private items:T [] = [];

    push(item:T){
        this.items.push(item);
    }

    pop(){
        this.items.pop();
        return this.items;
    }
}


let stackForString = new Stack<string>();
stackForString.push("Welcome");
stackForString.push("To");
stackForString.push("India");
stackForString.push("Paksitan");
console.log(stackForString.pop());


let stackForNumber = new Stack<number>();
stackForNumber.push(46);
stackForNumber.push(12);
stackForNumber.push(339);
stackForNumber.push(48);
console.log(stackForNumber.pop());