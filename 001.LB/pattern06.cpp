//Print 123234543.....678901098767890123210987

#include <iostream>
using namespace std;

int main() {
    int n, i = 1, j = 1;
    cout<<"Enter n:";
    cin >> n;
    
    while (i < n) {
        j = i;
        while (j < (2 * i) - 1) {
            cout << j%10;
            j++;
        }
        
        j = (2 * i) - 1;
        while (j > i - 1) {
            cout << j%10;
            j--;
        }
        i++;
    }
    cout<<endl;  
    return 0;
}