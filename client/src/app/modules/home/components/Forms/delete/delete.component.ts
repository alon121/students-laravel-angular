import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }
  deleteForm = new FormGroup({
    studentID: new FormControl(),

  });
    onSubmit() {
    if (this.deleteForm.invalid) {
      return;
    }

    const id = parseInt(this.deleteForm.controls.fullName.value);

    this.api.deleteItem(id).subscribe(data => {
      console.log(data.status);
    }, err => {
      console.log(err.error)
    });
  }

  ngOnInit() {
    this.deleteForm = this.formBuilder.group({
      studentID: ['', Validators.compose([Validators.required])],

    });
  }
}
