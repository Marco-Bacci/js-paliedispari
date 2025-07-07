// dichiaro variabile parola inserita dall'utente
const word = prompt(`inserisci una parola`)
// definisco funzione per capire se la parola è palindroma 
palindrome(word)

if(palindrome(word)===true){
console.log("E' palindroma")
}
else{
  console.log(`no palindroma.`)
}



function palindrome (text){
  let splitWord = text.split("");
  let reversedWord = splitWord.reverse();
  let jointWord = reversedWord.join("");

  // if(text === jointWord){
  //   console.log(`palindroma`)
  // }
  // else{
  //   console.log(`NON palindroma`)
  // }
  return text === jointWord
}


// divido la parola in lettere, (split) inverto l'ordine delle lettere, (reverse) ricompongo la parola (Join)


//2 uso risultato palindrome(word) nell'if per decidere cosa stampare in console