import { Injectable } from '@angular/core';
import { Student } from './model/student-form';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  url:string="http://localhost:3000";
  public constructor(private http:HttpClient) {

   }
   saveStudent(std:Student):Observable<Student>
   {
    return this.http.post<Student>(this.url+"/student",std);
   }
}
