function removeDuplicate(arr){
    let exists ={},
        outArr = [], 
        elm;
  
    for(let i =0; i<arr.length; i++){
      elm = arr[i];
      if(!exists[elm]){
        outArr.push(elm);
        exists[elm] = true;
     }
    }
    return outArr;
  }
  
  console.log( removeDuplicate([1,3,3,3,1,5,6,7,8,1]));
    // [1, 3, 5, 6, 7, 8]