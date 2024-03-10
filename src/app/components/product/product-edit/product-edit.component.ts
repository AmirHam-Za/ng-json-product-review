import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '@services/product/product.service';

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

  updateProduct(): void {
    this._productService.updateProductAsync(this.product).subscribe(() => {
      this._router.navigate(['/products']);
    }
    );
  }
}
