function groupBy(arr, property) {
    return arr.reduce((grouped, item) => {
    
      const key = item[property];
      
    
      if (!grouped[key]) {
        grouped[key] = [];
      }
      

      grouped[key].push(item);
  
      return grouped;
    }, {});
  }
  

  const products = [
    { id: 1, category: 'fruit' },
    { id: 2, category: 'vegetable' },
    { id: 3, category: 'fruit' }
  ];
  
  const groupedProducts = groupBy(products, 'category');
  console.log(groupedProducts);
  