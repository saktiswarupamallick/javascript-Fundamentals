function outerFunction(param) {
    // Variable declared within outerFunction
    const outerVar = "I am an outer variable";
  
    // Inner function
    function innerFunction() {
      // Accessing both the parameter and the outer variable
      console.log("Parameter passed to outerFunction: " + param);
      console.log("Variable declared within outerFunction: " + outerVar);
    }
  
    // Returning the inner function
    return innerFunction;
  }
  
  // Creating an instance of innerFunction by calling outerFunction
  const myInnerFunction = outerFunction("Hello, world!");
  
  // Calling the inner function
  myInnerFunction();
 //Even though outerFunction has finished executing, innerFunction maintains access to param and outerVar due to lexical scoping. Here’s what happens when you run the code:  