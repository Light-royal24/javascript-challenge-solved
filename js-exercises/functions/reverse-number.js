// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

function reversesNumber(num) {
  if (typeof num != "number") {
    console.log("pls type in numbers");
    return;
  }

  const stringNUm = String(num);

  const splitNum = stringNUm.split("");

  const reverseNum = splitNum.reverse().join("");

  return Number(reverseNum);
}

const myNum = 112 + 237;

console.log(reversesNumber(myNum));
