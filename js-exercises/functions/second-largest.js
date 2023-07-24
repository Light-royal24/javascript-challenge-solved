// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

// 1. Take an array of numbers
// 2. Return the second lowest number
// 3. Return the second greatest number
function secondLowestAndHighest(arr) {
  if (!Array.isArray(arr)) {
    console.log("Please pass in an array");
    return;
  }

  if (arr.length < 2) {
    console.log("Array must be longer than 2 numbers");
    return;
  }

  const sortedArray = arr.sort((a, b) => {
    if (a > b) return 1;
    else return -1;
  });

  return `${sortedArray[1]}, ${sortedArray[sortedArray.length - 2]}`;
}

console.log(secondLowestAndHighest([1, 40, "a", 12, 6, 5, 2, 4]));
