// Print 1 2 3 2 3 4 5 4 3 4 5 6 7 6 5 4 ........

#include <iostream>
using namespace std;

int main() {
    int n, i = 1, j = 1;
    cout<<"Enter n:";
    cin >> n;
    
    while (i < n) {
        j = i;
        while (j < (2 * i) - 1) {
            cout << j;
            j++;
        }
        
        j = (2 * i) - 1;
        while (j > i - 1) {
            cout << j;
            j--;
        }
        i++;
    }
    cout<<endl;  
    return 0;
}