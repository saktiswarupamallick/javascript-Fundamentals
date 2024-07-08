function regexTest(pattern, str) {
    // Create a RegExp object from the pattern
    const regex = new RegExp(pattern);
  
    // Test the string against the regex pattern
    return regex.test(str);
  }
  
  // Test the function with various patterns and strings
  console.log(regexTest('hello', 'hello world')); // true
  console.log(regexTest('world', 'hello world')); // true
  console.log(regexTest('^hello', 'hello world')); // true (checks if 'hello' is at the start)
  console.log(regexTest('world$', 'hello world')); // true (checks if 'world' is at the end)
  console.log(regexTest('goodbye', 'hello world')); // false
  console.log(regexTest('\\d+', 'abc123xyz')); // true (checks for one or more digits)
  console.log(regexTest('\\d{3}', 'abc123xyz')); // true (checks for exactly three digits)
  console.log(regexTest('a.b', 'acb')); // true (checks for 'a' followed by any character followed by 'b')
  console.log(regexTest('a.*b', 'axyzb')); // true (checks for 'a' followed by any number of characters followed by 'b')
  console.log(regexTest('^\\w+@\\w+\\.\\w+$', 'test@example.com')); // true (checks for a valid email format)
  console.log(regexTest('^\\w+@\\w+\\.\\w+$', 'invalid-email')); // false (invalid email format)
  