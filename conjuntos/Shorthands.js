const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(texto.match(/\d/g)) //números[0-9]
console.log(texto.match(/\D/g)) //não números[^0-9]
console.log(texto.match(/\w/g)) //Caracteres [a-zA-Z0-9]
console.log(texto.match(/\W/g)) //Caracteres [^a-zA-Z0-9]
console.log(texto.match(/\s/g)) //espaço em branco [\t\n\r\f]
console.log(texto.match(/\S/g)) //Não espaço em branco [^\t\n\r\f]