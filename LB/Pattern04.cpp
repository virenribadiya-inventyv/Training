// 1! -3! 5! -7! 9! ...... n!
// 1 -6 120 -5040 362880

#include<iostream>
using namespace std;

int main(){
    int n,fact=1;
    cout<<"Enter n:";
    cin>>n;
    for(int i=3;i<(n*n)/2;i=i+2){
        cout<<fact<<" ";
        fact = fact*i*(i-1)*(-1);
    }
    cout<<endl;
    return 0;
}
