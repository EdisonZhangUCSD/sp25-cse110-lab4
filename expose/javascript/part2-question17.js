// Question 17
function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
      newArr.push(callback(array[i]));
    }
    return newArr;
  }
  
  function doSomething(num) {
    return num * 2;
  }
  
  // Run and log the result
  console.log(modifyArray([1, 2, 3], doSomething));
  