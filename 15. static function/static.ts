class Car {
    brand:string;
    color:string;
    price:number;

    static isBlack(carColor:string){
        return carColor ==="Black";
    }
}

console.log(`Blue color = ${Car.isBlack("Blue")}`);
console.log(`Black color = ${Car.isBlack("Black")}`);
