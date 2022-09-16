/*Ejercicio # 1*/
const edad = [10,8,15,54,21,29,26].filter(persona => persona >= 18);

const permitidos = (callbackFuntion,persona) =>{
    const Aceptados = callbackFuntion;
    console.log(Aceptados); 
}
permitidos('las personas mayores de 18 años que podran votar son: ' + edad); 
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