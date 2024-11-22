function flattenArray(arr) {
  
    return arr.reduce((flat, item) => 
      Array.isArray(item) ? flat.concat(flattenArray(item)) : flat.concat(item), []
    );
  }
  

  const inputArray = [1, [2, 3], [4, [5]]];
  const flattenedArray = flattenArray(inputArray);
  
  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
  