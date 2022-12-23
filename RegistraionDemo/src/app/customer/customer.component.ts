import { CustomerForm } from './../model/customer-form';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { ServiceService } from '../service.service';
interface Subscription {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})

export class CustomerComponent {

 subscriptions:Array< Subscription> = [
    {value: 'Basic-0', viewValue: 'Basic'},
    {value: 'Advanced-1', viewValue: 'Advanced'},
    {value: 'Pro-2', viewValue: 'Pro'},
  ];
  
  constructor(private fb:FormBuilder,private cs:ServiceService) { }
  stu!:CustomerForm[]
  
  CustomerForm!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namepattern!:"^[a-zA-Z ]{2,20}$";
  
  ngOnInit(): void {


    this.CustomerForm=this.fb.group({
     
      
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]],
      password:['',[Validators.required]],
      subscription:['',[Validators.required]]
   
    })
}
onSubmit()
{

  if(this.CustomerForm.valid)
  {
    
 // this.cs.StudentSave(this.CustomerForm.value).subscribe();
  //window.location.reload();
  console.log(this.CustomerForm.value)
  }
}
}
