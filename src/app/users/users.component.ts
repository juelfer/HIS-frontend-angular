import { Component, OnInit } from '@angular/core';
import { UsersRestService } from '../users-rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList=[];
  constructor(private usersService: UsersRestService) { 
    this.userList=this.usersService.getUserList();
  }

  ngOnInit() {
  }

}
