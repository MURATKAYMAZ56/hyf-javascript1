let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o1);
console.log(o2);
console.log(o3);

o2.foo = 'o2 is changed';//we change o2 to see the changing
o1.foo = 'o1 is changed';//changing o1 to see the effect on o3

console.log(o1);
console.log(o2);
console.log(o3);