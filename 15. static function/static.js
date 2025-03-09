var Car = /** @class */ (function () {
    function Car() {
    }
    Car.isBlack = function (carColor) {
        return carColor === "Black";
    };
    return Car;
}());
console.log("Blue coloer = ".concat(Car.isBlack("Blue")));
console.log("Black coloer = ".concat(Car.isBlack("Black")));
