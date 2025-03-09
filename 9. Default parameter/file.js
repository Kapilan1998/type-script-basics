var concatString = function (a, b, c) {
    if (c === void 0) { c = "c"; }
    return a + b + c;
};
console.log(concatString("a", "b", "c"));
console.log(concatString("a", "b"));
