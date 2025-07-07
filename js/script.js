// dichiaro variabile parola inserita dall'utente
const word = prompt(`inserisci una parola`)
// definisco funzione per capire se la parola è palindroma 
palindrome(word)

function palindrome (text){
  let splitWord = text.split("");
  let reversedWord = splitWord.reverse();
  let jointWord = reversedWord.join("");
  if(text === jointWord){
    console.log(`palindroma`)
  }
  else{
    console.log(`NON palindroma`)
  }
  
}
// divido la parola in lettere, (split) inverto l'ordine delle lettere, (reverse) ricompongo la parola (Join)

