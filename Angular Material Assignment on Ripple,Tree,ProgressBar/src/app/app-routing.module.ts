import { DemoComponent } from './demo/demo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"register",component:RegisterComponent},
  {path:"",component:LoginComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"courselist",component:CourseListComponent},
  {path:"departmentlist",component:DepartmentListComponent},
  
  {path:"dashboard",component:DashboardComponent},
  {path:"demo",component:DemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
