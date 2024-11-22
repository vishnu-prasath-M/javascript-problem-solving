function intersection(arr1, arr2) {
    const set1 = new Set(arr1); 
    return arr2.filter(item => set1.has(item));
  }
  
  
  const array1 = [1, 2, 3];
  const array2 = [2, 3, 4];
  
  const result = intersection(array1, array2);
  console.log(result);
  
  // Output: [2, 3]
  