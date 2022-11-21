function removeVowels(word) {
  let characters = word.split("");

  let result = [];

  characters.forEach(function (character) {
    if (
      character !== "a" &&
      character !== "o" &&
      character !== "i" &&
      character !== "e" &&
      character !== "u"
    ) {
      result.push(character);
    }
  });

  return result.join("");
}
console.log(removeVowels('samuel'));
module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input
 if we input a name eg 'samuel' it will remove the vowel and we will 
 have an output of a vowel called 'sml' 
  let result = removeVowels('samuel');
  it will remove the vowel so the answer is "sml"

  what is the value of result? 'sml'
*/
