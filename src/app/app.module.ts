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

const routes: Routes = [
  {path:'usuarios', component: UsersComponent},
  {path:'usuarios/:id', component: UserdetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailComponent,
    DoctorsComponent,
    TechnicalsComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
    ],
  providers: [UsersRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
