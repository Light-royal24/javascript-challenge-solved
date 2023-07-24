function arrayElement(min) {
  return (val) => {
    // return min >= val;
    return val >= min;
  };
}

const myArr = [10, 20, 30, 1, 5, 8].filter(arrayElement(8));

console.log(myArr);
