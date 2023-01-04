import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/model/student-form';
import { CommonServiceService } from '../common-service.service';

interface Skill {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  title = 'AngularMaterialProject';
  skills: Skill[] = [
    {value: 'Angular Basic', viewValue: 'Angular Basic'},
    {value: 'Angular Intermediate', viewValue: 'Angular Intermediate'},
    {value: 'Angular Advanced', viewValue: 'Angular Advanced'},
  ];

  std:Student={fullName:'',email:'',mobile:'',password:'',skill:'',gender:'',dateofBirth:''};
  
  constructor(private fb:FormBuilder,private cs:CommonServiceService) { }
  stu!:Student[]
  
  studentform!:FormGroup;
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"[a-zA-Z][a-zA-Z ]+";
  passPattern="^[A-Za-z0-9]*$"
  ngOnInit(): void {
    this.studentform=this.fb.group({
      
      fullName:['',[Validators.required,Validators.minLength(6),Validators.pattern(this.namepattern)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]{2,}')]],
      dateofBirth:['',[Validators.required]],
      skill:['',[Validators.required]],
      gender:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
   
    })
  }
  
  onSubmit()
  {
    console.log(this.studentform.value)
    if(this.studentform.valid)
    {
    console.log(this.studentform.value)
    this.cs.saveStudent(this.studentform.value).subscribe();
    alert("Data Saved");
    window.location.reload();
    }
  }
  
}
