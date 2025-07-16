const words = ["javascript", "is", "fun", "and", "challenging", "sometimes"];
const longestWord = words.reduce((acc, word) => {
  if (acc.length < word.length) {
    acc = word;
  } else {
    acc = acc;
  }

  return acc;
}, "");

console.log(longestWord);
