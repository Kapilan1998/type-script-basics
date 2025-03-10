 class NumberStack{
    private items:number[] = [];

    push(item:number){
        this.items.push(item);
    }
    pop(){
         this.items.pop();
         return this.items;
    }
 }

 class StringStack{
    private items:string[] = [];

    push(item:string){
        this.items.push(item);
    }
    pop(){
         this.items.pop();
         return this.items;
    }
 }

 let numArr = new NumberStack();
 numArr.push(89);
 numArr.push(45);
 numArr.push(38);
console.log( numArr.pop());

let stringArr = new StringStack();
 stringArr.push("Hello");
 stringArr.push("Friend");
 stringArr.push("Welcome");
console.log( stringArr.pop());