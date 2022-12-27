import { CommonserviceService } from './commonservice.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators,FormControl } from '@angular/forms';
import { Student } from './model/student-form';
interface Skill {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  hide = true;
  title = 'AngularMaterialProject';
  skills: Skill[] = [
    {value: 'Angular Basic', viewValue: 'Angular Basic'},
    {value: 'Angular Intermediate', viewValue: 'Angular Intermediate'},
    {value: 'Angular Advanced', viewValue: 'Angular Advanced'},
  ];

  std:Student={fullName:'',email:'',mobile:'',password:'',skill:'',gender:'',dateofBirth:''};
  
  constructor(private fb:FormBuilder) { }
  stu!:Student[]
  
  studentform!:FormGroup;
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";
  passPattern="^[A-Za-z0-9]*$"
  ngOnInit(): void {
    this.studentform=this.fb.group({
      sid:[''],
      fullName:['',[Validators.required],Validators.minLength(6),Validators.maxLength(32)],
      password:['',[Validators.required],Validators.pattern(this.passPattern)],
      dateofBirth:['',[Validators.required]],
      skill:['',[Validators.required]],
      gender:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]]
   
    })
  }
  onSubmit()
  {
    console.log(this.studentform.value)
    //this.cs.saveStudent(this.studentform.value).subscribe();
  }
}
