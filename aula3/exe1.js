//Exercicio 1 
let input = require('fs').readFileSync('exe1.txt', 'utf8');
let values = input.split(',');
let a = parseInt(values.shift());
let b = parseInt(values.shift());
let c = parseInt(values.shift());
let delta = (b * b) - (4 * a * c);

if(delta < 0){
    console.log('Delta é negativo');
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log('x1 = ' + x1.toFixed(2));
    console.log('x2 = ' + x2.toFixed(2));
}