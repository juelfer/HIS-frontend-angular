import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.interface';
import { UsersRestService } from './../../services/users-rest.service';
import {
    Router
  } from '@angular/router';


@Component({
    selector: 'app-newuser',
    templateUrl: './newuser.component.html',
    styleUrls: ['./newuser.component.css']
})
export class NewUserComponent implements OnInit {
  newUser: User = {role: 'patient', uid:'', name:'', surname:'', dni:'', username:'', password:''};
  
  constructor( private userService: UsersRestService, private route: Router ) { }

  ngOnInit() {
      
  }

  registerUser(newRole,newId,newName,newSurname,newDNI,newSIP,newLogin,newPass){
    console.log("hola"+this.newUser);  
    this.newUser.role = newRole;
      this.newUser.uid = newId;
      this.newUser.name = newName;
      this.newUser.surname = newSurname;
      this.newUser.dni = newDNI;
      this.newUser.username = newLogin;
      this.newUser.password = newPass;
      
      this.userService.addUser(this.newUser);  
      console.log(this.newUser);
  }

  goBack(){
    this.route.navigate(['/dashboard']);
  }

}