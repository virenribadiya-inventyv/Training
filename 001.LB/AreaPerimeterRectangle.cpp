//Program to calculate area and perimeter of rectangle.

#include<iostream>
using namespace std;

int main(){
    int l,b,area,per;
    cout<<"Enter Lenght:";
    cin>>l;
    cout<<"Enter Breadth:";
    cin>>b;
    area = l*b;
    per = 2*l + 2*b;
    cout<<"Area:"<<area<<endl;
    cout<<"Perimeter:"<<per<<endl;
    
    return 0;
}