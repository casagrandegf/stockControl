import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  public products;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProducts()
      .then((products) => {
        this.products = products;
      })
      .catch((err) => {
        throw err;
      });
  }

  subtractProduct(product) {
    if (product.prod_quantity > 0) {
      product.prod_quantity--;
    }

    this.productService.updateProduct(product)
      .then((response) => {
        this.listProducts();
      })
      .catch((err) => {
        throw err;
      });
  }

  addProduct(product) {
    product.prod_quantity++;

    this.productService.updateProduct(product)
      .then((response) => {
        this.listProducts();
      })
      .catch((err) => {
        throw err;
      })
  }
}
