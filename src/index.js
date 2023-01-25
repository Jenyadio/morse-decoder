const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arr = [];
  let exprArr = expr.split("");

  while(exprArr.length) {
    arr.push(exprArr.splice(-10));
  }

  arr.reverse();

  nextArr:
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < 10; j++) {
      if(arr[i][0] === '0') {
        arr[i].splice(0, 1);
      } else {
        continue nextArr;
      }
    } 
  }

  let tens = /10/g;
  let eleven = /11/g;
  let stars = /\*{10}/g;
  
  arr = arr.map(item => item.join("")).map((item) => item.replace(eleven, '-').replace(tens, '.').replace(stars, ' '));
  
  let finalArr = [];
  
  nextStr:
  for(let i = 0; i < arr.length; i++) {
    for(let key in MORSE_TABLE) {
      if (arr[i] === key) {
        finalArr.push(MORSE_TABLE[key]);
        continue nextStr;
      } else if (arr[i] == " ") {
        finalArr.push(" ");
        continue nextStr;
      }
    }
  }
  
  return finalArr.join("");
}

module.exports = {
    decode
}