import { Component } from '@angular/core';
import { Product } from '../service/product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  newProduct: Product = { name: '', price: 0, category: '' }

  constructor(private productService: ProductService,
    private router: Router
  ) {}
  

  addProduct() {
    this.productService.addProduct({ ...this.newProduct });
    this.newProduct = { name: '', price: 0, category: '' };
    this.router.navigate(['/home']); 
  }
}
