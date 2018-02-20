function vehicleType(color, type) { // type > 1: car, 2: motorbike

    if (type === 1) {
        console.log("a " + color + " car");
    } else if (type === 2) {
        console.log("a " + color + " motorbike");
    }

}

vehicleType("blue", 2);