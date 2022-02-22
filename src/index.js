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
  let arr = []
  let ar1 = []
  for(let i=0;i<expr.length;i=i+10){
    arr.push(expr.slice(i,i+10))
  }
  arr.forEach(element => {
    let array = element.split('');
    let ar2 = []
    for(let i=0;i<array.length;i=i+2){
      ar2.push(element.slice(i,i+2))
    }
    ar1.push(ar2)}
  ); 
  arr.splice(0)
  ar1.forEach(element => {
  for(let elem in element){
  if(element[elem]=='00'){element[elem]=''}
  else if(element[elem]=='**'){element.splice(0,5,' ')}
  else if(element[elem]=='10'){ element[elem] = '.'}
  else if(element[elem]=='11'){element[elem]='-'}
  }

  arr.push(element.join('') )
  })
  ar1.splice(0)
  arr.forEach(element => {
  if(Object.getOwnPropertyNames(MORSE_TABLE).includes(element)){
  d = Object.getOwnPropertyNames(MORSE_TABLE).indexOf(element)
  element = Object.values(MORSE_TABLE)[d]
  }
  ar1.push(element)
  })
return ar1.join('')
}

module.exports = {
    decode
}