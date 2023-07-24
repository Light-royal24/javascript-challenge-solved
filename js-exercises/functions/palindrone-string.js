function palimdromeString(str) {
  const reversStr = String(str).split("").reverse().join("").toLowerCase();

  if (reversStr !== str.toLowerCase()) {
    console.log("string is not a palindrome string");
  } else {
    console.log("string is a palindrome string");
  }
}

stringStr = "madaMe";

palimdromeString(stringStr);
