function capitalizeWords(string){
  let splitWords = string.split(' ')
  console.log(splitWords)
  for(i in splitWords){
    splitWords = splitWords[i].toUpperCase()
    console.log(splitWords)
  }
}

console.log(capitalizeWords('oi bom dia'))