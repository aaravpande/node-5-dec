#include <stdio.h>

// Function to calculate factorial
int factorial(int n) {
    if (n == 0 || n == 1)
        return 1;
    else
        return n * factorial(n - 1);
}

int main() {
    int num;
    
    // Prompt the user to enter a non-negative integer
    printf("Enter a non-negative integer: ");
    scanf("%d", &num);
    
    // Check if the number is non-negative
    if (num < 0)
        printf("Factorial is not defined for negative numbers.\n");
    else {
        // Calculate and print the factorial
        printf("Factorial of %d is: %d\n", num, factorial(num));
    }
    
    return 0;
}
