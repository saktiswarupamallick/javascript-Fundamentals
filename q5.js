function calculateDeliveryTime(packageType) {
    let estimatedDeliveryTime;
  
    // Use a switch statement to determine the estimated delivery time based on the package type
    switch (packageType) {
      case 'standard':
        estimatedDeliveryTime = '3-5 days';
        break;
      case 'express':
        estimatedDeliveryTime = '1-2 days';
        break;
      case 'overnight':
        estimatedDeliveryTime = 'next day';
        break;
      default:
        estimatedDeliveryTime = 'Unknown package type';
    }
  
    // Print the estimated delivery time
    console.log(`Estimated delivery time for ${packageType} package: ${estimatedDeliveryTime}`);
  }
  
  // Test the function with different package types
  calculateDeliveryTime('standard'); // Estimated delivery time for standard package: 3-5 days
  calculateDeliveryTime('express'); // Estimated delivery time for express package: 1-2 days
  calculateDeliveryTime('overnight'); // Estimated delivery time for overnight package: next day
  calculateDeliveryTime('same-day'); // Estimated delivery time for same-day package: Unknown package type
  