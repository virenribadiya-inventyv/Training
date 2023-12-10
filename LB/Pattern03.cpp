// 1! 3! 5! 7! 9! ...... n!
// 1 6 120 5040 362880

#include<iostream>
using namespace std;

int main(){
    int n,fact=1;
    cout<<"Enter n:";
    cin>>n;

    for(int i=1;i<=n+(n-1);i=i+2){
        for(int j=1;j<=i;j++){
            fact = fact*j;
        }
        cout<<fact<<" ";
        fact = 1;
    }
    cout<<endl;
    return 0;
}