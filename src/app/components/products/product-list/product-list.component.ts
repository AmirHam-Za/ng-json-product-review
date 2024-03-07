import { Component } from '@angular/core';
import {  Router } from '@angular/router';
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
    this._productService.getAllProductsAsync().subscribe((res: Product[]) => {
      this.products = res
      console.log(res)
    })
  }

  deleteProductById(id: string) {
    this._productService.deleteProductByIdAsync(id).subscribe(() => {
      this.getProducts()
    })
  }

  editProductById(userId: string): void {
    this._router.navigate(['/products', userId, 'edit']);
  }
   
}
