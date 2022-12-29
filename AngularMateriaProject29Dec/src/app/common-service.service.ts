import { Login } from './../model/login-form';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/model/student-form';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  url:string="http://localhost:3000";
  public constructor(private http:HttpClient) {

   }
   saveStudent(std:Student):Observable<Student>
   {
    return this.http.post<Student>(this.url+"/student",std);
   }
   getLoginData():Observable<Login>
   {
    return this.http.get<Login>(this.url+'/'+'login');
   }
}
