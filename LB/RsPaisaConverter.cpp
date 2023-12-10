// Program to convert Rupees to Paisa and Vice Versa.

#include<iostream>
using namespace std;

int main(){
    string Type;
    cout<<"Note:"<<endl;
    cout<<"1.Type RP to convert Rs to Paisa"<<endl;
    cout<<"2.Type PR to convert Paisa to Rs"<<endl;
    cout<<"Convert:";
    cin>>Type;
    if(Type=="RP"){
        int Rs,Paisa;
        cout<<"Enter Rs:";
        cin>>Rs;
        Paisa = Rs*100;
        cout<<"Paisa:"<<Paisa<<endl;
        return 0;
    }
    else if(Type=="PR"){
        int Rs,Paisa;
        cout<<"Enter Paisa:";
        cin>>Paisa;
        Rs = Paisa/100;
        cout<<"Rupees:"<<Rs<<endl;
        return 0;
    }
    cout<<"Invalid"<<endl;
    return 0;
}
