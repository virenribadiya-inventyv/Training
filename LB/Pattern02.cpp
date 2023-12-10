// 1 121 12321 1234321 ..... --> n

#include<iostream>
using namespace std;

int main(){
    int n,i,j;
    cout<<"Enter n:";
    cin>>n;
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            cout<<j;
        }
        for(j=i-1;j>=1;j--){
            cout<<j;
        }
        cout<<" ";
    }
    cout<<endl;
    return 0;
}