import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersRestService } from './../../services/users-rest.service';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute, private UsersService: UsersRestService ) { }

  ngOnInit() {
    const userDetailId = this.route.snapshot.paramMap.get('id');
    this.user=this.UsersService.getUserDetail(userDetailId);
  }

}