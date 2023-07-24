// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function primeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return `${num} is not a prime number`;
    if (num % i !== 0) return `${num} is a prime number`;
  }
  return `neither prime nor other`;
}

const primeNum = 5;

console.log(primeNumber(primeNum));
