import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ICandidate } from "../interfaces/candidate";

@Injectable()
export class CandidateService {
  readonly baseUrl = import.meta.env["NG_APP_API_URL"];

  constructor(private http : HttpClient) {
  }

  create(formData: any) {

    return this.http.post(`${this.baseUrl}/candidate`, {
      "name": formData.name,
      "document": formData.document,
      "dateOfBirth": new Date(formData.dateOfBirth).toISOString(),
      "email": formData.email,
      "phone": formData.phone,
      "schooling": formData.schooling,
      "function": formData.function,
      "listOfSkills": formData.listSkills
    })
  }

  findAll(email?: string) {
    if(email) {
      return this.http.get(`${this.baseUrl}/candidate`, {
        params: {
          email: email
        }
      })
    }

    else {
      return this.http.get(`${this.baseUrl}/candidate`)
    }
  }

  findOne(id: string) {
    return this.http.get(`${this.baseUrl}/candidate/${id}`)
  }

  update(id: string, data: any) {
    return this.http.patch(`${this.baseUrl}/candidate/${id}`, {
      ...data
    })
  }

  remove(id: string)  {
    return this.http.delete(`${this.baseUrl}/candidate/${id}`)
  }
}
