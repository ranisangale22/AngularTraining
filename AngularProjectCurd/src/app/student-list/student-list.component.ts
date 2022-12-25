import { CommonserviceServiceService } from './../commonservice-service.service';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/model/student-form';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],

})
export class StudentListComponent implements OnInit {
  std:Student[]=[];//array initialization
  stddata:Student={id:0,name:'',mob:'',addr:''};

  constructor(private cs:CommonserviceServiceService)
  {

  }
  
  ngOnInit(): void {
    this.cs.getAllStudentData().subscribe({
      next:(student)=>{
        this.std=student;
      }
    });
  }
  deleteStudent(id:number)
  {
    this.cs.deleteStudentData(id.toString()).subscribe();
    window.location.reload();
  }
  getByID(id:number)
  {
    this.cs.setID(id.toString());
  }
}
