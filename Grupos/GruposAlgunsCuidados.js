const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(texto.match(/[(abc)]/gi)) //Não é um grupo
console.log(texto.match(/([abc])/gi)) //Isso é um grupo
console.log(texto.match(/(abc)/gi)) //Isso é um grupo