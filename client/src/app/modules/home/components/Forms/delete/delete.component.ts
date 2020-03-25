import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { Student } from 'src/app/shared/models/student/student';
import { element } from 'protractor';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {
  loading: boolean;
  constructor(private router: Router, private api: ApiService) { }

  studentsNames;
  selectStudent;
  deleteItem(stu){
    this.api.deleteItem(stu.id).subscribe(data => {
      this.router.navigate(['/'])
     }, err => {
       console.log(err.error)
     });
   }
  ngOnInit() {
    this.api.getAll().subscribe(data => {this.studentsNames = data.map(element =>({ 'id': element.id, name: element.Full_Name }))
    this.loading = true
  });
  }
}
