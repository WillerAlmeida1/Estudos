let arr = [[1,2],[4,5]]

let valores = '';
for(L in arr){
  for(C in arr){
    if(C < 1){
      valores += arr[L][C] + "\t \t"
    } else {
      valores += arr[L][C] + "\n"
    }
  }
}
console.log(valores)

//console.table(notas)