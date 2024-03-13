import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@services/product/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  product: any = []
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,

  ) { }

  ngOnInit(): void {

    const productIdFromRoute = String(this._route.snapshot.paramMap.get('id'))
    console.log(productIdFromRoute)

    this._productService.getProductByIdAsync(productIdFromRoute).subscribe((res: any) => {
      this.product = res
      console.log(res)
    })
  }

  updateForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ])
  })

  get title() {
    return this.updateForm.get('title')
  }

  updateProduct(): void {
    this.product.title = this.title?.value;
    this._productService.updateProductAsync(this.product).subscribe(() => {
      this._router.navigate(['/products']);
    });
  }
}
