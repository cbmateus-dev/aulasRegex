const texto = 'Bom\ndia'
console.log(texto.match(/./gi))

const texto1 = 'Bom\tdia'
console.log(texto1.match(/./gi))

const texto2 = 'Bom\tdia'
console.log(texto2.match(/.../gi))

const texto3 = 'Bom\ndia'
console.log(texto3.match(/..../gis))

const texto4 = 'Bom\tdia'
console.log(texto4.match(/..../gi))