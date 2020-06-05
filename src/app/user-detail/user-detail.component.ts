import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from "./../services/service.service"

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.sass']
})
export class UserDetailComponent implements OnInit {
  user: string;
  name: string;
  userDetail: any;
  constructor(private readonly _service: ServiceService, private _route: ActivatedRoute) { }
  async ngOnInit() {
    this.user = this._route.snapshot.paramMap.get('id');
    this.name = this._route.snapshot.paramMap.get('name');
    this.userDetail = await this._service.getUserReport(this.user);
  }

}
