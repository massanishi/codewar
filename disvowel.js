function disemvowel(str) {
  return str.replace(/a|i|u|o|e/gi, '');
}

console.log(disemvowel('aiyko'));


// Best. I can enclose bracket to have any one of the words replaced instead of or operation on every single character.
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
