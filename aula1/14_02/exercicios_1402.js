//Para o exercicio 4
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let question = function(q) {
    return new Promise( (res, rej) => {
        readline.question( q, answer => {
            res(answer);
        })
    });
};


//Exercicio 1
function calcFatorial(numero){
    if(numero == 0){
        return 1;
    }
    return numero * calcFatorial(numero - 1);
}

//Exercicio 2
function tipoTriangulo(a, b, c){
    if(a == b && b == c){
        return 'Equilatero';
    }
    
    else if(a == b || b == c || a == c){
        return 'Isosceles';
    }
    
    else{
        return 'Escaleno';
    }
}

//Funcao que me mostra a quantia de numeros primos que eu passar
function primoAteNumero(numero){
    let primos = [];
    
    for(let i = 2; i <= numero; i++){
        let primo = true;
        
        for(let j = 2; j < i; j++){
            if(i % j == 0){
                primo = false;
                break;
            }
        }

        if(primo){
            primos.push(i);
        }

    }

    return primos;
}

//Exercicio 4
async function getDados(){
    let maior = {sexo: '', altura: 0};
    let homens = 0;
    let mulheres = 0;

    for(let i = 0; i < 5; i++){
        const altura = parseInt(await question('Digite a altura (em centimetros): '));
        const sexo = await question('Digite o sexo (M ou F): ');

        if(altura > maior.altura){
            maior.altura = altura;
            maior.sexo = sexo;
        }

        if(sexo == 'M'){
            homens++;
        }

        if(sexo == 'F'){
            mulheres++;
        }
    }

    console.log(`A maior altura é ${maior.altura}cm e o sexo é ${maior.sexo == 'M' ? 'Masculino' : 'Feminino'}`);
    console.log('A quantidade de homens é: ' + homens);
    console.log('A quantidade de mulheres é: ' + mulheres);

    return true;
}

console.log(primoAteNumero(4))