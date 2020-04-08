const sha1 = require('js-sha1');

const alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const numberOfSlots = 9;
const phrase = "vnw jwm wjcrxwb knqjen frbnuh fqnw cqnh qjen ngqjdbcnm juu xcqna anbxdalnb. jkkj nkjw";

const decrypt = (phrase) => {
  let decryptedPhrase = "";
  const encryptedPhrase = phrase.toLowerCase();

  let phraseLetters = [];
  for(let i = 0; i < encryptedPhrase.length; i++) {
    phraseLetters.push(encryptedPhrase[i]);
  }
  
  let decryptedLetter;
  phraseLetters.map(letter => {
    letter.match(/[\d\s,\.?!]/) 
      ? decryptedLetter = letter
      : decryptedLetter =  findMatch(letter);

    decryptedPhrase += decryptedLetter;
  });
  
  const cryptoSha1 = sha1(decryptedPhrase);
  return {
    decryptedPhrase,
    cryptoSha1
  };
}

const findMatch = (letter) => {
  let decryptedLetterIndex = alphabet.findIndex(item => item === letter);
  let match;

  decryptedLetterIndex - numberOfSlots >= 0
    ? match = alphabet[decryptedLetterIndex - numberOfSlots]
    : match = alphabet[26 - (numberOfSlots - decryptedLetterIndex)];

  return match;
}

const { decryptedPhrase } = decrypt(phrase);
console.log(decryptedPhrase);