const fetch = require("node-fetch");

//Conf
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = msg => {
    return new Promise(resolve => {
      readline.question(msg, userRes => {
        resolve(userRes);
      });
    });
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//Exercicio 1
const calculadora = (operator, values, callback) => {
    if(operator === '+') {
        callback(values[0] + values[1]);
    }

    if(operator === '-') {
        callback(values[0] - values[1]);
    }

    if(operator === '*') {
        callback(values[0] * values[1]);
    }

    if(operator === '/') {
        callback(values[0] / values[1]);
    }

    if(operator === '**') {
        return callback(values[0] ** values[1]);
    }
}

//Exercicio 2
async function calcular(){
    let x = await readLineAsync('Digite o valor de x: ');
    calculadora('*', [3, x], async (result_1) => {
        x = await readLineAsync('Digite novamente o valor de x: ');
        calculadora('*', [2,x], (result_2) => {
            calculadora('**', [result_1, 2], (result_3) => {
                calculadora('-', [result_2, 5], (result_4) => {
                    calculadora('+', [result_3, result_4], (result_5) => {
                        console.log("Resultado: " + result_5)
                    })
                })
            })
        })
    });
}
//calcular();

//Exercicio 3
(async function(){
    async function fetchGatos(){
        let gatos = new Promise((resolve, reject) => {
            fetch('https://catfact.ninja/facts')
            .then(response => response.json())
            .then(data => resolve(data.data))
            .catch(error => reject(error))
        });
        return gatos;
    }
    console.log(await fetchGatos());    
})();

//Exercicio 4
(async function(){
    let filmes = await fetch('https://swapi.dev/api/films').then(response => response.json());
    filmes.length = 5;
    filmes.results.forEach((filme) => {
        console.log(filme.title);
    })
})();
