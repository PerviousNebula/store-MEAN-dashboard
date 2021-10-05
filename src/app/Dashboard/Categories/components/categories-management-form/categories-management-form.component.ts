import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories-management-form',
  templateUrl: './categories-management-form.component.html'
})
export class CategoriesManagementFormComponent implements OnInit {
  categoryFg: FormGroup;

  constructor() {
    this.categoryFg = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      archive: new FormControl(false, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    console.log(this.categoryFg.value);
  }

}
