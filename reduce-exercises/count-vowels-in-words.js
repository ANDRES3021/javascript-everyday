const words = ["Javascript", "is", "Awesome", "and", "Unpredictable"];
const joined = words.join("").toLocaleLowerCase();
const vowels = [...joined].reduce((obj, letter) => {
  if (letter.match(/[aeiouáéíóúü]/g)) {
    if (!obj[letter]) {
      obj[letter] = 0;
    }
    obj[letter] += 1;
  }
  return obj;
}, {});
console.log(vowels);
