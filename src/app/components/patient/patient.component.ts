import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersRestService } from './../../services/users-rest.service';
import { User } from './../../models/user.interface';
import { Location } from '@angular/common';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: User;
  constructor(private route: ActivatedRoute, private UsersService: UsersRestService, private location: Location ) { }

  ngOnInit() {
    const userDetailId = this.route.snapshot.paramMap.get('id');
    this.patient=this.UsersService.getPatientDetail(userDetailId);
  }
  goBack(){
    this.location.back();
  }
}