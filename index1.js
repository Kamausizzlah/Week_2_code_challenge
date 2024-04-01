// Write a function that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(str) {
    return str.split('')
    .map(str => str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase())
    .join('')
  }
  
  console.log(swapCase('The Quick Brown Fox'));