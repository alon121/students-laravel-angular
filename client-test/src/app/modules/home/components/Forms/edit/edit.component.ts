import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Router } from "@angular/router";
import { ApiService } from 'src/app/core/http/api.service';
import { Student } from 'src/app/shared/models/student/student';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']

})
export class EditComponent {


  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }
  students: Array<Student> = [];
  selectedStudent;
  editForm;

  onSubmit() {
    const student: Student = {
      id: this.selectedStudent.id,
      Full_Name: this.editForm.controls.fullName.value.trim() == "" ? this.selectedStudent.Full_Name : this.editForm.controls.fullName.value,
      class: this.editForm.controls.class.value.trim() == "" ? this.selectedStudent.class : this.editForm.controls.class.value,
      grade: this.editForm.controls.grade.value.trim() == "" ? this.selectedStudent.grade : this.editForm.controls.grade.value
    }

    this.api.editStudent(student).subscribe(data => {
      this.router.navigate(['/']);
    }, err => {
      console.log(err.error)
    });
  }

  ngOnInit() {
    this.api.getAll().subscribe(data => {
    this.students = data; this.selectedStudent = data[0];
    });

    this.editForm = this.formBuilder.group({
      selectedItem: new FormControl(),
      fullName: ['', Validators.compose([Validators.required])],
      class: ['', Validators.required],
      grade: ['', Validators.required],
    });
  }

}


