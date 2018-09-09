import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.interface';
import { UsersRestService } from './../../services/users-rest.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-newuser',
    templateUrl: './newuser.component.html',
    styleUrls: ['./newuser.component.css']
})
export class NewUserComponent implements OnInit {
  newUser: User = {role: 'patient', uid:'', name:'', surname:'', dni:'', username:'', password:''};
  
  constructor( private userService: UsersRestService, private location: Location ) { }

  ngOnInit() {
      
  }

  registerUser(newRole,newId,newName,newSurname,newDNI,newLogin,newPass){
      this.newUser.role = newRole;
      this.newUser.uid = newId;
      this.newUser.name = newName;
      this.newUser.surname = newSurname;
      this.newUser.dni = newDNI;
      this.newUser.username = newLogin;
      this.newUser.password = newPass;
      this.userService.addUser(this.newUser);  
  }

  goBack(){
    this.location.back();
  }

}