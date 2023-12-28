let n=10;
var arr= [];

function input(n) {
    if(n==0){
        return;
    }    
    input(n-1);
    let value = prompt("Enter a number:");
    arr.push(value);
}

input(n);
console.log(arr);