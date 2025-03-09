function createCounter(){
    let counter =0;
    return {
        increment:function(){
            counter ++;
        },
        getValue: function(){
            return counter;
        }
    }
}

let counter1 = createCounter();
let counter2 = createCounter();
counter1.increment();
counter2.increment();
counter2.increment();
console.log(counter1.getValue());
console.log(counter2.getValue());
