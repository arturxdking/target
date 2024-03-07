/* 
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE:

    Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

const verificaFibonacci = (numero) => {

    let a = 0, b = 1, c = a + b;
    
    if (numero === 0 || numero === 1) {
        console.log("O número informado pertence à sequência de Fibonacci.");
        return;
    }

    while (c <= numero) {
        if (c === numero) {
            console.log("O número informado pertence à sequência de Fibonacci.");
            return;
        }
        a = b;
        b = c;
        c = a + b;
    }

    console.log("O número informado NÃO pertence à sequência de Fibonacci.");
}

let numeroInformado = 8;

verificaFibonacci(parseInt(numeroInformado));