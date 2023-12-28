// Program to find maximum out of 4 numbers.

#include<iostream>
using namespace std;

int main(){
    int x,y,z,w;
    cout<<"Enter x:";
    cin>>x;
    cout<<"Enter y:";
    cin>>y;
    cout<<"Enter z:";
    cin>>z;
    cout<<"Enter w:";
    cin>>w;
    
    if(x>=y){
        if(x>=z){
            if(x>=w){
                cout<<"Max:"<<x<<endl;
                return 0;
            }
            cout<<"Max:"<<w<<endl;
            return 0;
        }
        else if(z>=w){
            cout<<"Max:"<<z<<endl;
            return 0;
        }
        cout<<"Max:"<<w<<endl;
        return 0;
    }
    else if(y>=z){
        if(y>=w){
            cout<<"Max:"<<y<<endl;
            return 0;
        }
        cout<<"Max:"<<w<<endl;
        return 0;
    }
    else if(z>=w){
        cout<<"Max:"<<z<<endl;
        return 0;
    }
    cout<<"Max:"<<w<<endl;
    return 0;
}