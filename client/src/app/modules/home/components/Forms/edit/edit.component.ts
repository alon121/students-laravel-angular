import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';

import {Router} from "@angular/router";
import { ApiService } from 'src/app/core/http/api.service';
import { Student } from 'src/app/shared/models/student/student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

   invalidLogin: boolean = false;
   constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }
   editForm = new FormGroup({
    fullName: new FormControl(),
     class: new FormControl(),
     grade: new FormControl()
   });
   onSubmit() {
     if (this.editForm.invalid) {
       return;
     }
     const student:Student = {
       full_name: this.editForm.controls.fullName.value,
       class: this.editForm.controls.class.value,
       grade: this.editForm.controls.grade.value,
      
     }
     this.api.addStudent(student).subscribe(data => {
      console.log(data.status);
     }, err => {
       console.log(err.error)
     });
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


