var x = 20;
var y = 30;
var z = x + y;
console.log(z);

x = "Hello";
var z = x + y;

x = 30;
var z = x + y;
console.log(z);

/*Data type
number
boolean
NaN
Object
function
boolean
undefined
*/
console.log(typeof 5); // number
console.log(typeof 10.05); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object
console.log(typeof 10 / 0); // NaN
//console.log(typeof a); // undefined

// Object
var person = {
  name: "Ram",
  age: 20,
};
console.log(typeof person); // Object

// Array
var colors = ["red", "orange"];
console.log(typeof colors); // Object

// function
function add(a, b) {
  return a + b;
}

console.log(typeof add); // function

// call a function
console.log(add(10, 20));

// let & const
let a = 10;
let b = 100;
let c = 10 + 100;
console.log(a + b);

// var keyword - global
for (var i = 0; i < 5; i++) {
  console.log(i); //0-4
}

console.log(i); //5

// let keyword - block level access
for (let j = 0; j < 5; j++) {
  console.log(j); //0-4
}

//console.log(j); // j is not defined

// const keyword
const num1 = 100;
//num1 = 200;
console.log(num1); //Assignment to constant variable

// emp1 object
const emp1 = {
  empId: 1001,
  empName: "Ram",
  address: {
    city: "chennai",
    state: "Tamilnadu",
  },
  contactNos: [9999911111, 9999922222],
};

// Read
console.log(emp1.empName); // Ram
console.log(emp1.address.city); // Chennai
console.log(emp1.address["state"]); // Tamilnadu
console.log(emp1.contactNos[1]); // 9999922222

// Update properties of an object - city & contactno
emp1.address.city = "Ooty";
emp1.address["state"] = "TN";

console.log(emp1.address.city); // Ooty
console.log(emp1.address.state); // TN

emp1.contactNos[0] = 9999933333;
console.log(emp1.contactNos[0]); // 9999933333

// reassigning empty object
//emp1 = {}; //Assignment to constant variable

const shapes = ["triangle", "rectangle"];
shapes.push("circle");
console.log(shapes); // ["triangle", "rectangle", "circle"];

//shapes = []; //Assignment to constant variable

// functions - default values
function mul(a, b = 10) {
  return a * b;
}

console.log(mul(10, 20)); //200
console.log(mul(10)); //100

// function mul(a, b, c) {
//   return a * b * c;
// }
// function mul(a, b, c, d) {
//   return a * b * c * d;
// }
// console.log(mul(10, 20, 30, 40)); //

// Rest parameters(...)
// function mulRest(...nums, a, b) { //Rest parameter must be last formal parameter
// function mulRest(a, ...nums, b) { // Rest parameter must be last formal parameter
function mulRest(a, b, ...nums) {
  let result = a * b;
  for (let i = 0; i < nums.length; i++) {
    result *= nums[i];
  }
  return result;
}

console.log(mulRest(1, 2)); // 2
console.log(mulRest(1, 2, 3)); //6
console.log(mulRest(1, 2, 3, 4, 5, 6)); //720

// Arrow Functions

// function
// function add(a, b) {
//   return a + b;
// }

// (a, b) => {
//   return a + b;
// };

// ex 1: two input arguments
let addArr = (a, b) => a + b;
console.log(addArr(10, 10)); // 20

// ex 2: one input argument
const hello = (name) => "Hello " + name;
console.log(hello("Sam"));

// ex3: No input arguments
const helloWorld = () => "Hello World";
console.log(helloWorld());

// ex 4: more than one statement in body - curly braces are required in body
/*
function isEven(num) {
    if(num%2==0) {
        return true;
    } else {
        return false
    }
}
*/

const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(10)); // true
console.log(isEven(13)); // false

// Spread Operator(...) - copy one array elements into another array
console.log(colors); // [ 'red', 'orange' ]

var newColors = [...colors]; // copy
console.log(newColors); //[ 'red', 'orange' ]

// adding new colors at begining & at the end
newColors = ["white", "pink", ...colors, "yellow", "black"];
console.log(newColors); //["white", "pink", "red", "orange", "yellow", "black"];

// DeStructuring
// Array Destructuring
// Object Destructuring

// Object Destructuring

// emp2 object
const emp2 = {
  empId: 1002,
  empName: "Sam",
  address: {
    city: "chennai",
    state: "Tamilnadu",
  },
  contactNos: [9999911111, 9999922222],
};

emp2.empName;
emp2.address.city;
emp2.contactNos[0];

const { empId, empName, address, contactNos } = emp2;

console.log(empId); // 1002
console.log(empName); // Sam
console.log(address); // { city: 'chennai', state: 'Tamilnadu' }
console.log(contactNos); // [ 9999911111, 9999922222 ]

const { city, state } = emp2.address;
console.log(city);
console.log(state);

// Array Destructuring
const [cNo1, cNo2] = emp2.contactNos;

console.log(cNo1);
console.log(cNo2);

// Class
class Student {
  constructor(rollNo, name, age) {
    this.rollNo = rollNo;
    this.name = name;
    this.age = age;
  }

  // Read
  getRollNo() {
    return this.rollNo;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }

  // update values
  setRollNo(rollNo) {
    this.rollNo = rollNo;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }
}

// Creating objects
const std1 = new Student(1001, "Ram", 20);
const std2 = new Student(1002, "Sam", 21);

// read values
console.log(std1.getRollNo());
console.log(std1.getName());
console.log(std1.getAge());

console.log(std2.getRollNo());
console.log(std2.getName());
console.log(std2.getAge());

// update values
std1.setRollNo(1100);
console.log(std1.getRollNo());

// map() & filter()

// map() - applying same function on each and every element present in array
const nums = [10, 20, 30];

//nums.map((nums) => n * n); // wrong
//nums.map((n) => n * n);
const sqrs = [10, 20, 30].map((n) => n * n);
console.log(sqrs);

// filter() - return values greater than or equal to 20
const result = nums.filter((n) => n >= 20);
console.log(result);

// return all numbers other than 20
const result1 = nums.filter((n) => n != 20);
console.log(result1);

// return num that matches 20
const result2 = nums.filter((n) => n == 20);
console.log(result2);

// module, import & export
// Type of export
// 1. named export
// 2. default export - defualt keyword

// named export
export function f1() {}
export function f2() {}
export function f3() {}
export function f4() {}

// importing named export functions
import { f1, f3 } from "tempFile";

// Default export
function f1() {}
function f2() {}
function f3() {}
function f4() {}

export default temp;

// importing default export
import temp from "temp";

//temp.f1();
