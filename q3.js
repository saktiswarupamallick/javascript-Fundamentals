function searchCharacterClasses(str, pattern) {
    // Create a RegExp object from the pattern with global flag to find all matches
    const regex = new RegExp(pattern, 'g');
  
    // Use the match method to find all matches in the string
    const matches = str.match(regex);
  
    // Return the matches or an empty array if no matches are found
    return matches || [];
  }
  
  // Test the function with various character classes
  const testString = "Hello, World! 123 ABC xyz @#$%";
  
  console.log("Digits:", searchCharacterClasses(testString, '\\d')); // Matches digits
  console.log("Uppercase letters:", searchCharacterClasses(testString, '[A-Z]')); // Matches uppercase letters
  console.log("Lowercase letters:", searchCharacterClasses(testString, '[a-z]')); // Matches lowercase letters
  console.log("Special characters:", searchCharacterClasses(testString, '[^a-zA-Z0-9\\s]')); // Matches special characters
  