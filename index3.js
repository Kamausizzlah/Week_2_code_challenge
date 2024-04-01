// You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array? For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].

function getPrimes(digits) {
    function isPrime(num) {
      if (num <= 1) return false;
      if (num === 2) return true;
      if (num % 2 === 0) return false;
      for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    return digits.filter(isPrime);
  }
  
  console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));