enum Direction {
    North,
    East,
    West,
    South
}

function move(direction) {
    console.log(`Moving towards ${Direction[direction].toLowerCase()}`);
}

move(Direction.East);

