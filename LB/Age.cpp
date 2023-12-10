//Program to check the person is adult or not.

#include<iostream>
using namespace std;

int main(){
    int age;
    cout<<"Enter Age:";
    cin>>age;
    if(age>21){
        cout<<"Adult"<<endl;
        return 0;
    }
    cout<<"not Adult"<<endl;
    return 0;
}