const texto = 'a   b'


console.log(texto.match(/a   b/gi))
console.log(texto.match(/a\s\s\sb/gi))
console.log(texto.match(/a\s{3}b/gi))
console.log(texto.match(/a\ {3}b/gi))
console.log(texto.match(/a\s+b/gi))