import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { AuthGuard } from './auth/auth.guard';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
// import { RegisterComponent } from './auth/register/register.component';

export const approutes: Routes = [
  { path: '', component: AppComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent},
  { path: 'time-tracking', component: TimeTrackingComponent },
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'employees/edit/:id', component: EmployeeFormComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: '**', redirectTo: '/login' }
  // { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
