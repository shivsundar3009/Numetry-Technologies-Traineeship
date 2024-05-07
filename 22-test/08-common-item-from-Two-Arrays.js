function findCommonItems(arr1, arr2) {
    const commonItems = [];

    // Loop through each element of arr1
    for (let i = 0; i < arr1.length; i++) {
        // Check if the current element exists in arr2
        if (arr2.includes(arr1[i])) {
            // If it does, add it to the commonItems array
            commonItems.push(arr1[i]);
        }
    }

    return commonItems;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonItems = findCommonItems(array1, array2);

console.log("Common items:", commonItems);
