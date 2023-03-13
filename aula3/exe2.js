let askQuestion = require('./askQuestion');

//Exercicio 2
(async() => {
    const nome = await askQuestion("Digite seu nome: ");
    const anos = await askQuestion("Digite sua idade: ");
    let dias = anos * 365;
    console.log(nome + ', VOCÊ JÁ VIVEU ' + dias + ' DIAS');
})();