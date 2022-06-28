//INTRODUÇÃO AO ARRAYS

//medias 10, 6.5, 8, 7.5

let nota1=10
let nota2=6.5
let nota3=8
let nota4=7.5

let media1 = (nota1+nota2+nota3+nota4)/4

console.log(media1);


const notas = [10,6.5,8,7.5]

let media2 = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media2)

// ADICIONANDO ELEMENTOS

const notas2 = [10,6,8]
notas2.push(7,5)
console.log(notas2)

let media3 = (notas2[0] + notas2[1] + notas2[2] + notas2[3])/notas2.length
console.log(media3)

//o dado inserido pelo comando .push sempre será inserido no final do array
//posso adicionar quantos dados eu quiser, lembrando que a ordem em que ele será inserido é a mesma que foi digitado

//Deletando elementos do array
const notasAtualizadas = [10,6,8,7]
notasAtualizadas.pop()
console.log(notasAtualizadas)

let medias = (notasAtualizadas[0] + notasAtualizadas[1] + notasAtualizadas[2])/notasAtualizadas.length
console.log(medias)


// Desafio sala dividida .slice

const nomes = ['João', 'Juliana', 'Ana', 'Marjorie', 'Caio', 'Lara', 'Guilherme', 'Aline', 'Fabiana',
'Andre', 'Carlos', 'Paulo', 'Bia', 'Viviam', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const sala1 = nomes.slice(0,nomes.length/2)
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)

//Desafio - Atualizando elementos

const listaDeChamada = ['João','Ana','Caio','Guilherme', 'Aline', 'Fabiana']

// Ana e Caio sairam da escola e o Rodrigo entrou

listaDeChamada.splice(1,2, 'Rodrigo')
console.log(`Lista de Chamada: ${listaDeChamada}`)

// Desafio Juntando duas salas

const salaPyton = ['Melissa', 'Helena', 'Rodrigo']
const salaJavaScript = ['Juliana', 'Leonardo', 'Raquel']

const salasUnificadas = salaPyton.concat(salaJavaScript)

console.log(salasUnificadas)

// Desafio Lista com 2 dimensões

const alunos = ['João','Ana','Caio','Guilherme']
const mediasDosAlunos = [10,7,9,6]

let listadeNotaseAlunos = [alunos,mediasDosAlunos]

console.log(`${listadeNotaseAlunos[0][0]}, sua media é ${listadeNotaseAlunos[1][0]}`)




