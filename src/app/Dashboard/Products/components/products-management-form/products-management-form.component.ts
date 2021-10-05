import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Size } from 'src/app/Core/models';

@Component({
  selector: 'app-products-management-form',
  templateUrl: './products-management-form.component.html'
})
export class ProductsManagementFormComponent implements OnInit {
  productFg: FormGroup;
  sizeFg: FormGroup;
  sizes: Size[] = [
    { id: Math.random() + '', name: 'XS', archive: false, },
    { id: Math.random() + '', name: 'S', archive: false, },
    { id: Math.random() + '', name: 'M', archive: false, },
  ];

  constructor() {
    this.productFg = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      categoryId: new FormControl(null),
      price: new FormControl(null, [Validators.required]),
      shortDesc: new FormControl(null, [Validators.required]),
      lngDesc: new FormControl(null),
      stock: new FormControl(null, [Validators.required]),
      archive: new FormControl(false),
      imgUrl: new FormControl(null),
      size: new FormArray([]),
    });
    this.sizeFg = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      archive: new FormControl(false),
    });
  }

  ngOnInit(): void {
  }

  get productSizeFAry(): FormArray {
    return this.productFg.get('size') as FormArray;
  }

  createSize(): void {
    const newSize: Size = {
      id: Math.random() + '',
      ...this.sizeFg.value
    };
    this.sizes.push(newSize);
    this.sizeFg.reset({ archive: false });
  }

  addSizeToProduct(size: Size, checked: boolean): void {
    if (checked) {
      this.productSizeFAry.push(new FormGroup({
        id: new FormControl(size.id),
        name: new FormControl(size.name),
        archive: new FormControl(false),
      }));
    } else {
      const sizesAdded = (this.productSizeFAry.value as Size[]).map(s => s.id);
      const sizeToRemoveIdx = sizesAdded.indexOf(size.id);
      this.productSizeFAry.removeAt(sizeToRemoveIdx);
    }
  }

  handleSubmit(): void {
    console.log(this.productFg.value);
  }

}
