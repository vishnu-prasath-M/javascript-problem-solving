function hasDuplicates(arr) {
    const uniqueItems = new Set(arr); 
    return uniqueItems.size !== arr.length; 
  }
  
 
  console.log(hasDuplicates([1, 2, 3, 4, 5, 1])); // Output: true



  console.log(hasDuplicates([1, 2, 3, 4, 5]));    // Output: false
  