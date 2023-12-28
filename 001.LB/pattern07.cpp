//x - x^3/3! + x^5/5! - x^7/7! + x^9/9! .....

#include <iostream>

int main() {
    int n, i = 1;
    double x, t = 0, sum = 0;

    std::cout << "Enter n: ";
    std::cin >> n;
    std::cout << "Enter x: ";
    std::cin >> x;

    x = x * 3.14159 / 180;
    t = x;
    sum = x;

    while (i <= n) {
        t = (t * (-1) * x * x) / (2 * i * (2 * i + 1));
        sum = sum + t;
        i = i + 1;
    }

    std::cout << "Sum: " << sum << std::endl;

    return 0;
}