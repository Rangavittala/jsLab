// CharAt -charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log('The character at index ' + index + ' is ' + sentence.charAt(index));
// expected output: "The character at index 4 is q"

//charCodeAt -The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log('The character code ' + sentence.charCodeAt(index) + ' is equal to ' + sentence.charAt(index));
// expected output: "The character code 113 is equal to q"

// concat() - The concat() method concatenates the string arguments to the calling string and returns a new string.
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

//includes() method determines whether one string may be found within another string, returning true or false as appropriate.
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word)? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

// endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));

//indexOf() method returns the index within the calling String object
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log('The index of the first "' + searchTerm + '" from the beginning is ' + indexOfFirst);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log('The index of the 2nd "' + searchTerm + '" is ' + paragraph.indexOf(searchTerm, (indexOfFirst + 1)));
// expected output: "The index of the 2nd "dog" is 52"

//Pads the current string from the end with a given string and returns a new string of the length targetLength.
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// expected output: "200  "

//padStart
const str1 = '2';

console.log(str1.padStart(2, '0'));
// expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-3);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"

//split() method turns a String into an array of strings
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);