var result = function (a, b, c) {
    return a + b + c;
};
console.log(result("Hi ", "Good morning", 100));
// in above parameters inside function a,b,c are any data type so i can able to give whatever value
// all parameters must be mandatory. so i need to pass values for each parameters.
var result2 = function (d, e) {
    return d + e;
};
console.log(result2(3, "56")); // 356
console.log(result2("6")); //6undefined
console.log(result2(30, 20)); //50
// in above case  second parameter is optional, which means we can assign value or not
//And same time parameter data type not defined, so can give whatever datatype
var result3 = function (f, g, h, i) {
    return (f + g + (h !== null && h !== void 0 ? h : 0)) + (i !== null && i !== void 0 ? i : "");
};
console.log(result3(1, 2)); //  3
console.log(result3(1, 2, 3)); //  6
console.log(result3(1, 2, 3, "hi")); //  6hi
console.log(result3(1, 2, undefined, "hi")); // 3hi
// in above parameters are set to data type and some are optional
