function extractGroups(pattern, str) {
    // Create a RegExp object from the pattern
    const regex = new RegExp(pattern);
  
    // Execute the regex pattern on the input string
    const match = str.match(regex);
  
    // Check if there is a match
    if (match) {
      // Return the matched groups (excluding the full match)
      return match.slice(1);
    } else {
      // Return an empty array if no match is found
      return [];
    }
  }
  
  // Test the function with patterns that include groups to capture parts of a date
  const testString1 = "Today's date is 2024-07-08.";
  const datePattern1 = /(\d{4})-(\d{2})-(\d{2})/; // Pattern to capture year, month, and day
  
  const testString2 = "The event is scheduled for 08/07/2024.";
  const datePattern2 = /(\d{2})\/(\d{2})\/(\d{4})/; // Pattern to capture day, month, and year
  
  console.log("Extracted groups from first test string:", extractGroups(datePattern1, testString1));
  // Output should be: ['2024', '07', '08']
  
  console.log("Extracted groups from second test string:", extractGroups(datePattern2, testString2));
  // Output should be: ['08', '07', '2024']
  