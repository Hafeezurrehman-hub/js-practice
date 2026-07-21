// ==================================
// Day 3 - JavaScript Loops
// ==================================

// 1. for Loop
console.log("For Loop (1 to 10)");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("-----------------------");

// 2. Reverse Counting
console.log("Reverse Counting");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("-----------------------");

// 3. Even Numbers
console.log("Even Numbers");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("-----------------------");

// 4. while Loop
console.log("While Loop");

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

console.log("-----------------------");

// 5. while Reverse
console.log("While Reverse");

let j = 5;

while (j >= 1) {
    console.log(j);
    j--;
}

console.log("-----------------------");

// 6. Array Example
let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log("Fruits");

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("-----------------------");

// 7. forEach()
console.log("forEach Example");

fruits.forEach(function (fruit) {
    console.log(fruit);
});

console.log("-----------------------");

// 8. Arrow Function with forEach
console.log("Arrow Function");

let numbers = [10, 20, 30, 40, 50];

numbers.forEach((number) => {
    console.log(number);
});

console.log("-----------------------");

// 9. Student List
let students = ["Ali", "Ahmed", "Usman", "Hamza"];

console.log("Students");

students.forEach((student) => {
    console.log(student);
});

console.log("-----------------------");

// 10. Multiplication Table of 5
console.log("Table of 5");

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}