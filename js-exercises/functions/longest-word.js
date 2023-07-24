const people = [
  {
    name: "David Prosper",
    age: 17,
  },
  {
    name: "Kobie Maino",
    age: 17,
  },
  {
    name: "Jeremiah Akpera",
    age: 31,
  },
  {
    name: "Cristiano Ronaldo",
    age: 37,
  },
  {
    name: "Rebecca Ferguson",
    age: 43,
  },
  {
    name: "Tom Hardy",
    age: 40,
  },
  {
    name: "Marcus Rashford",
    age: 25,
  },
];

const names = ["David", "Jeremiah", "Cristiano", "Lionel"];

function makeUpperCase(word) {
  return word.toUpperCase();
}

// Map
// Loops through an array and creates a new array based on the function
const newNames = names.map((name) => makeUpperCase(name));

const newPeople = people.map((person) => {
  if (
    ["Cristiano Ronaldo", "Marcus Rashford", "Kobie Maino"].includes(
      person.name
    )
  ) {
    person.footballer = true;
    person.programmer = false;
  } else {
    person.programmer = true;
    person.footballer = false;
  }

  if (person.age < 18) {
    person.underAge = true;
  } else {
    person.underAge = false;
  }

  return person;
});

// Filter
// Loops through an array and only returns values that match a condition
const footballers = newPeople.filter((person) => {
  if (person.footballer) return person;
});

const nonFootballers = newPeople.filter((person) => {
  if (!person.footballer) return person;
});

const underAge = newPeople.filter((person) => {
  if (person.underAge) return person;
});

const myStr = "web development tutorial dictionaries";

function longestWord(str) {
  let longestWord = "";
  let longestNum = 0;

  const strArr = str.split(" ");

  strArr.forEach(function (word) {
    const wordLength = word.length;

    if (wordLength > longestNum) {
      longestNum = wordLength;
      longestWord = word;
    }
  });

  console.log({ longestWord });
  console.log({ longestNum });
}

// longestWord(myStr);

// [].forEach((item) => {});

// Map

// Filter
// Sort
// forEach
// findIndex
// find
// some

const shortNames = names.filter((name) => {
  if (name.length <= 6) return name;
});

// forEach
newPeople.forEach((person) => {
  // console.log(person);
});

// findIndex
const davidsIndex = names.findIndex((name) => {
  if (name === "Jeremiah") return name;
});

console.log(davidsIndex);

// find

const ageFourty = people.find((person) => {
  if (person.age === 40) {
    return person;
  }
});

console.log(ageFourty);
// some
// any
