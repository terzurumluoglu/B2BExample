import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product';

export const GetProducts = createAction(
    'Get Products',
    props<{ products: Product[] }>()
);

export const AddProduct = createAction('Add Product', props<{ product: Product }>());

export const DeleteProduct = createAction('Delete Product', props<{ id: number }>());

export const UpdateProduct = createAction('Update Product', props<{ product: Product }>());

export const DecreaseProduct = createAction('Decrease Product', props<{ product: Product }>());