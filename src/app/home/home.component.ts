import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../service/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    
    this.products = this.productService.getProducts();
  }
  deleteProduct(index: number): void {
    this.productService.deleteProduct(index);
    this.products = this.productService.getProducts();
  }
}

