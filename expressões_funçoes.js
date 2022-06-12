
//declaração de função
/*function minhafuncao(param){
    // bloco de código
}

minhafuncao(param);
*/

// expressão de função

//const soma = function(num1,num2){return num1 + num2}
//console.log(soma(1,1))

// DIFERENÇAS PRINCIPAIS :HOISTING
// funções e var são listadas no topo do arquivo

console.log(apresentar());

function apresentar(){
    return "olá";
}

console.log(soma(2,2));
const soma = function(num1,num2){return num1 + num2}


