// Program to find maximum out of 2 numbers.

#include<iostream>
using namespace std;

int main(){
    int x,y;
    cout<<"Enter x:";
    cin>>x;
    cout<<"Enter y:";
    cin>>y;
    if(x>=y){
        cout<<"Max:"<<x<<endl;
        return 0;
    }
    cout<<"Max:"<<y<<endl;
    return 0;
}