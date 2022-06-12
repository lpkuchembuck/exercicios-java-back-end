
// Parâmetros de funções

/*function soma(num1,num2){
    return num1+num2;
}

console.log (soma(2,2));
console.log (soma(5,2));
console.log (soma(7,10));
console.log (soma(-500,300));
console.log (soma(17,22));
console.log (soma(2,157));

//ordem dos parâmetos

function nomeIdade(nome,idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Luiz",36));
console.log(nomeIdade(36,"Luiz"));
*/

function soma(num1,num2){
    return num1+num2;
}

function multiplica(num1 = 1,num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(2,2),8));
console.log(multiplica(soma(2,2),soma(3,7)));
console.log(multiplica(soma(2,2)));

