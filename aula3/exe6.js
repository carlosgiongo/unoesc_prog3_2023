var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('exe6.txt')
});

//Exercicio 6
let gordo = null;
let cod_gordo = null;

let magro = null;
let cod_magro = null;

let alto = null;
let cod_alto = null;

let baixo = null;
let cod_baixo = null;

let media_altura = 0;
let media_peso = 0;
let linhas = 0;
lineReader.on('line', function (line) {
    let valores = line.split(',');

    if(valores[0] == 0){
        console.log('O mais alto: ' + alto +' - Código: ' + cod_alto);
        console.log('O mais baixo: ' + baixo +' - Código: ' + cod_baixo);
        console.log('O mais gordo: ' + gordo +' - Código: ' + cod_gordo);
        console.log('O mais magro: ' + magro +' - Código: ' + cod_magro);
        console.log('A média de altura: ' + (media_altura/linhas).toFixed(2));
        console.log('A média de peso: ' + (media_peso/linhas).toFixed(2));
        return;
    } else {
        console.log('linha: ', valores);
        if(parseInt(valores[1]) > alto || alto == null){
            alto = parseInt(valores[1])
            cod_alto = parseInt(valores[0])
        }

        if(parseInt(valores[1]) < baixo || baixo == null){
            baixo = parseInt(valores[1])
            cod_baixo = parseInt(valores[0])
        }

        if(parseInt(valores[2]) > gordo || gordo == null){	
            gordo = parseInt(valores[2])
            cod_gordo = parseInt(valores[0])
        }

        if(parseInt(valores[2]) < magro || magro == null){
            magro = parseInt(valores[2])
            cod_magro = parseInt(valores[0])
        }

        media_altura += parseInt(valores[1]);
        media_peso += parseInt(valores[2]);
        linhas++;
    }
});