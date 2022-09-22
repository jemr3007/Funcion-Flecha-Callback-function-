/*Ejercicio # 1*/
const number = [8,5,20,40,9,6,4,2,7];
const mayor = Math.max(...number);

const Mayor = (callbackFunction, num) => {
    n = num;
    first_m = callbackFunction
    if (n > first_m) {
        console.log(`the oldest is ${n}`);
    }
    else if(n < first_m){
        console.log(`the oldest is ${primermayor}`);
    }
}
Mayor(mayor, 50);
/*-----------------------------------------------------------------------------------*/

/*Ejercicio # 2*/
const edad = [10,8,15,54,21,29,26];
const sumaEdades = edad.reduce((a,item) => {
 return a = a + item;
})

const average = (callbackFunction, e) => {
    prom = (callbackFunction / edad.length)
    console.log("the average is: " + prom);
}
average(sumaEdades, edad);
/*-----------------------------------------------------------------------------------*/

/*Ejercicio # 3*/
const NumerosPares  =[1,8,4,6,7,5,9,88,44,10,2,3,13].filter(numero => numero%2 ==0);
 
const Mostrar = (callbackFunction, numero) => {
    const NumeroPar = callbackFunction;
    console.log('Números Pares: ' + NumeroPar);
}
Mostrar(NumerosPares);
/*-----------------------------------------------------------------------------------*/
