let askQuestion = require('./askQuestion');

//Exercicio 3
(async() => {
    let range = await askQuestion("Digite um numero maximo para o range: ");
    for(let i = 2; i <= range; i++){
        let isPrimo = true;
        for(let j = 2; j < i; j++){
            if(i % j == 0){
                isPrimo = false;
                break;
            }
        }
        if(isPrimo){
            console.log("Numero primo: " + i);
        }
    }
})();