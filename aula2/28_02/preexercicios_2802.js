//************** Pre exercicios ***************************/

/*********************************************/
let anon = function (a, b) { return a + b; };
//console.log([1,2,3,4].filter(function(value){ return value % 2 === 0; }));
//console.log(anon(1,2));
/*********************************************/

/*********************************************/
let anon_arrow = (a, b) => a + b;
//console.log(anon_arrow(1,2));
let anon_arrow2 = a => a;
//console.log([1,2,3,4].filter(value => value % 2 === 0));
/*********************************************/

/*********************************************/
const points = [40, 100, 3, 1, 5, 25, 10]
//console.log(points.sort((a, b) => a - b))
/*********************************************/

/*********************************************/
//console.log("fired first")
//console.log("fired second")

//setTimeout(() => {
    //console.log("fired third")
//}, 2000)

//console.log("fired last")
/*********************************************/

/***************************************/
const getData = () => {
    return new Promise((resolve, reject) => {
        if(Math.random() >= 0.5){
            console.log("Aceito!")
            resolve()
        } else {
            console.log("Rejeitado...")
            reject()
        }
    })
}
//getData()
/*********************************************/

/*********************************************/
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)   
}).then((result) => {
    return result * 2
}).then((result) => {
    return result * 2
}).then((result) => {
    console.log(result)
})
/*********************************************/

