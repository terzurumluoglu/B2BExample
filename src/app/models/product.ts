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
    private createProduct(id: number, name: string, description: string, price: number, quantity: number): Product {
        let product: Product = new Product(id, name, description, price, quantity);
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
            this._products.push(this.createProduct(i, name, description, price, 10));
        }
    }
}