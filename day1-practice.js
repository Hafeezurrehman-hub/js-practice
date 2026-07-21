console.log("Hello JavaScript");
let name = "Hafeez";
const age = 22;
var city = "Islamabad";

console.log(name);
console.log(age);
console.log(city);
let course = "JavaScript";      // String
let marks = 95;                 // Number
let isPassed = true;            // Boolean
let teacher;                    // Undefined
let salary = null;              // Null

let student = {
    name: "Hafeez",
    age: 22
};

let subjects = ["HTML", "CSS", "JavaScript"];

console.log(course);
console.log(marks);
console.log(isPassed);
console.log(teacher);
console.log(salary);
console.log(student);
console.log(subjects);
console.log(typeof course);
console.log(typeof marks);
console.log(typeof isPassed);
console.log(typeof teacher);
console.log(typeof salary);
console.log(typeof student);
console.log(typeof subjects);
console.log(Array.isArray(subjects));
let a = 20;
let b = 10;

// Arithmetic Operators
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** 2);

// Assignment Operators
a += 5;
console.log("a += 5:", a);

a -= 5;
console.log("a -= 5:", a);

// Comparison Operators
console.log(5 == "5");
console.log(5 === "5");
console.log(5 != "5");
console.log(5 !== "5");
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);

// Logical Operators
console.log(true && false);
console.log(true || false);
console.log(!true);