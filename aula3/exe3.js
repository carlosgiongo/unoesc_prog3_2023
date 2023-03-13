let askQuestion = require('./askQuestion');

//Exercicio 3
(async() => {
    let salario_bruto = await askQuestion("Digite seu salário bruto: ");
    let ir = salario_bruto * 0.11;
    let inss = salario_bruto * 0.08;
    let sindicato = salario_bruto * 0.05;
    let salario_liquido = salario_bruto - ir - inss - sindicato;
    console.log('Salário Bruto: ' + salario_bruto);
    console.log('IR: ' + ir);
    console.log('INSS: ' + inss);
    console.log('Sindicato: ' + sindicato);
    console.log('Salário Líquido: ' + salario_liquido);
})();