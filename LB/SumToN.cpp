//Program to calculate the sum upto n.

#include<iostream>
using namespace std;

int main(){
    int n,ans=0;
    cout<<"Enter n:";
    cin>>n;
    for(int i=1;i<=n;i++){
        ans = ans+i;
    }
    cout<<ans<<endl;
    return 0;
}