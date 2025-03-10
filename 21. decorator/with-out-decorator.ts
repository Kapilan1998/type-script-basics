 class Calculator {
     add(num1:number,num2:number){
        console.log(`calling add method to add ${num1} with ${num2}`);
        let result = num1 + num2;
        console.log(`Result = ${result}`);
        return result;        
     }

     subtract(num1:number,num2:number){
        console.log(`calling subtract method to subtract ${num1} from ${num2}`);
        let result = num1 - num2;
        console.log(`Result = ${result}`);
        return result;        
     }
 }

 
 let calculator = new Calculator();
 calculator.add(17,5);
 calculator.subtract(17,5);