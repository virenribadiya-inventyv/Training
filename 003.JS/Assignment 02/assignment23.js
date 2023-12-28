function generateFibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let fibArray = generateFibonacci(n - 1);
      fibArray.push(fibArray[n - 2] + fibArray[n - 3]);
      return fibArray;
    }
  }
  
 
  // function isPrime(number) {
  //   if([1,5].(number%6) & number!== 1){
  //     return true;
  //   }
  //   return false;
  // }
  
  function diff_sum(prime) {
    var diff = [];
    for (var i = 1; i < prime.length; i++) {
      diff.push(prime[i - 1] - prime[i]);
    }
  
    var sum = 0;
  
    for (var i of diff) {
      sum += i;
    }
    return sum;
  }
  
  (() => {
    const n = 1000;
    const fibonacciSequence = generateFibonacci(n);
    console.log("Fibonacci:\n",fibonacciSequence);
    var prime = [];
    for (var i of fibonacciSequence) {
      if (isPrime(i)) prime.push(i);
    }
    console.log("Prime Numbers in Fibonacci:\n",prime);
  
    let sum = diff_sum(prime);
    console.log("Sum: ",sum);
  })();


  


   function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }


  //console.log(isPrime(637)); 