import { Component, OnInit } from '@angular/core';
import { StateManagerService } from './../../services/state-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statebar',
  templateUrl: './statebar.component.html',
  styleUrls: ['./statebar.component.css']
})
export class StatebarComponent implements OnInit {

constructor(private statemanager: StateManagerService, private router: Router) { }
  loggedUser = this.statemanager.getUser();
  
  ngOnInit() {
  }
  logOut(){
    this.statemanager.logOut();
    this.router.navigate(['login']);
  }
}