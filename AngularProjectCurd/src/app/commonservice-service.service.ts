import { Injectable } from '@angular/core';
import { Student } from './../model/student-form';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonserviceServiceService {

  url:string="http://localhost:3000";
  public constructor(private http:HttpClient) {

   }

   getAllStudentData():Observable<Student[]>
   {
    return this.http.get<Student[]>(this.url+'/'+'student');
   }
   saveStudent(std:Student)
   {
    return this.http.post<Student>(this.url+"/student",std);
   }
   updateStudent(std:Student,id:string)
   {
    return this.http.put<Student>(this.url+"/student/"+id,std);
   }
   deleteStudentData(id:string)
   {
     return this.http.delete<Student>(this.url+"/student/"+id) 
   }
   getStudentByID(id:string)
   {
    return this.http.get<Student>(this.url+"/student/"+id); 
   }
   
   studentID =new Subject();
   setID(studentID:string)
   {
  this.studentID.next(studentID);
  
   }
}
