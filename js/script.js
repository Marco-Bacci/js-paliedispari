// // dichiaro variabile parola inserita dall'utente
// const word = prompt(`inserisci una parola`)
// // definisco funzione per capire se la parola è palindroma 
// palindrome(word)

// // divido la parola in lettere, (split) inverto l'ordine delle lettere, (reverse) ricompongo la parola (Join)


// function palindrome (text){
//   let splitWord = text.split("");
//   let reversedWord = splitWord.reverse();
//   let jointWord = reversedWord.join("");
  
  
//   //2 uso risultato palindrome(word) nell'if per decidere cosa stampare in console
//   return text === jointWord
// }  

// if(palindrome(word)===true){
// console.log("E' palindroma")
// }
// else{
//   console.log(`no palindroma.`)
// }


// dichiaro variabile dchiedendo all'utente di scegliere tra pari e dispari
const oddOrEven = prompt("scegli tra `pari` e `dispari`")

function random(){
const userNum = parseInt(prompt("inserisci numero da 1 a 5"));
const pcNum = Math.floor(Math.random() * 5)+ 1;
console.log(`L'utente ha scelto ${userNum}, il pc ha scelto ${pcNum}`)
return userNum + pcNum
}







