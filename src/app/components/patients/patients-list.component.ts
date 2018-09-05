import { Component, OnInit } from '@angular/core';
import { UsersRestService } from './../../services/users-rest.service';

@Component({
  selector: 'app-patientslist',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
    patientsList: Array<any>;
    constructor(private usersService: UsersRestService) { 
        this.patientsList=this.usersService.getPatientsList();
    }
    ngOnInit() {
    }
  
}
