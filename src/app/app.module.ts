import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { approutes, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AuthInterceptor } from './core/http/authinterceptor.service';
import { NavbarComponent } from './navbar/navbar.component';
// import { RegisterComponent } from './auth/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    TimeTrackingComponent,
    LoginComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    NavbarComponent
    // RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    CommonModule,
    // RouterModule.forRoot(approutes)
    // AuthRoutingModule
    // RouterModule.forChild([{ path:'login', component:LoginComponent}]),
    // EmployeeRoutingModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // AuthService,
    AuthGuard
    // bootstrap:[],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
