


const isPangram= (str)=>{
//   return str.replace('!','').toLowerCase().split('').reverse().join('') == str
// let newSTR=  str.replace('!','').toLowerCase().split('').reverse().join('') 
// console.log(newSTR);
// I AM SO DUMB, thought it was a Palindrome 
const alphabets = 'abcdefghijklmnopqrstuvwxyz'
let newSet = new Set(str.toLowerCase().replace(/!|_/ ,''))
let strOrder = [...newSet].sort().join('').replace(' ','')
return strOrder==alphabets
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
