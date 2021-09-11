const texto = '1,2,3,4,5,6,a.b c!d?e[f'

//para definir uma calsse (ou conjunto) de caracteres usa []

const regexPares = /[02468]/g
const regexImpares =/[135]/g

console.log(texto.match(regexPares))
console.log(texto.match(regexImpares))

const texto2 = 'João não vai passear na moto.'

const regexComeSemAcento =/n[aã]+/gi
console.log(texto2.match(regexComeSemAcento))
