function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function nPr(n, r) {
    if (n < r) {
        return "Invalid input: n must be greater than or equal to r";
    } else {
        return factorial(n) / factorial(n - r);
    }
}

// Example usage
const n = 5; // total number of items
const r = 3; // number of items to choose
const permutations = nPr(n, r);

console.log("Permutations of", n, "items taken", r, "at a time is:", permutations);
