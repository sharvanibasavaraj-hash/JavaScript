let age = 20;
let marks = 75;

if (age >= 18) {
    console.log("Adult");
}

if (age < 18) {
    console.log("Minor");
}

if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 50) {
    console.log("C");
} else {
    console.log("Fail");
}