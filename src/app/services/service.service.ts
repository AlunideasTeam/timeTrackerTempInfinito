import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getList = () => {
    return this.http.get(`${environment.url}/time-track/user`).toPromise();
  }

  getUserReport = (id: string) => {
    return this.http.get(`${environment.url}/time-track/report/${id}`).toPromise();
  }
}
