import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { TechnicalsComponent } from './technicals/technicals.component';
import { PatientsComponent } from './patients/patients.component';
import { RouterModule, Routes} from '@angular/router';
import { UsersRestService } from './users-rest.service';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guardService';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'usuarios', component: UsersComponent, canActivate:[AuthGuard]},
  {path:'usuarios/:id', component: UserdetailComponent,canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailComponent,
    DoctorsComponent,
    TechnicalsComponent,
    PatientsComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
    ],
  providers: [UsersRestService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
