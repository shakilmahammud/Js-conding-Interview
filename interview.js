//call back function

function modifyArray(arr,callback) {
    // do something to arr here
    arr.push(100);
    // then execute the callback function that was passed
    callback();
}
  const arr = [1, 2, 3, 4, 5];
  modifyArray(arr,function() {
    console.log("array has been modified", arr);
  });


  function isInt(num) {
    return num % 1 === 0;
  }
  
  console.log(isInt(4)); // true
  console.log(isInt(10.2)); // false
  console.log(isInt(0.5)); // false

  