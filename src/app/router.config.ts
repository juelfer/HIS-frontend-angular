import { Routes}  from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guardService';
import { UsersComponent } from './users/users.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { LoginComponent } from './login/login.component';
import { PatientsListComponent} from './components/patients/patients-list.component';
import { PatientComponent } from './components/patient/patient.component';
import { HistoriesListComponent } from './components/histories/histories-list.component';
//import { HistoryComponent } from './components/history/history.component';
 
export const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
    {path:'usuarios', component: UsersComponent, canActivate:[AuthGuard]},
    {path:'usuarios/:id', component: UserdetailComponent},
    {path:'login', component: LoginComponent},
    {path:'patients', component: PatientsListComponent, canActivate:[AuthGuard]},
    {path:'patients/:id', component: PatientComponent, canActivate:[AuthGuard]},
    {path:'histories', component: HistoriesListComponent, canActivate:[AuthGuard]},
   // {path:'histories/:id', component: HistoryComponent}
  ];