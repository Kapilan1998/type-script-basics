let concatString = function(a:string,b:string,c:string="c"){
    return a+b+c;
}

console.log(concatString("a","b","c")); //abc
console.log(concatString("a","b"));     //abc

// if i set default value for parameter, then if i did not pass any value, that time it will take from default value which we set