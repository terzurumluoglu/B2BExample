export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;

    constructor(id: number, name: string, description: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
}

export class ProductsList {
    private _products: Product[] = [];
    public createProduct(p : Product): Product {
        let product: Product = new Product(p.id, p.name, p.description, p.price, p.quantity);
        return product;
    }
    public getAllProducts(): Product[] {
        return this._products;
    }
    public getProduct(id: number): Product {
        return this._products.find(p => p.id == id);
    }
    constructor() {
        for (let i = 1; i <= 10; i++) {
            let price: number =  i*100;
            let name: string = 'Product ' + i.toString();
            let description: string = name + ' : Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
            const p : Product = {id : i,name : name,description : description,price:price,quantity:0};
            this._products.push(this.createProduct(p));
        }
    }
}