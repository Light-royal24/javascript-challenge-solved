function alphabeticalOrder(alpha) {
  const sortedAlpha = Array.from(alpha).sort((a, b) => {
    if (a > b) return 1;
    else return -1;
  });

  const turnedAlphaToStr = String(sortedAlpha).split("").join("");

  console.log(turnedAlphaToStr);
}

const alphabet = "adaaabcjmznwoq";
alphabeticalOrder(alphabet);
