/* 
    1) Observe o trecho de código abaixo:

    int INDICE = 13, SOMA = 0, K = 0;

    enquanto K < INDICE faça

    {

    K = K + 1;

    SOMA = SOMA + K;

    }

    imprimir(SOMA);

    Ao final do processamento, qual será o valor da variável SOMA?
*/

let indice = 13, soma = 0, k = 0;

while (k < indice) {
    k++;
    soma += k;
}

console.log(soma);

/* 
    k = 1: soma += 1, soma = 1
    k = 2: soma += 2, soma = 3
    k = 3: soma += 3, soma = 6
    k = 4: soma += 4, soma = 10
    k = 5: soma += 5, soma = 15
    k = 6: soma += 6, soma = 21
    k = 7: soma += 7, soma = 28
    k = 8: soma += 8, soma = 36
    k = 9: soma += 9, soma = 45
    k = 10: soma += 10, soma = 55
    k = 11: soma += 11, soma = 66
    k = 12: soma += 12, soma = 78
    k = 13: soma += 13, soma = 91

    R: O valor da variável soma é igual a 91
*/