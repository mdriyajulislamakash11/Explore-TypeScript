// video-2
const country = "Bangladesh new bangladesh hello ";
console.log(country);
// video-3 type thik rakhte hobe reassign korle
let playerName = "A+J";
let age = 22;
playerName = 33;
age = "ssd"; // error dibe  editor  a but value dekhabe thik thak
console.log(playerName);
console.log(playerName);
console.log(age);
// declare korar somoy jodi valu assign na kore tahole thik ase essos dekhabe na
let person;
person = "tanisha";
console.log(person); // tanisha
person = 77;
console.log(person); // 77
// function type
function multiple(a, b) {
    return a * b;
}
console.log(multiple(4, 7));
// array type 
let fruits = ["apple", "mango", "orange", "banana", 4, true];
fruits.push(55);
fruits.push("asdf");
console.log(fruits);
// array ta jodi sudhu string hoy pore jodi number kono kichu push kora hoy tahole type error dibe, ar jodi numbe thake array er moddhe tahole thik ase, abr jodi boolean thake tahole sm eki rokhom
// objects type check
let partner = {
    name: "jhinuk",
    age: 19,
    isLove: true,
};
// partner.country="blah blah"  // error
console.log(partner);
// variable __________________/
let a;
let b;
a = "www"; // right = www
console.log(a); // www
a = 2; // error: Type 'number' is not assignable to type 'string'.
console.log(a); // 2
b = "www"; // error: Type 'string' is not assignable to type 'string'.
console.log(a); // www
b = 2; // right
console.log(a); // 2
export {};
// array
//# sourceMappingURL=index.js.map