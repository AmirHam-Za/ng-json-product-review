import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@interfaces/interfaces';
import { ProductService } from '@services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  products: Product={
    id: '',
    title: '',
    brand: '',
    priceInPaisa:0 ,
    discountPercentage: 0,
    category_id: '',
    category: '',
  }

//  currentPrice:number= 0
 previousPriceInTaka:number= 0
 currentPriceInTaka:number= 0

  constructor(
    private route: ActivatedRoute,
    private _productService: ProductService,
    ){}

  ngOnInit(): void {
   const productIdFromRoute = String(this.route.snapshot.paramMap.get('id'))  

   this._productService.getProductByIdAsync(productIdFromRoute).subscribe((res:Product) => {
    this.products = res
    
    this.previousPriceInTaka = this._productService.convertPriceInTaka(this.products.priceInPaisa)

  })
}

}
