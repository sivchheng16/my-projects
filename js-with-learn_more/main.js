// Operators  --------------------------
// = += -= *= /= == --
/*
let x = 10 ;
x = x + 50;
x += 50;
*/
/*
let txtOne = "Hello";
let txtTwo = " How are you?"
txtOne += txtTwo;
 console.log(txtOne);
*/

// Data Type--------------------
// Primitive : String,Number,Boolean,Nuul,Undefiend,Symbol(es6)
// None-Primitive : Function,Array,Object

// Function--------------------
/*
function myFunction() {
  let name = "chheng";
  return "hello " + name + " how are you?";
}
const result = myFunction(); //number
console.log(result);
*/

function sum(name) {
  return "hello " + name + " how are you?";
}
const result = sum("sok");
console.log(result);

// Array ------------------------------------

const carOld = "Ford";
const cars = ["BMW", "Toyota", "Mercedes", carOld];

cars[1] = "tesla";

console.log(cars[1]);

//Object ------------------------
const car = {
  model: "bmw",
  year: 2014,
  isNew: true,
  features: ["a", "b"],
  drive() {
    console.log("driving");
  },
};
car.model = "Tesla";
console.log(car.model);
console.log(car.features[0]); //call feature Array[...]

// Conditional Statement ----------------------------
// <> <= >= == === != !== !

//const condition = 50 > 40;          //( < > )
//const condition = 50 <= 50;            //( <= >= )
//const condition = "hi" == "hi";        //( == ) if "hi" is "hI" the value is false
/*
let x = "20";     //if "20" is 20 IT is true
let y = 20;
const condition = x === y;            //( === )
*/
//const condition = 10 != 20;       //false //( != ) , ( !== )
const condition = 20 > 10; // ( ! )

if (false) {
  console.log("This is true");
} else {
  console.log("This is false");
}
//########
if (/* ( ! )*/ condition) {
  // ( ! ) If true to false, if false to ture
  console.log("Is true");
} else {
  console.log("Is false");
}

// && ||

/*
let isFreeTime = true;
let hasMoney = true;        //if hasMoney = false; ====> "Stay Home"

if (isFreeTime && hasMoney) {       // ( && )
  console.log("Traveling")
} else {
  console.log("Stay Home!")
}
*/
/*
let isFreeTime = true;       //if isFreeTime = false; =====> "Stay Home"
let hasMoney = false;

if (isFreeTime || hasMoney) {
  console.log("Traveling");
} else {
  console.log("Stay Home");
}
*/

//truthy & Falsy ------------------------------------------------
// "" 0 null undefined NaN (falsy)
// Other then that  above is ( Truthy)
/*
let txt = "29m" * 30; ( NaN )

if(txt) {
  console.log("True");
}else {
  console.log("False")
}
*/
//Swithe -----------------------------------
// case break default

const enrollment = 1;
/*
if (enrollment == 1 ) {
  console.log("One Enrollment")
} else if ( enrollment == 2) {
  console.log("Two Enrollment")
} else {
  console.log("No Enroll")
}
*/

switch (enrollment) {
  case 1:
    console.log("One Emrollment");
  case 2:
    console.log("Two Enrollment");
  default:
    console.log("No Enrollment");
}
// Loop  --------------------------------------------
// While Loop ----------------------------------

let n = 10;
while (n > 0) {
  console.log("Rounning");
  n--; //terminate
}

//Do while Loop------------------------------------

let m = 0;
do {
  console.log(m);
  m++; //terminate
} while (m <= 10);

//For Loop ---------------------------

for (let i = 1; i < 10; i++) {
  console.log(i);
}

//Exercise Loop  ------------------------------

const name = ["Sok", "Meng", "Chea", "Nang", "Meng", "Chea", "Nang"];

for (let s = 0; s < name.length; s++) {
  console.log(name[s]);
}

//More execite  Use While Loop----

const students = [
  {
    names: "Menghuy",
    score: 88,
  },
  {
    names: "Layment",
    score: 45,
  },
  {
    names: "Sokna",
    score: 12,
  },
  {
    names: "Kanha",
    score: 99,
  },
];

let student = 0;
while (student < students.length) {
  console.log(
    `Student: ${students[student].names} has ${students[student].score} score.`
  );
  student++;
}

//Exceriete for loop
const c = [
  {
    carname: "Yamaha",
    price: "5500$",
  },
  {
    carname: "Toyota",
    price: "2500$",
  },
  {
    carname: "luxis",
    price: "1500$",
  },
];
for (let car = 0; car < c.length; car++) {
  console.log(`This is ${c[car].carname} this price ${c[car].price} `);
}

//String Porperty and Methods ----------------------

const text = "              Heng Menghuy";
console.log(text);
console.log(text.trim());

console.log(text.toUpperCase().trim());
console.log(text.toLowerCase().trim());
console.log(text.includes("heng"));
if (text.toLowerCase().includes("heng")) {
  console.log("It's True");
}

const tex = "hey"; //add
console.log(text.trim().concat(" ", tex), "Your're Welcome");

// Splits
const split = "Hello this is splites";
const this_result = split.split(" ");

console.log(this_result);

// Array Property and Methods  --------------------

const Array = ["Sok", "Tola", "Som", "Vivcheka"];

const Array_reasult = Array.reverse();

const Array_reasult_slice = Array.slice(1, 3); //delete element array

Array_reasult.unshift("Heng"); // ship  -....
Array_reasult.push("kak"); //pop .....-
Array_reasult.splice(1, 0, "A", "B");

console.log(Array_reasult);
console.log(Array_reasult_slice);

//////////////////////////////////////////////////
const Array_a = ["Sok", "Tola", "Som", "Vivcheka"];

/*
function eachItem(item, index, array) {
  console.log(item, index, array);
}
Array_a.forEach(eachItem);
*/
/*
Array_a.forEach(function (item, index, array) {
  console.log(item, index, array);
});
*/

//Array Method Join item
const phones = ["iphone", "pixel", "galaxy"];

const jointItem = phones.join(" and ");
console.log(jointItem);

//Array Method reused

const salary = [300, 500, 400, 200];
//a=0; c=300 =>300;
//a=300; c=500 =>800;
//a=800; c=400 =>1200;
//a=1200; c=200 =>1400;
const total = salary.reduce(function (acc, crr) {
  //acc= accumater(0, 300,..),  //crr=curent is (300...)
  return acc + crr;
}, 0);

console.log(total);

// total = 0;
// for (let i = 0; i < salary.length; i++) {
//   total += salary[i];
// }
// console.log(total);

//Reduce Method (string)
const reduces = ["Meng", "Henghuy"];

const fullName = reduces.reduce(function (ac, ar) {
  return `${ac} ${ar}`;
}, "");
console.log(fullName);

//JSON
const obj = {
  name: "Khon",
  year: "2006",
  khmer: "true",
};
//Convert object to Json
const json = JSON.stringify(obj);
const json1 = JSON.stringify(obj, ["name"]);

const json2 = JSON.parse('{"name":"Khon","year":"2006","khmer":"true"}');

console.log(json);
console.log(json1);

console.log(json2);

//Math -------------------------------------------
console.log(Math.PI);
console.log(Math.min(234, 43, 65, 3445, -8));
console.log(Math.max(234, 43, 65, 3445, -8));
console.log(Math.pow(4, 2));
console.log(Math.sqrt(4));
console.log(Math.cbrt(8));
function root(nth, number) {
  return Math.pow(number, 1 / nth); ///method power
}

console.log(Math.round(3.4));
console.log(Math.round(65 / 10) * 10);
console.log(Math.round(1.253 * 100) / 100); //(1.253*100=125.3 ,Math.round(125.3=125),125/100=1.25)
console.log(Math.ceil(4.1)); // always up
console.log(Math.ceil(4.0)); // always up
console.log(Math.floor(3.6)); // always down
console.log(Math.floor(3.3)); // always down
console.log(Math.trunc(9.345235135435)); //truncate
console.log(Math.trunc(3124235234.345235135435)); //truncate

console.log(Math.sign(-5));
console.log(Math.sign(5));
console.log(Math.sign(0));

console.log(Math.random());
//
function random(min, max, integer) {
  let random = Math.random() * (max - min) + min;
  if (integer == true) {
    random = Math.floor(random);
  }
  return random;
}

// Date --------------------------------

let now = new Date();
let nows = new Date("2025-05-15T16:00:45");

console.log(now);
console.log(nows);

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getTime());
console.log(now.getTimezoneOffset()); //start from 1970 scenc
console.log(now.getHours());
console.log(now.getUTCHours());
console.log(now.getYear()); //start from 1900

console.log(now.setDay(12));
console.log(now.setFullYear(2021));

console.log(now.toDateString());
console.log(now.toUTCString());
