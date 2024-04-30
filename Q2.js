function solution(S) {
    let foundB = false; // Initialize a flag to track if 'b' is found
    
    // Iterate through each character in the string
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'b') {
            foundB = true; // Set the flag if 'b' is found
        } else if (foundB) {
            // If 'a' is found after 'b', return 0
            return 0;
        }
    }
    // If all occurrences of 'a' are before 'b' or there's no 'b', return 1
    return 1;
}

// Test cases
console.log(solution("aabbb")); // 1
console.log(solution("ba")); // 0
console.log(solution("aaa")); // 1
console.log(solution("b")); // 1
console.log(solution("abba")); // 0
