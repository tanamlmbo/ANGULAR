import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products: Product[] = [
    { name: 'Product 1', price: 100, category: 'Category 1' },
    { name: 'Product 2', price: 200, category: 'Category 2' },
    { name: 'Product 3', price: 300, category: 'Category 3' },
    {  name: 'Product 4', price: 400, category: 'Category 4' }
  ];
  getProducts() {
    return this.products;
  }
  addProduct(product: Product) {
    this.products.push(product);
  }
  deleteProduct(id: number): void {
    this.products.splice(id, 1);
  }
  getProductById(id: number): Product {
    return this.products[id];
  }
  updateProduct(id: number, updatedProduct: Product) {
    this.products[id] = updatedProduct;
  }
}