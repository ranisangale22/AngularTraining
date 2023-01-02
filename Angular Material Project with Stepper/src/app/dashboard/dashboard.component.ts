import { CommonServiceService } from './../common-service.service';
import { FormBuilder, FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { count } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    }],
})
export class DashboardComponent implements OnInit{
  hide = true;
  count:number=60;
  len:number=0;
  presentAddress:string;
  lenCurrent:number=0;
  firstFormGroup!:FormGroup;
  thirdFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  isValid:boolean=false;
 // fullName = new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern('[a-zA-Z][a-zA-Z ]+')]);
  ngOnInit(): void {
    this.isValid=false;
    this.firstFormGroup = this._formBuilder.group({
      // fullName: ['', Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern('[a-zA-Z][a-zA-Z ]+')],
      fullName :['', [Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      fatherName:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      motherName:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32),Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
      email:['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      mobile:['', [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(10)]],
      date:['',[Validators.required]],
      
     });
     this.secondFormGroup=this._formBuilder.group({
      accountNumber:['',[Validators.pattern('^[0-9]+$')]],
      bankName:[''],
      IFSCCode:[''],
      internateBanking:[''],
      mobileBanking:[''],
      fullName:['']


     });
     this.thirdFormGroup = this._formBuilder.group({
      presentAdress: ['', Validators.required],
      currentAdress: ['', Validators.required],
    });
  }
  

  isLinear = false;

  constructor(private _formBuilder: FormBuilder,private cs:CommonServiceService) {}

  firstSubmit()
      {
        if(this.firstFormGroup.valid && this.thirdFormGroup.valid)
        {
          this.cs.saveBasicDetails(this.firstFormGroup.value).subscribe();
          this.cs.saveAddressDetails(this.thirdFormGroup.value).subscribe();
          this.cs.saveBankDetails(this.secondFormGroup.value).subscribe();
          
          alert("data saved")
          window.location.reload();
          
        }
        else
        {
            alert("invalid form details")
        }
        
      }
   

   onSidenavbar()
   {
    this.isValid=true;
   }
     getErrorforFullname() {
   if (this.firstFormGroup.controls['fullName'].hasError('required')) {
      return ' name is required';
   }
    else if(this.firstFormGroup.controls['fullName'].hasError('pattern'))
    {
      return 'name contain only charachter';
   }
    return 'name should not be less than 6 charachter';
   }
     getErrorformotherName() {
    if (this.firstFormGroup.controls['motherName'].hasError('required')) {
      return ' name is required';
    }
    else if(this.firstFormGroup.controls['motherName'].hasError('pattern'))
    {
      return 'name contain only charachter';
    }
    return 'name should not be less than 6 charachter';
  }
  getErrorforFatherName() {
    if (this.firstFormGroup.controls['fatherName'].hasError('required')) {
      return ' name is required';
    }
    else if(this.firstFormGroup.controls['fatherName'].hasError('pattern'))
    {
      return 'name contain only charachter';
    }
    return 'name should not be less than 6 charachter';
  }
  getErrorForemail() {
    if (this.firstFormGroup.controls['email'].hasError('required')) {
      return ' email is required';
    }
    
      return 'invalid email';
    
    
  }
  getErrorForMobile() {
    if (this.firstFormGroup.controls['mobile'].hasError('required')) {
      return ' mobile number is required';
    }
    
      return 'invalid mobile number';
    
    
  }
  getErrorFordate()
  {
    if(this.firstFormGroup.controls['date'].hasError('required'))
  {
    return 'date is required'
  }
  return 'invalid date'
  }
  getErrorForGender()
  {
    if(this.firstFormGroup.controls['gender'].hasError('required'))
    {
      return 'gender is required'
    }
    return 'invalid gender'
  }
  getErrorForAccountnumber()
  {
    return "account number contains only digits";
  }
  geterrorForCurrentAdress()
  {
    if(this.thirdFormGroup.controls['currentAdress'].hasError('required'))
    {
        return "current address is required";
    }
    return "length should not be more than 60 charachter";
  }
  geterrorForPresentAdress()
  {
    if(this.thirdFormGroup.controls['presentAdress'].hasError('required'))
    {
        return "present address is required";
    }
    return "length should not be more than 60 charachter";
  }

}
