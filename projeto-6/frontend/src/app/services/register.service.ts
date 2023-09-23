import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class RegisterService {
  readonly baseUrl = import.meta.env["NG_APP_API_URL"];

  constructor(private http : HttpClient) {
  }

  findAll(email?: string) {
    if(email) {
      return this.http.get(`${this.baseUrl}/register`, {
        params: {
          email: email
        }
      })
    }

    else {
      return this.http.get(`${this.baseUrl}/register`)
    }
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
