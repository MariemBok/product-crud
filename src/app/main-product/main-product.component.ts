import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css'],
})
export class MainProductComponent implements OnInit {
  isForm: Boolean = false;
  buttonString: String = 'Add New Product';

  constructor() {}

  ngOnInit(): void {}
  changePage() {
    this.isForm = !this.isForm;
    if (this.isForm) {
      this.buttonString = 'Go Back To List';
    } else {
      this.buttonString = 'Add New Product';
    }
  }
}
