// Write a JavaScript function to get the number of occurrences of each letter in a specified string.

function numOccurance(str) {
  const strOccurance = {};
  str.replace(/\S/g, (num) => {
    strOccurance[num] = isNaN(strOccurance[num]) ? 1 : strOccurance[num] + 1;
  });
  return strOccurance;
}

const numOccuranceStr = "how hard is all this functions";

console.log(numOccurance(numOccuranceStr));
