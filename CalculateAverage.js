function calculateAverage(arr) {
    if (arr.length === 0) return 0; 
    
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  

  const inputArray = [1, 2, 3, 4, 5];
  const average = calculateAverage(inputArray);
  console.log(average);
  
  // Output: 3
  