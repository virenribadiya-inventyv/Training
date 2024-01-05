# Problem Statement
Input a number from the user, ensuring it's at least four digits long. Use permutations and combinations to generate various numbers from the input. Identify prime numbers among these and determine the largest prime. Create a Pascal's Triangle where the numbers within each row are smaller than the previously found largest prime number. Along with this, underline the prime numbers in the pascal trinagle which are present in derived prime numbers after permuations and combinations. If any derived prime number is not present in Pascal's Triangle, then display it as error ratio.

## Solution 

#### Step 1 : 
Input a number from the user, ensuring it's at least four digits long.

```javascript
do{
    var str = prompt("Enter Number (Atleast 4 digit):"); 
}while (str.length < 4) 
```

#### Step 2 : 
Obtain the digits.

```javascript
let n = parseInt(str);
let digitsArray = Array.from(String(n), Number);
```

#### Step 3 :
Get all the combimations of the digit.

```javascript
function getAllDigitCombinations(digitsArray) {
    const result = [];
  
    function generateCombinations(currIndex, currentCombo) {
      if (currentCombo.length > 0) {
        result.push(currentCombo.join(''));
      }
  
      for (let i = currIndex; i < digitsArray.length; i++) {
        currentCombo.push(digitsArray[i]);
        generateCombinations(i + 1, currentCombo);
        currentCombo.pop();
      }
    }
  
    generateCombinations(0, []);
  
    return result;
  }

  let combinations = getAllDigitCombinations(digitsArray);
  console.log(combinations);
```

#### Step 4 :
get all the permutations of the each combination.

```javascript
  function permuteString(str) {
    const result = [];
  
    function permute(current, remaining) {
      if (remaining.length === 0) {
        result.push(current);
        return;
      }
  
      for (let i = 0; i < remaining.length; i++) {
        const nextCurrent = current + remaining[i];
        const nextRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        permute(nextCurrent, nextRemaining);
      }
    }
  
    permute('', str);
    return result;
  }
  
  function getAllPermutationsOfCombinations(combinations) {
    const permutationsOfCombinations = [];
  
    combinations.forEach((combo) => {
      const permutations = permuteString(combo.toString());
      permutationsOfCombinations.push(permutations);
    });
  
    return permutationsOfCombinations.flat(); 
  }
  
  let permutationsOfCombinations = getAllPermutationsOfCombinations(combinations);
  console.log(permutationsOfCombinations);
```

#### step 5:
Get the prime numbers from the numbers derived after doing permutations of the each combination. Also, get the maximum prime number from it.

```javascript
function isPrime(n) {
    if (n===1) {
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if (n%i==0){return false;}
    }
    return true;
}

var primes = [];
for(let el of permutationsOfCombinations){
    let t = parseInt(el)
    if(isPrime(t)){
        primes.push(t);
    }
}

console.log("prime: ",primes);
var maxPrime = Math.max(...primes);
console.log("Highest in prime:", maxPrime);
```

#### Step: 6 
Generate the Pascal's Triangle where the numbers within each row are smaller than the previously found largest prime number.

```javascript
var curr = [1];
var next = [1,1];
var primeIncluded = [];
var pascalContainer = document.getElementById("pascalsTriangle");
var str =`&nbsp;&nbsp<span>${curr[0]}</span><br>&nbsp;&nbsp;`;
var found=false
while(!found){
  console.log(curr,str);
  curr=next;
  for(let i of curr){
    if(primes.includes(i)){
      primeIncluded.push(i);
      str = str + `&nbsp;&nbsp<span><u>${i}</u></span>&nbsp;&nbsp;`
    }
    else{
      str = str + `&nbsp;&nbsp<span>${i}</span>&nbsp;&nbsp;`
    }
  }
  str = str+`<br>`;
  next = [1];
  for(let i=0;i<=curr.length-2;i++){
    next.push(curr[i]+curr[i+1]);
  }
  next.push(1);
  let tempMax = Math.max(...next);
  if(tempMax>=maxPrime){
    found=true;
  }
}

pascalContainer.innerHTML = str;
console.log(primeIncluded);
```

#### Step: 7 
Display the error ratio.

```JavaScript
for(let i of primeIncluded){
  const index = primes.indexOf(i);
  if (index > -1) {
  primes.splice(index, 1);
  }
}

primes = primes.sort((a, b) => a - b);
console.log(primes); 

const error = document.getElementById("errorRatio");
error.innerHTML = `Error Ratio: ${primes}`;
```

### Explaination


The provided solution begins by obtaining a user-inputted number of at least four digits. It then utilizes permutations and combinations to generate various numbers from the input and identifies prime numbers among them, determining the largest prime. A Pascal's Triangle is constructed with numbers in each row smaller than the identified largest prime. Prime numbers from this triangle, underlined if present in the derived primes, are displayed. The solution also showcases an error ratio by indicating prime numbers from the derived set that aren't present in the Pascal's Triangle primes.


#### Author
- [Viren Ribadiya](https://github.com/virenribadiyainventyv)