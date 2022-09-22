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
const Multiplicar = [15,5,4,52,2,9,52].map(x => x * 2);

const Mul =(callbackFuntion,x) => {
    const M2 = callbackFuntion;
    console.log(M2); 
}
Mul("El resultado de multiplicar todos los valores * 2 es: " + Multiplicar); 
/*-----------------------------------------------------------------------------------*/

/*Ejercicio # 3*/
const NumerosPares  =[1,8,4,6,7,5,9,88,44,10,2,3,13].filter(numero => numero%2 ==0);
 
const Mostrar = (callbackFunction, numero) => {
    const NumeroPar = callbackFunction;
    console.log('Números Pares: ' + NumeroPar);
}
Mostrar(NumerosPares);
/*-----------------------------------------------------------------------------------*/
