import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';

import { Router } from "@angular/router";
import { ApiService } from 'src/app/core/http/api.service';
import { Student } from 'src/app/shared/models/student/student';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }
  addForm;

  onSubmit() {
    if (this.addForm.invalid) {
      return;
    }
    const student: Student = {
      Full_Name: this.addForm.controls.fullName.value,
      class: this.addForm.controls.class.value,
      grade: this.addForm.controls.grade.value,
    }
    this.api.addStudent(student).subscribe(data => {
      console.log(data.status);
      this.router.navigate(['/']);
    }, err => {
      console.log(err.error)
    });
  }

  ngOnInit() {
    window.localStorage.removeItem('token');
    this.addForm = this.formBuilder.group({
      fullName: ['', Validators.compose([Validators.required])],
      class: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }

}


