import { Student } from './../../model/student-form';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonserviceServiceService } from '../commonservice-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  std:Student={id:0,name:'',mob:'',addr:''};
 
 stdId:string;
  constructor(private cs:CommonserviceServiceService)
  {

    
  }
  ngOnInit(): void {

    this.cs.studentID.subscribe(data1=>{
    var e=JSON.parse(JSON.stringify(data1).replace(/"\s+|\s+"/g,'"'))
    this.std.id=e;
    var numberValue = Number(e);
    console.log(numberValue);
    this.cs.getStudentByID(numberValue.toString()).subscribe((data)=>{
    this.std=data;
    })
    
    })
   
  }
  onSubmit()
  {
    console.log(this.std.id)
    if(this.std.id!=0)
    {
      this.cs.updateStudent(this.std,this.std.id.toString()).subscribe();
    }
    else
    {
      this.cs.saveStudent(this.std).subscribe();
    }
    window.location.reload();
    
  }
  reset()
  {
    this.std={id:0,name:'',mob:'',addr:''};
  }
 
}

