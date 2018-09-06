import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersRestService } from './../../services/users-rest.service';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: Array<History>=[];
  constructor(private route: ActivatedRoute, private UsersService: UsersRestService ) { }

  ngOnInit() {
    const historyDetailId = this.route.snapshot.paramMap.get('userId');
    this.history=this.UsersService.getHistoryDetail(historyDetailId);
  }

}