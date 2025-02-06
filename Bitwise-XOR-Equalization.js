let testCases = prompt("Enter the number of test cases: ");

// Validate testCases input, ensuring it's within the allowed range.
while (testCases < 1 || testCases > Math.pow(10, 4)) {
    testCases = prompt("Invalid value, try again: ");
}

let sumOfN = 0; // Track the sum of all integers across test cases.

for (let j = 1; j <= testCases; j++) {

    let numberOfIntegers = prompt("Enter the number of integers: ");
    // Validate numberOfIntegers input.
    while (numberOfIntegers < 1 || numberOfIntegers > Math.pow(10, 5)) {
        numberOfIntegers = prompt("Invalid value, try again: ");
    }

    sumOfN += numberOfIntegers; // Accumulate the total count of numbers processed.

    // Ensure the total number of integers does not exceed the maximum allowed limit.
    if (sumOfN > 5 * Math.pow(10, 5)) {
        console.log("The sum of Number of integers over all test cases exceeded the maximum limit.")
        break;
    } else {
        let integerX = prompt("Enter an integer that denotes the bitwise xor operation: ");

        // Validate integerX input.
        while (integerX < 0 || integerX > Math.pow(10, 9)) {
            integerX = prompt("Invalid value, try again: ");
        }

        let array = []; // Array to store input values.

        // Read and validate each array element.
        for (let i = 0; i < numberOfIntegers; i++) {
            array[i] = prompt("Enter array values: ");
            while (array[i] < 1 || array[i] > Math.pow(10, 9)) {
                array[i] = prompt("Invalid value, try again: ");
            }
        }

        let finalEqualCounter = 1; // Tracks maximum equal elements count.
        let finalOperationCounter = 0; // Tracks minimum operations needed.

        // Iterate through each element to find the maximum count of equal values.
        for (let i = 0; i < numberOfIntegers; i++) {
            let currentEqualCounter = 1; // Count of elements equal to array[i].
            let currentOperationCounter = 0; // Number of operations needed.

            // Compare array[i] with every other element.
            for (let k = 0; k < numberOfIntegers; k++) {
                if (k !== i) {
                    if (array[i] == array[k]) {
                        currentEqualCounter++; // Direct match found.
                    } else {
                        let xorValue = array[i] ^ integerX; // Compute XOR transformation.
                        if (array[k] == xorValue) {
                            currentEqualCounter++; // Match found after XOR.
                            currentOperationCounter++; // Operation counted.
                        }
                    }
                }
            }

            // Update the final results based on comparisons.
            if (i == 0) {
                finalOperationCounter = currentOperationCounter;
                finalEqualCounter = currentEqualCounter;
            } else {
                if (currentEqualCounter > finalEqualCounter || currentEqualCounter == finalEqualCounter) {
                    finalEqualCounter = currentEqualCounter;
                    if (currentOperationCounter < finalOperationCounter) {
                        finalOperationCounter = currentOperationCounter;
                    }
                }
            }
        }

        // Print the results for the current test case.
        console.log(finalEqualCounter);
        console.log(finalOperationCounter);
    }
}