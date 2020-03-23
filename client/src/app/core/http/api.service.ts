import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/app/shared/models/student/student';
import { ApiResponse } from 'src/app/shared/models/apiResponse/api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://alonabargel.com/laravel/api/student';

  constructor(private http:HttpClient, ) {}

   getById(id) : Observable<Student>
   {
     return this.http.get<Student>(`${this.apiUrl}/${id}`);
   }

   getAll() : Observable<Student[]>
   {
     return this.http.get<Student[]>(this.apiUrl);
   }

   addStudent(student:Student) :any
   {
    const body = new HttpParams()
    .set('Full_Name', student.full_name)
    .set('class', student.class)
    .set('grade', student.grade.toString());
     return this.http.post(this.apiUrl,body)
  }
 
   
   
   deleteItem(id: number): Observable<ApiResponse>{
     return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
   }


}
