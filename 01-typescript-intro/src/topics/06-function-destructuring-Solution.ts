export interface Product {
    description: string;
    price: number;
};

// Creamos el objeto phone e implementamos la interface Product
const phone: Product={
    description: "Nokia A1",
    price: 150.0
}

const table: Product ={
    description: "iPad Air",
    price: 250.0
};

// es un objeto que va a tener el tax y tener el arreglo de productos
interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

// creamos la funcion
//function taxCalculation( options: TaxCalculationOptions) : [number,number]{
//function taxCalculation( {tax, products}: TaxCalculationOptions) : [number,number]{
  export function taxCalculation( options: TaxCalculationOptions) : [number,number]{
    const {tax, products} = options;
    let total = 0;
    products.forEach( ({price}) => {
        //total = total + product.price;
        total += price;
    });
    return[total, total * tax]
}

const shoppingCart = [phone, table];
const tax = 0.15;

const [total, TaxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log('Total', total );
console.log('Tax', TaxTotal)

// creamos constantes / es una variable
// En TypeScript, aunque las constantes, objetos y funciones pueden parecer conceptos similares porque todos pueden almacenarse en variables


