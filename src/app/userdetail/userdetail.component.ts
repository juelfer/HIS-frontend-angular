import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersRestService } from '../users-rest.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  user: any;
  constructor(private route: ActivatedRoute, private UsersService: UsersRestService ) { }

  ngOnInit() {
    const userDetailId = this.route.snapshot.paramMap.get('id');
    this.user=this.UsersService.getUserDetail(userDetailId);
  }

}
