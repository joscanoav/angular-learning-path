export class Person{
    public name: string;
    private address: string;

    constructor(){
        this.name = 'Cristian';
        this.address = 'Guadalajara'
    }
}

const iroman = new Person();

console.log(iroman.address)