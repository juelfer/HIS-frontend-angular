import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersRestService } from './../../services/users-rest.service';
import { User } from './../../models/user.interface';
import { History } from './../../models/history.interface';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: History;
  user: any;
  doctor: User;
  constructor(private route: ActivatedRoute, private UsersService: UsersRestService ) { }

  ngOnInit() {
    const historyDetailId = this.route.snapshot.paramMap.get('id');
    this.history=this.UsersService.getHistoryDetail(historyDetailId);
    this.user=this.UsersService.getUserDetail(historyDetailId);
    this.doctor=this.UsersService.getUserDetail(this.history.doctorId);
  }

}