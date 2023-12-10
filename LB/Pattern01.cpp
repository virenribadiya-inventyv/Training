// 1 12 123 1234 ..... --> n

#include<iostream>
using namespace std;

int main(){
    int n;
    cout<<"Enter n:";
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<j;
        }
        cout<<" ";
    }
    cout<<endl;
    return 0;
}