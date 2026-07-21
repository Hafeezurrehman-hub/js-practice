// ===============================
// Day 2 - JavaScript Conditionals
// ===============================

// 1. if Statement
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// -------------------------------

// 2. if...else Statement
let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// -------------------------------

// 3. else if Statement
let score = 85;

if (score >= 90) {
    console.log("Grade A+");
} else if (score >= 80) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else if (score >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// -------------------------------

// 4. Even or Odd
let number = 8;

if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}

// -------------------------------

// 5. Positive or Negative
let num = -5;

if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Number is Zero");
}

// -------------------------------

// 6. Voting Eligibility
let personAge = 17;

if (personAge >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible for Voting");
}

// -------------------------------

// 7. Switch Statement
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

// -------------------------------

// 8. Traffic Light Example
let light = "green";

switch (light) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}