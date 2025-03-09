var counter = 0;
function increaseCount() {
    counter++;
}
function getCountValue() {
    return counter;
}
increaseCount();
console.log(counter); // 1
increaseCount();
console.log(counter);
