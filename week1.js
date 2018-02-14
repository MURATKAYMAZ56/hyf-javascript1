//part-1
console.log('Merhaba Dunya');//turkish

console.log('Hello World');//English

console.log('Hallo Wereld');//Dutch

//part-2
console.log("I'm awesome");

//part-3 NEED TO BE CHECKED
console.log('the value of x would be : 5');
let x = 5;
console.log('x= ' + x);

//part-4
console.log('the value of my string will be : murat');
y = 'murat';
console.log('the value of my string will be : kaymaz');
y = 'kaymaz';
console.log(y);

//part-5
z = 7.25;
console.log(z);
a = Math.round(z);
console.log(a);
var theHighestValue = z;
if (z < a) {
    theHighestValue = a

}
console.log('theHighestValue between z and a is ' + theHighestValue);


//part-6
let muratArray = [];
console.log('My array consist of the name of my favourites animals');

console.log(muratArray);
muratArray = ['cat', 'dog', 'sneek', 'pig', 'bear'];
console.log(muratArray);
console.log("I am adding Daan's favorite animal (baby pig )into my array");
muratArray[5] = 'baby pig';
console.log(muratArray);

//part-7  NEED TO BE CHECKED
let myString = "this is a string test";
console.log(myString);
//let lengthOfString = myString.length;
//console.log('The length of string is ' + myString);

//part-8 checking types of variables
let type1 = 56;
console.log('The value of my variable type1 is: number ' + type1);
let type2 = 'Murat';
console.log('The value of my variable foo is: string ' + type2);
let type3 = true;
console.log('The value of my variable foo is: boolean ' + type3);
let type4;
console.log('The value of my variable foo is: undefined ' + type4);
//actual types
console.log(typeof type1);
console.log(typeof type2);
console.log(typeof type3);
console.log(typeof type4);
if (typeof type1 === typeof type2) {
    console.log('types are the same');

}
if (typeof type1 === typeof type3) {
    console.log('types are the same');

}
if (typeof type1 === typeof type4) {
    console.log('types are the same');

}
if (typeof type2 === typeof type3) {
    console.log('types are the same');

}
if (typeof type2 === typeof type4) {
    console.log('types are the same');

}
if (typeof type3 === typeof type4) {
    console.log('types are the same');

}
else {
    console.log('none of  types are the same');
}
//part-9
x = 7;
x = x % 3; // % is modulus which means here divide 7 by 3 and give you the reminder 1
console.log(x);
x = 24;
x = x % 3;
console.log(x);
x = 8;
x = x % 3;
console.log(x);
//part-10
let multArray = ['5', 'string'];
console.log(multArray);
if (6 / 0 === 10 / 0) {
    console.log('6 / 0  and 10 / 0 are the same')

} else {
    console.log('6 / 0  and 10 / 0 are not the same')
}








