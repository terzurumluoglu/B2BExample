import { Product } from "../models/product";
import { of, Observable } from "rxjs";

let p1: Product = new Product(1, "Product 1", "Product 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 100, 0);
let p2: Product = new Product(2, "Product 2", "Product 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 200, 0);
let p3: Product = new Product(3, "Product 3", "Product 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 300, 0);
let p4: Product = new Product(4, "Product 4", "Product 4 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 400, 0);
let p5: Product = new Product(5, "Product 5", "Product 5 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 500, 0);
let p6: Product = new Product(6, "Product 6", "Product 6 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 600, 0);
let p7: Product = new Product(7, "Product 7", "Product 7 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 700, 0);
let p8: Product = new Product(8, "Product 8", "Product 8 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 800, 0);
let p9: Product = new Product(9, "Product 9", "Product 9 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 900, 0);
let p10: Product = new Product(10, "Product 10", "Product 10 : Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 1000, 0);

export const mockProducts: Product[] = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];
export const mockProductsRepeating: Product[] = [p1, p1, p2, p3, p4, p4, p4, p4, p9, p10];

export const mockProducts$: Observable<Product> = of(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);