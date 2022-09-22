/*Ejercicio # 1*/
console.log("---------------------Ejercicio # 1---------------------------------");
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
console.log("---------------------Ejercicio # 2---------------------------------");
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
console.log("---------------------Ejercicio # 3---------------------------------");
const Modify = (array, callbackFunction) => {
    array.push('Tiger');
    console.log(array)
    callbackFunction(array);
}

const Names = ['ostrich', 'horse','crocodile','falcon','dog','lion'];

Modify(Names, function(array){
    console.log(`the arrangement has been modified now it is ${array.length} items`);
})
console.log("-------------------------------------------------------------------");
/*-----------------------------------------------------------------------------------*/
