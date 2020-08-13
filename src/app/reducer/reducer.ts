import { createReducer, on } from '@ngrx/store';
import { GetProducts, DeleteProduct, AddProduct, UpdateProduct, DecreaseProduct } from './actions';
import { Product } from "../models/product";

interface BasketState {
    products: Product[];
}

const initialAppState: BasketState = {
    products: []
};

const BasketReducer = createReducer(
    initialAppState,
    on(GetProducts, (state: BasketState, { products }) => ({
        ...state,
        products
    })),
    on(AddProduct, (state: BasketState, { product }) => (
        {
            ...state,
            products: state.products.concat(product)
        }
    )),
    on(UpdateProduct, (state: BasketState, { product }) => (
        {
            ...state,
            products: state.products.map(p => p.id !== product.id ? p : product)
        }
    )),
    on(DeleteProduct, (state: BasketState, { id }) => ({
        ...state,
        products: state.products.filter(p => p.id !== id)
    })),
    on(DecreaseProduct, (state: BasketState, { product }) => (
        {
        ...state,
        products: decrease(state.products,product)
    }))
    
);

function decrease(products : Product[],product : Product) : Product[]{
    const list : Product[] = [];
    const index : number = products.indexOf(products.find(f => f.id == product.id));
    for (let i = 0; i < products.length; i++) {
        if (i !== index) {
            list.push(products[i]);
        }
    }
    return list;
}

export interface AppState {
    product: BasketState;
}

export const AppReducers = {
    product: BasketReducer
};