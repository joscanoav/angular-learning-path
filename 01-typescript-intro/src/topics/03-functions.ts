// undefined no regresa nada. / void no retorna
// Typescript tiene restricciones siempre se debe nombrar a las variables el tipo
function addNumbers(a: number, b:number){
    return a + b;
}

//funciones de flecha
// forzar a string `` o to string
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}
// funcion
function multiply( firstNumber:number, secondNumber?: number, base:number=2){
    return firstNumber * base;

}

const result:number = addNumbers(1, 2);
const result2:string = addNumbersArrow(1, 2);
const multiplyResult:number = multiply(5);
// se pone las llaves para poder ver un mayor detalle
console.log({result,result2,multiplyResult})


export{};