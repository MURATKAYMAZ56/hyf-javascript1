let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

favoriteAnimals.push("turtle");//2.1adding turtle in array

console.log(favoriteAnimals);//2.2


//2.3 adding meerkat after blowfish before capricorn
let part1 = favoriteAnimals.slice(0, 1);// index 0 length 1
let part2 = favoriteAnimals.slice(1); // index 1 length ?
part1.push("meerkat");
favoriteAnimals = part1.concat(part2);


//2.4
console.log("the value of new array will be [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]");

//2.5
console.log(favoriteAnimals);

//2.6

console.log("The array has a length of: " + favoriteAnimals.length);


//2.7 deleting giraffes from array
let split1 = favoriteAnimals.slice(0, 3);
let split2 = favoriteAnimals.slice(4);
favoriteAnimals = split1.concat(split2);

//2.8
console.log(favoriteAnimals);

//2.9 -2.10  finding position of item

for (var i in favoriteAnimals) {
    if (favoriteAnimals[i] == 'meerkat') {
        console.log("The item you are looking for is at index: " + i);
    }
}