import {
  Component,
  OnInit
} from '@angular/core';
import {
  UsersRestService
} from '../users-rest.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authUser: any;
  username;
  password;
  error = '';
  constructor(private usersRest: UsersRestService, private router: Router) {;
  }

  ngOnInit() {}

  logUser() {
    if (this.usersRest.logUser(this.username, this.password)) {
      this.authUser = this.usersRest.logUser(this.username, this.password);
      this.router.navigate(['/dashboard']);
    } else {
      this.error = "Usuario o contraseña incorrectos"
    };
    this.username = '';
    this.password = '';
  }


}
