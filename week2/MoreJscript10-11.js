"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes."

let vehicles = ["motorbike", "caravan", "bike", "truck", "bus"];
let advertisement = "Amazing Joe's Garage, we service ";

let length = vehicles.length;
let part1 = vehicles.slice(0, length - 1);
let part2 = vehicles.slice(length - 1);

advertisement += part1.join(", ") + " and " + part2.join('') + ".";

console.log(advertisement);