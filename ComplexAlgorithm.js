/* Filename: ComplexAlgorithm.js */

// This code implements a complex algorithm for finding prime numbers in a given range

// Function to check if a number is prime
function isPrime(num) {
  if (num === 2) {
    return true;
  }
  if (num < 2 || num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to find all prime numbers in a given range
function findPrimesInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

// Sample usage of the algorithm
const startRange = 1;
const endRange = 1000;
const primeNumbers = findPrimesInRange(startRange, endRange);

// Display the prime numbers found
console.log(`Prime numbers between ${startRange} and ${endRange}:\n${primeNumbers.join(', ')}`);

// More complex operations can be performed using the prime numbers, such as finding the sum, average, etc.