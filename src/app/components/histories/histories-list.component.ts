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
    patients: Array<User>;

    constructor(private usersService: UsersRestService, private location: Location) {
        this.historiesList=this.usersService.getHistoriesList();
        this.patients=this.usersService.getPatientsList();
     }

    ngOnInit() {
        
    }
    goBack(){
        this.location.back();
      }
}