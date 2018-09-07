import { Component, OnInit } from '@angular/core';
import { StateManagerService } from '../services/state-manager.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private statemanager: StateManagerService, private router: Router) { }
  loggedUser = this.statemanager.getUser();
  
  ngOnInit() {
  }
  logOut(){
    this.statemanager.logOut();
    this.router.navigate(['login']);
  }
}
