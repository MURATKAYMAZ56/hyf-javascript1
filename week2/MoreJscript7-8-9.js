let vehicles = ["motorbike", "caravan", "bike"];

console.log(vehicles[2]);

function vehicle(color, type, age) { // type > 1: motorbike, 2: caravan, 3: bike

    if (type === 1) {
        console.log("a " + color + " used motorbike");
    } else if (type === 2) {
        console.log("a " + color + " used caravan");
    } else if (type === 3) {
        console.log("a " + color + " used bike");
    }

}