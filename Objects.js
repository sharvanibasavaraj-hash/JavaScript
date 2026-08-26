let student = {
    name: "Sharvani",
    age: 20,
    marks: 85
};

console.log(student.name);
console.log(student.age);
console.log(student.marks);

student.age = 21;

student.city = "Bangalore";

delete student.marks;

console.log(student);