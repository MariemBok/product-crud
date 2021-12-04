import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Form } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
})
export class FormProductComponent implements OnInit {
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
  addProduct(productForm: FormGroup) {}
}
