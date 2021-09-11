const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) //nao define um range
console.log(texto.match(/[A-z]/g)) //intervalos usam a ordem da tabela unicode

//tem que respeitar a ordem da tabela UNICODE

console.log(texto.match(/[a-Z]/g)) //Não é um intervalo valido, porque não segue a tabela unicode