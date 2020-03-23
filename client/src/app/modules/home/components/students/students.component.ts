import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { Student } from 'src/app/shared/models/student/student';
import { PagerService } from 'src/app/core/services/pager.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private api:ApiService,private pagerService: PagerService ) { }
  students:Student[] = [];
  pager: any = {};
  pagedItems: any[];
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    this.pager = this.pagerService.getPager(this.students.length, page);

 this.reloadData();
}

reloadData(){
  this.pagedItems = this.students.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

  sortSelected(sort:string){
    switch (sort){
      case 'grade-min to max':
        this.students.sort((ele1, ele2) => ele1.grade - ele2.grade);
        this.reloadData();
      break;
      case 'grade-max to min':
        this.students.sort((ele1, ele2) => ele2.grade - ele1.grade);
        this.reloadData();
      break;
      case 'name - abc':
        this.students.sort();
        this.reloadData();
      break;
      case 'ID':
        this.students.sort((ele1, ele2) => ele1.id - ele2.id);
        this.reloadData();
      break;
    }

}



  ngOnInit(): void {
    this.api.getAll().subscribe(data => {this.students = data; this.setPage(1)})
  }
}
