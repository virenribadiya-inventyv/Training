// Program to find maximum out of 3 numbers.

#include<iostream>
using namespace std;

int main(){
    int x,y,z;
    cout<<"Enter x:";
    cin>>x;
    cout<<"Enter y:";
    cin>>y;
    cout<<"Enter z:";
    cin>>z;
    if(x>=y){
        if(x>=z){
            cout<<"Max:"<<x<<endl;
            return 0;
        }
        //cout<<"Max:"<<z<<endl;
        //return 0;
    }
    else if(y>=z){
        cout<<"Max:"<<y<<endl;
        return 0;
    }
    cout<<"Max:"<<z<<endl;
    return 0;
}