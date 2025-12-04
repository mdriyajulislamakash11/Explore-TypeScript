import {Player} from "./classes/Player.js"


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
function multiple(a: number, b: number) {
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
let a: string;
let b: number;
let e: string | number; // 2 type er use kora jabe

e = "dd"; //ok
e = 44; //ok

a = "www"; // right = www
console.log(a); // www
a = 2; // error: Type 'number' is not assignable to type 'string'.
console.log(a); // 2

b = "www"; // error: Type 'string' is not assignable to type 'string'.
console.log(a); // www
b = 2; // right
console.log(a); // 2

// array
let c: string[] = [];
c.push("s"); // ok
c.push(4); // error: Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

let d: (string | number)[] = [];
d.push("ddd", 44); //okk
d.push("ddd", 44, true); //error: boolean type ney

let f: (string | number | boolean)[] = [];
f.push("ddd", 44); //okk
f.push("ddd", 44, true); //ok: boolean type ase

// object property ways type check
let v: {
  name: string;
  age: number;
  adult: boolean;
};

v = {
  name: "jhinuk",
  age: 19,
  adult: true,
};

// any type array
let p: any[] = [];
p.push("jhinuk");
p.push(19);
p.push(true);

// any type object
let lal: {
  name: any;
  age: any;
  adult: any;
};

lal = {
  name: "jhinuk",
  age: 19,
  adult: true,
};

// function check
const myFunc = (a: string, b: string, c: string = "true") => {
  console.log(c);
  console.log(`hello ${a} ${b}`);
};

myFunc("typescript", "done", "false");

// function check
const myFunc2 = (a: number, b: number, c: string = "true") => {
  return a + b;
};

console.log(myFunc2(4, 4, "false"));

// type aliases
type stringOrNumber = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNumber, user: userType) => {
  console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};

// console.log(userDetails);

/// function signature
let add: (x: number, y: number) => number;

add = (a: number, b: number) => {
  return a * b;
};
// console.log(add(5,5));

let calculate: (x: number, y: number, z: string) => number;

calculate = (a: number, b: number, c: string) => {
  if (c == "add") {
    return a + b;
  } else {
    return a * b;
  }
};

console.log(calculate(5, 6, "multiple"));



//classes ekhanei ei class take onno folder baniye tar majh theke import koresi
// class Player {
//   // constructor(n: string, a: number, c: string) {
//   //   this.name = n;
//   //   this.age = 25;
//   //   this.country = c;
//   // }
//   constructor(
//     private name: string,
//     public age: number,
//     readonly country: string
//   ) {}

//   play() {
//     console.log(`${this.name} from ${this.country} playing!`);
//   }
// }

const akash = new Player("akash", 24, "bangladesh");
const shanto = new Player("shanto", 24, "bangladesh");

shanto.name = "ashik";
shanto.age = 55;
shanto.country = "Canada";

console.log(shanto.name); // ekhane error dicche
console.log(shanto.age);
console.log(shanto.country);

const players: Player[] = [];
