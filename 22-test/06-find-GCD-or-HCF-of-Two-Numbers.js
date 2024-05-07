function findGCD(a, b) {
    // Base case: if b is 0, return a
    if (b === 0) {
        return a;
    } else {
        // Recursive case: find GCD of b and remainder of a divided by b
        return findGCD(b, a % b);
    }
}


// Example usage
const num1 = 24
const num2 = 36;
const gcd = findGCD(num1, num2);

console.log("GCD of", num1, "and", num2, "is:", gcd);
