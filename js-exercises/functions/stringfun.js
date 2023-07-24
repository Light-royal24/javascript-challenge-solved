function turnStringToCamelCase(str) {
  const camelCaseStr = Array(str).join("").split(" ");

  const camelCaseFun = camelCaseStr.map((str) => {
    const firstLetters = str[0].toUpperCase();

    const LowerCaseword = str.slice(1);

    return firstLetters + LowerCaseword;
  });

  return Array.from(camelCaseFun).join(" ");
}

const myStr = "difficult but effective";

console.log(turnStringToCamelCase(myStr));
