#include <iostream>

// Function to calculate the factorial of a number
int factorial(int n) {
    if (n <= 1)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int num;

    // Input
    std::cout << "Enter a positive integer: ";
    std::cin >> num;

    // Validation
    if (num < 0) {
        std::cerr << "Error: Please enter a positive integer." << std::endl;
        return 1; // Error exit code
    }

    // Factorial calculation
    int fact = factorial(num);

    // Output
    std::cout << "Factorial of " << num << " is: " << fact << std::endl;

    return 0; // Successful exit code
}
