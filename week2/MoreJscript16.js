let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o1);
console.log(o2);
console.log(o3);

o2.foo = 'hello';

console.log(o1);
console.log(o2);
console.log(o3);