function generateCombinations(str) {
    const combinations = [];

    // Generate all combinations using nested loops
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            combinations.push(str.substring(i, j));
        }
    }

    return combinations;
}

// Example usage
const inputString = 'dog';
const result = generateCombinations(inputString);

console.log("Combinations:", result);
