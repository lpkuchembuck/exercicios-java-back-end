function apresentar(nome){
    return `meu nome é ${nome}`;
}

//Arrow Function

const apresentacaoArrow = nome => `meu nome é ${nome}`;
const soma = (num1,num2) => num1+num2;

//Arrow Function com mais de um alinha de instrução

const somanumerospequenos = (num1, num2) => {
    if (num1||num2 > 10){
        return "somente numeros de 1 a 9"
    } else {
        return num1+num2;
    }
}

console.log(somanumerospequenos(15,15));
console.log(somanumerospequenos(2,15));