import { Component, OnInit } from '@angular/core';
import { UsersRestService } from './../../services/users-rest.service';
import { History } from './../../models/history.interface';
import { User } from './../../models/user.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-historiesslist',
  templateUrl: './histories-list.component.html',
  styleUrls: ['./histories-list.component.css']
})
export class HistoriesListComponent implements OnInit {
    historiesList: Array<History>;
    // users: Array<User>;
    patients: Array<User>;

    constructor(private usersService: UsersRestService, private location: Location) { 
        // this.historiesList=this.usersService.getHistoriesList();
        // this.patients=this.usersService.getPatientsList();
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
        this.historiesList=this.usersService.getHistoriesList();
        this.patients=this.usersService.getPatientsList();
    }
    goBack(){
        this.location.back();
      }
}