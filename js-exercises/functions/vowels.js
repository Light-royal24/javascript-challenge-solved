function vowels(str) {
  const arrayStr = Array.from(str).splice(" ");

  const filteredArr = arrayStr.filter((str) => {
    const vowels = /[aeiou]/;
    return str.match(vowels);
  });

  return filteredArr.length;
}

const vowelsSTr = "The quick brown fox";

console.log(vowels(vowelsSTr));
