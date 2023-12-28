function factorial(n)
{
    if(n==1 || n==0)
        return 1;
    return n*factorial(n-1);
}

(()=>{
    var n,r,ans;
    n = prompt("Enter n:");
    r = prompt("Enter r:");
    ans=factorial(n)/(factorial(r)*factorial(n-r));
    console.log(ans);
})();



