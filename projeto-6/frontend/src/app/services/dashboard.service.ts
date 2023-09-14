import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class DashboardService {
  readonly baseUrl : string = 'http://localhost:4000';

  constructor(private http : HttpClient) {
  }

  findAll() {
    return this.http.get(`${this.baseUrl}/dashboard`)
  }
}
