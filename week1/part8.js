//indicating types of variable and compare each other
let type1 = 56;
let type2 = 'Murat';
let type3 = true;
let type4 = [];


console.log('The value of my variable type1 is:  ' + type1);

console.log('The value of my variable type2 is:  ' + type2);

console.log('The value of my variable type3 is:  ' + type3);

console.log('The value of my variable type4 is:  ' + type4);


console.log('to me the typeof type1 is number');
console.log('to me the typeof type1 is string');
console.log('to me the typeof type1 is boolean');
console.log('to me the typeof type1 is array');

console.log('typeof type1:' + (typeof type1));
console.log('typeof type2:' + (typeof type2));
console.log('typeof type3:' + (typeof type3));
console.log('typeof type4:' + (typeof type4));

//comparing types

if (typeof type1 === typeof type2) {
    console.log('types1-2 are the same');
}
else {
    console.log('types1 - 2 are not the same');
}


if (typeof type1 === typeof type3) {
    console.log('types1-3 are the same');

}
else {
    console.log('types1 - 3 are not the same');
}


if (typeof type1 === typeof type4) {
    console.log('types1-4 are the same');

}
else {
    console.log('types1 - 4are not the same');
}


if (typeof type2 === typeof type3) {
    console.log('types2- 3 are  the same');

}
else {
    console.log('types2 - 3 are not the same');
}


if (typeof type2 === typeof type4) {
    console.log('types2-4 are the same');

}
else {
    console.log('types2 - 4 are not the same');
}


if (typeof type3 === typeof type4) {
    console.log('types3-4 are the same');

}
else {
    console.log('types3 - 4 are not the same');
}