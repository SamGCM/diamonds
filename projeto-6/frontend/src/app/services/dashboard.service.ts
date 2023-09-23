import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class DashboardService {
  readonly baseUrl = import.meta.env["NG_APP_API_URL"];

  constructor(private http : HttpClient) {
  }

  findAll() {
    return this.http.get(`${this.baseUrl}/dashboard`)
  }
}
