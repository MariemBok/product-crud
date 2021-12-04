import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css'],
})
export class MainProductComponent implements OnInit {
  isForm: Boolean = false;
  buttonString: String = 'Add New Product';
  listProduct: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getListProduct()
      .subscribe((data: Product[]) => (this.listProduct = data));
  }
  changePage() {
    this.isForm = !this.isForm;
    if (this.isForm) {
      this.buttonString = 'Go Back To List';
    } else {
      this.buttonString = 'Add New Product';
    }
  }
  deleteProduct(p: Product) {}
  updateProduct(p: Product) {}
}
