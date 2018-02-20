function vehicle(color, type, age) { // type > 1: car, 2: motorbike

    if (type === 1) {
        console.log("a " + color + " used car");
    } else if (type === 2) {
        console.log("a " + color + " used motorbike");
    }

}

vehicle("blue", 1, 5);