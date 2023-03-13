let pop_a = 80000;
let pop_b = 200000;
let anos = 0;
while(pop_a < pop_b){
    pop_a += pop_a * 0.03;
    pop_b += pop_b * 0.015;
    anos++;
}
console.log('Serão necessários ' + anos + ' anos para que a população A ultrapasse a população B');