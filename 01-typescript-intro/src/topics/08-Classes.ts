export class Person{
    //public name: string;
    //private address: string;

    constructor(
        public name:string,
        private address: string = 'No Address'
    ){}
}

const iroman = new Person('Iroman','NewYork');
console.log(iroman)