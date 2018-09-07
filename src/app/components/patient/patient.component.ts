import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersRestService } from './../../services/users-rest.service';
import { Patient } from './../../models/patient.interface';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: Patient;
  constructor(private route: ActivatedRoute, private UsersService: UsersRestService ) { }

  ngOnInit() {
    const userDetailId = this.route.snapshot.paramMap.get('id');
    this.patient=this.UsersService.getPatientDetail(userDetailId);
  }

}