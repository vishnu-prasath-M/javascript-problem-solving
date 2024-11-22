function removeFalsyValues(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) { 


        result.push(arr[i]);
        
      }
    }
    return result;
  }
  

  const inputArray = [0, 1, false, 2, '', 3];
  const result = removeFalsyValues(inputArray);
  console.log(result); 
  
  // Output: [1, 2, 3]
  