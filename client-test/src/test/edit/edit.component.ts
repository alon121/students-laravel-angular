import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import {Router} from "@angular/router";



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
  
})
export class EditComponent {

   invalidLogin: boolean = false;
   constructor(private formBuilder: FormBuilder, private router: Router) { }
   editForm = new FormGroup({
    fullName: new FormControl(),
     class: new FormControl(),
     grade: new FormControl()
   });
   onSubmit() {
     if (this.editForm.invalid) {
       return;
     }
     const student = {
       full_name: this.editForm.controls.fullName.value,
       class: this.editForm.controls.class.value,
       grade: this.editForm.controls.grade.value,
      
     }

   }

   ngOnInit() {
     window.localStorage.removeItem('token');
     this.editForm = this.formBuilder.group({
      fullName: ['', Validators.compose([Validators.required])],
      class: ['', Validators.required],
      grade: ['', Validators.required],
     });
   }

}


