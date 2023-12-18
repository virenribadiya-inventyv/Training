//1 1 1 3 2 5 3 7 5 9 8 11 13 13  ......

#include <iostream>
using namespace std;

int main() {
    int n, i = 1, t = 0, ft = 1, st = 1;
    cin >> n;
    
    while (i <= 2 * n) {
        cout << ft;
        cout << i;
        t = ft + st;
        ft = st;
        st = t;
        i += 2;
    }
    cout<<endl;
    return 0;
}