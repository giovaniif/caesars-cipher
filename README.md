# caesars-cipher

## Explaining
The **Caesar's cipher** is and old encryption method invented by roman emperor **Julius Caesar** to 
communicate with their generals.

## Encrypt
This technique is based on replacing a letter of the alphabet by
another in a given number of spaces.
### Example
  Spaces = 3\
  Phrase = 'Hello, World!'
  Encrypted = 'khoor, zruog!'

  *Spaces, exclamation and question marks, as well as periods and commas are maintained*

## Decrypting

  - Params
    - encrypted phrase
    - number of spaces

 ``` javascript
  const encryptedPhrase = phrase.toLowerCase();
  // Make the phrase lowercase

  let phraseLetters = [];
  for(let i = 0; i < encryptedPhrase.length; i++) {
    phraseLetters.push(encryptedPhrase[i]);
  }
  // Create an array with each letter of the original sentence

  let decryptedLetter;
  phraseLetters.map(letter => {
    letter.match(/[\d\s,\.?!]/) 
      ? decryptedLetter = letter
      : decryptedLetter =  findMatch(letter);
      // Map the "letters" array and find the correct
      // match for each one with findMatch() function

    decryptedPhrase += decryptedLetter;
  });
  // Create the decrypted string
 ```

 ## It's done!
 We have successfuly decrypted the original message.\
 *ps: This code is part of the CodeNation's Acelera Dev challenge, so a few pieces of the code were not explained here because they're not part of the decrypting logic*