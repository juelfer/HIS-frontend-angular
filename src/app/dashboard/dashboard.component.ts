import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../state-manager.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private statemanager: StateManagerService) { }
  userrole = this.statemanager.getUserRole();

  ngOnInit() {
  }

}
