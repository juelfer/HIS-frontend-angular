import { Component, OnInit } from '@angular/core';
import { UsersRestService } from './../../services/users-rest.service';
import { User } from './../../models/user.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patientslist',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
    patientsList: Array<User>;
    constructor(private usersService: UsersRestService, private location: Location) { 
        // this.patientsList=this.usersService.getPatientsList();
    }
    ngOnInit() {
      this.patientsList=this.usersService.getPatientsList();
    }
  goBack(){
    this.location.back();
  }
}
