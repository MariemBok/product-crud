import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Form } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css'],
})
export class MainProductComponent implements OnInit {
  isForm: Boolean = false;
  buttonString: String = 'Add New Product';
  productForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      photo: new FormControl('dryfruit.jpg', [Validators.required]),
    });
  }
  changePage() {
    this.isForm = !this.isForm;
    if (this.isForm) {
      this.buttonString = 'Go Back To List';
    } else {
      this.buttonString = 'Add New Product';
    }
  }
}
