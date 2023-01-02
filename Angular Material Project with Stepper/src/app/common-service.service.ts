import { BankDetails } from './../model/bankDetails';
import { AddressDetails } from './../model/addressDetails';
import { BasicDetails } from './../model/basicDetails';
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
   saveBasicDetails(bsc:BasicDetails):Observable<BasicDetails>
   {
    return this.http.post<BasicDetails>(this.url+'/'+'basicDetails',bsc);
   }
   saveAddressDetails(addr:AddressDetails):Observable<AddressDetails>
   {
    return this.http.post<AddressDetails>(this.url+'/'+'adressDetails',addr)
   }
   saveBankDetails(addr:BankDetails):Observable<BankDetails>
   {
    return this.http.post<BankDetails>(this.url+'/'+'bankDetails',addr)
   }
}
