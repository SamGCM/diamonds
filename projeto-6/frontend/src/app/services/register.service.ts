import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class RegisterService {
  readonly baseUrl : string = 'http://localhost:4000';

  constructor(private http : HttpClient) {
  }

  findAll() {
    return this.http.get(`${this.baseUrl}/register`)
  }

  findOne(id: string) {
    return this.http.get(`${this.baseUrl}/register/${id}`)
  }

  update(id: string, newStatus: string) {
    return this.http.patch(`${this.baseUrl}/register/${id}`, {
      status: newStatus
    })
  }

  remove(id: string) {
    return this.http.get(`${this.baseUrl}/register/${id}`)
  }
}
