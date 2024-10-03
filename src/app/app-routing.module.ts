import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { AuthGuard } from './auth/auth.guard';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { HomeComponent } from './home/home/home.component';
// import { RegisterComponent } from './auth/register/register.component';

export const approutes: Routes = [
  // { path: '**', redirectTo: ''},
  // { path: '', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'time-tracking', component: TimeTrackingComponent, canActivate: [AuthGuard]  },
  { path: 'employee-form', component: EmployeeFormComponent, canActivate: [AuthGuard]  },
  { path: 'employees/edit/:id', component: EmployeeFormComponent, canActivate: [AuthGuard]  },
  { path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard]  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
