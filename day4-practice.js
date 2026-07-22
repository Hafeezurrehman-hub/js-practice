// =====================================
// Day 4 - JavaScript Functions
// =====================================


// 1. Simple Function
function greet() {
    console.log("Welcome to JavaScript");
}

greet();


// =====================================


// 2. Function with Parameter
function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Hafeez");
sayHello("Ali");


// =====================================


// 3. Function with Two Parameters
function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// =====================================


// 4. Return Value
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 6);

console.log(result);


// =====================================


// 5. Even / Odd
function checkNumber(number) {

    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(checkNumber(10));
console.log(checkNumber(7));


// =====================================


// 6. Global Scope
let city = "Islamabad";

function showCity() {
    console.log(city);
}

showCity();


// =====================================


// 7. Local Scope
function student() {

    let name = "Hafeez";

    console.log(name);

}

student();


// =====================================


// 8. Square Function
function square(number) {
    return number * number;
}

console.log(square(5));


// =====================================


// 9. Cube Function
function cube(number) {
    return number * number * number;
}

console.log(cube(3));


// =====================================


// 10. Full Name
function fullName(firstName, lastName) {

    return firstName + " " + lastName;

}

console.log(fullName("Hafeez", "Ur Rehman"));


// =====================================


// 11. Check Age
function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";

}

console.log(checkAge(22));


// =====================================


// 12. Percentage
function percentage(obtained, total) {

    return (obtained / total) * 100;

}

console.log(percentage(450, 500) + "%");