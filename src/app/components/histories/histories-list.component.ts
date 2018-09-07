import { Component, OnInit } from '@angular/core';
import { UsersRestService } from './../../services/users-rest.service';
import { History } from './../../models/history.interface';
import { Patient } from './../../models/patient.interface';


@Component({
  selector: 'app-historiesslist',
  templateUrl: './histories-list.component.html',
  styleUrls: ['./histories-list.component.css']
})
export class HistoriesListComponent implements OnInit {
    historiesList: Array<History>;
    // users: Array<User>;
    patients: Array<Patient>;

    constructor(private usersService: UsersRestService) { 
        this.historiesList=this.usersService.getHistoriesList();
        this.patients=this.usersService.getPatientsList();
        // this.users=this.usersService.getUserList();
       
        // for (let history of this.historiesList) {
        //     for (let user of this.users) {
        //         if (history.userId===user.uid) {
        //             this.patients.push(user);
        //         }
        //     }
        // }

    }
    ngOnInit() {
    }
  
}