import { Component, OnInit } from '@angular/core';
import { UsersRestService } from './../../services/users-rest.service';

@Component({
  selector: 'app-historiesslist',
  templateUrl: './histories-list.component.html',
  styleUrls: ['./histories-list.component.css']
})
export class HistoriesListComponent implements OnInit {
    historiesList: Array<any>;
    constructor(private usersService: UsersRestService) { 
        this.historiesList=this.usersService.getHistoriesList();
    }
    ngOnInit() {
    }
  
}