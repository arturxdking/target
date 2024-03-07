/* 
    5) Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:

    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

    b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const inverter = (str) => {

    let inversao = '';

    for (let i = str.length - 1; i >= 0; i--) {
           
        inversao += str[i];
    
    }

    return inversao;
}

let exemplo = 'Artur Vieira';
let resultado= inverter(exemplo);
console.log(resultado); 

// R: arieiV rutrA