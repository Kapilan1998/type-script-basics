var jsonData = '{"name":"Axar","age":28}';
var user = JSON.parse(jsonData);
console.log("Name ".concat(user.name, ", Age: ").concat(user.age, ", Email: ").concat(user.email));
