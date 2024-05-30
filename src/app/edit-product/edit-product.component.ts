import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  form!: FormGroup;
  productId!: number;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!; //exclamation marks  = not null or undefined the + means that whatever we get here must be a number.
    const product = this.productService.getProductById(this.productId);  // fetch the producr with the given id and the retrieved product will be stored in product since its a variable
    this.form = this.fb.group({
      name: [product.name, Validators.required],
      price: [product.price, [Validators.required, Validators.min(0)]],
      category: [product.category, Validators.required]
    });
  }

  
  saveProduct(): void {
    if (this.form.valid) {
      this.productService.updateProduct(this.productId, this.form.value);
      this.router.navigate(['/home']);
    }
  }
}
