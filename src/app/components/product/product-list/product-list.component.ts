import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@interfaces/interfaces';
import { ProductService } from '@services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = []
  userIdFromRoute: string = ''

  constructor(
    private _router: Router,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts() {
    this._productService.getAllProductsAsync().subscribe(
      {
        next: (res: Product[]) => {
          console.log(res)
          this.products = res
        },
        error: (err: any) => {
          if (err.status == 404) {
            console.log(`Error occured: ${err.statusText}-${err.status}`)
          }
        }
      },
    )
  }

  deleteProductById(id: string) {
    this._productService.deleteProductByIdAsync(id).subscribe(
      {
        next: () => { },

        error: (err: any) => {
          console.log(err)
          if (err.status == 404) {
            alert(`Error occured: ${err.statusText}-${err.status}`)
          }
        }
      },)
  }

  editProductById(userId: string): void {
    this._router.navigate(['/products', userId, 'edit']);
  }
}
