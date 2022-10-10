/*
function spinWords(string){
  if(string.length >= 5) {
    let separaString = string.split('').reverse()
    console.log(separaString)
    return separaString
  } else {
    separaString = string
    return
  }

}
console.log(spinWords('Arroz Branco e Gostoso Casa Ave motocicleta av'))

/*
function testePalavra(string){
  let transformaString = string.split(',')
  for(let i = 0; i > string.length; i++){
    let reverse = transformaString[i].split('').reverse().join();
    let transformaString = reverse
    console.log(transformaString)
    console.log(reverse)
  }

  return transformaString
}
console.log(testePalavra('Casa,bb'))
*/

function reverseWords(string) {
  let separaPalavra = string.split(' ')
  let aa = separaPalavra[0,1].split('').reverse()
  let novaPal = aa.join('')
  console.log(novaPal)

  for(let i = 0; i <= 5; i++){
    let reverse = separaPalavra[i].split('').reverse().join('')

    
    console.log(separaPalavra[i].split('').reverse().join(''))
    console.log(reverse)
    return reverse
  }


/*
  let reversePw = string.split('').reverse().join('')
  let novaPalavra = reversePw
  return novaWord*/
}

console.log(reverseWords('Carro Uva'))
