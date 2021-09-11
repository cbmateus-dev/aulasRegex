//No inicio...
//Um byte...(8bits) - 256 caracteres
//Simbolos, Pontuação, A-Z, a-z, 0-9

//Dois bytes...(16bits) - 65500+ caracateres
//+Simbolos, +Pontuação, A-Z, a-z, 0-9

//Unicode
//Quantidade de Bytes variavel - Expansivel
//Suporte mais de 1 mIlhão caracteres
//Atualmente tem mais 100.00 carcateres atribuidos
//https://unicode-table/pt/

const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/gi))
