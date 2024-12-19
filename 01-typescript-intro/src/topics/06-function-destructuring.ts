interface Product {
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
function taxCalculation( options: TaxCalculationOptions) : number[]{
    let total = 0;
    options.products.forEach( product => {
        //total = total + product.price;
        total += product.price;
    });
    return[total, total * options.tax]
}

const shoppingCart = [phone, table];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log('Total', result[0] );
console.log('Tax', result[1])



// creamos constantes / es una variable
// En TypeScript, aunque las constantes, objetos y funciones pueden parecer conceptos similares porque todos pueden almacenarse en variables








export {};
