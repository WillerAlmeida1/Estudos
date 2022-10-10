function reverseWord(string){

  let splitWord = string.split(' ')

  for(let i = 0; i < splitWord.length; i++){

    if(splitWord[i].length >= 5){

      splitWord[i] = splitWord[i].split('').reverse().join('')
    
    }
    
  } 
  return splitWord.join(' ')
}


console.log(reverseWord('Meu deus eu finalmente consegui af'))