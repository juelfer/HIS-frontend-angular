import { Component, OnInit } from '@angular/core';
import { UsersRestService } from '../users-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authUser: any;
  constructor(private usersRest: UsersRestService, private router: Router) {
    ;
  }

  logUser(user,pass){
    if (this.usersRest.logUser(user,pass)) {
      this.router.navigate(['/dashboard']);
    };
  }
  ngOnInit() {
  }

}
