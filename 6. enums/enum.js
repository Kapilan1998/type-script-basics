var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["West"] = 2] = "West";
    Direction[Direction["South"] = 3] = "South";
})(Direction || (Direction = {}));
function move(direction) {
    console.log("Moving towards ".concat(Direction[direction].toLowerCase()));
}
move(Direction.East);
