import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersRestService } from './../../services/users-rest.service';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient: any;
  constructor(private route: ActivatedRoute, private UsersService: UsersRestService ) { }

  ngOnInit() {
    const userDetailId = this.route.snapshot.paramMap.get('id');
    this.patient=this.UsersService.getUserDetail(userDetailId);
  }

}