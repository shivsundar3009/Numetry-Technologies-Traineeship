function extractUniqueCharacters(str) {
    const uniqueCharacters = [];
    for (let i = 0; i < str.length; i++) {
        if (!uniqueCharacters.includes(str[i])) {
            uniqueCharacters.push(str[i]);
        }
    }
    return uniqueCharacters;
}

// Example usage
const inputString = 'hello';
const uniqueCharacters = extractUniqueCharacters(inputString);

console.log("Unique characters:", uniqueCharacters);
