import { ProjectDetailForm } from './../model/projectDetail-form';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ServiceService } from '../service.service';
interface ProjectStatus {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent{

  prstatus:Array< ProjectStatus> = [
    {value: 'Stable-0', viewValue: 'Stable'},
    {value: 'Critical-1', viewValue: 'Crtical'},
    {value: 'Finished-2', viewValue: 'Finished'},
  ];
  
  constructor(private fb:FormBuilder,private cs:ServiceService) { }
  stu!:ProjectDetailForm[]
  
  ProjectDetail!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";
  
  ngOnInit(): void {


    this.ProjectDetail=this.fb.group({
     
      
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      projectName:['',[Validators.required]],
      projectStatus:['',[Validators.required]]
   
    })
}
onSubmit()
{

  if(this.ProjectDetail.valid)
  {
 
  console.log(this.ProjectDetail.value)
  }
}
}
