import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { UsersRestService } from './services/users-rest.service';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guardService';
import { PatientsListComponent } from './components/patients/patients-list.component';
import { PatientComponent } from './components/patient/patient.component';
import { HistoriesListComponent } from './components/histories/histories-list.component';
import { HistoryComponent } from './components/history/history.component';
import { routes } from './router.config';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailComponent,
    PatientsListComponent,
    PatientComponent,
    HistoriesListComponent,
    HistoryComponent,
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
