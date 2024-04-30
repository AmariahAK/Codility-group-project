function solution(S) {
    // Create a dictionary to store characters and their corresponding positions
    let charPositions = new Map();
    
    // Iterate through each string in the array
    for (let i = 0; i < S.length; i++) {
        // Iterate through each character in the current string
        for (let j = 0; j < S[i].length; j++) {
            // Check if the character already exists in the dictionary
            if (charPositions.has(S[i][j])) {
                // Get the positions array for the current character
                let positions = charPositions.get(S[i][j]);
                // Iterate through the positions array
                for (let k = 0; k < positions.length; k++) {
                    // Check if the current position is different from the current string's index
                    if (positions[k] !== i) {
                        // Found a pair of strings with a common letter
                        return [positions[k], i, j];
                    }
                }
                // If no pair is found, add the current position to the positions array
                positions.push(i);
            } else {
                // If the character doesn't exist in the dictionary, add it with its position
                charPositions.set(S[i][j], [i]);
            }
        }
    }
    // If no pair is found, return an empty array
    return [];
}

// Test cases
console.log(solution(["abc", "bca", "dbe"])); // [0, 2, 1]
console.log(solution(["zzzz", "ferz", "zdsr", "fgtd"])); // [0, 1, 3] or [1, 3, 0]
console.log(solution(["gr", "sd", "rg"])); // []
console.log(solution(["bdafg", "ceagi"])); // [0, 1, 2]
