import { Component, OnInit } from '@angular/core';
import { ServiceService } from "./../services/service.service"

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  userList: any = [];

  constructor(private readonly _service: ServiceService) { }

  async ngOnInit() {
    this.userList = await this._service.getList();
  }

}
