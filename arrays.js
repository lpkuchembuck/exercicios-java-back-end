//INTRODUÇÃO AO ARRAYS

/* medias 10, 6.5, 8, 7.5

let nota1=10
let nota2=6.5
let nota3=8
let nota4=7.5

let media = (nota1+nota2+nota3+nota4)/4

console.log(media);


const notas = [10,6.5,8,7.5]

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media)

// ADICIONANDO ELEMENTOS

const notas = [10,6,8]
notas.push(7,5)
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length
console.log(media)*/

//o dado inserido pelo comando .push sempre será inserido no final do array
//posso adicionar quantos dados eu quiser, lembrando que a ordem em que ele será inserido é a mesma que foi digitado

//Deletando elementos do array
const notasAtualizadas = [10,6,8,7]
notasAtualizadas.pop()
console.log(notasAtualizadas)

let medias = (notasAtualizadas[0] + notasAtualizadas[1] + notasAtualizadas[2])/notasAtualizadas.length
console.log(medias)


