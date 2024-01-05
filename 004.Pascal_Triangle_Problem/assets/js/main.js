do{
    var str = prompt("Enter Number (Atleast 4 digit):"); 
}while (str.length < 4)

let n = parseInt(str);
let digitsArray = Array.from(String(n), Number);
console.log(digitsArray); 


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
  console.log(combinations); // Output: ['1', '12', '123', '1234', '124', '13', '134', '14', '2', '23', '234', '24', '3', '34', '4']
  

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

for(let i of primeIncluded){
  const index = primes.indexOf(i);
  if (index > -1) { // only splice array when item is found
  primes.splice(index, 1); // 2nd parameter means remove one item only
  }
}

primes = primes.sort((a, b) => a - b);
console.log(primes); 

const error = document.getElementById("errorRatio");
error.innerHTML = `Error Ratio: ${primes}`;
