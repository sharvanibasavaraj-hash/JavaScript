let numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]);
console.log(numbers[2]);

numbers[1] = 25;
console.log(numbers);

console.log(numbers.length);

numbers.push(60);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}