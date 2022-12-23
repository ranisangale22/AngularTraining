import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { CustomerComponent } from './customer/customer.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
const routes: Routes = [


{path:"", component:HomeComponent},
{path:"student", component:StudentComponent},
{path:"studentlist", component:StudentlistComponent},
{path:"customer", component:CustomerComponent},
{path:"projectdetails",component:ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
