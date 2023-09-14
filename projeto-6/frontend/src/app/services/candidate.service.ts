import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ICandidate } from "../interfaces/candidate";

@Injectable()
export class CandidateService {
  readonly baseUrl : string = 'http://localhost:4000';

  constructor(private http : HttpClient) {
  }

  create(formData: any) {
    let dateParts = formData.dateOfBirth.split("/");

    return this.http.post(`${this.baseUrl}/candidate`, {
      "name": formData.name,
      "document": formData.document,
      "dateOfBirth": new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]).toISOString(),
      "email": formData.email,
      "phone": formData.phone,
      "schooling": formData.schooling,
      "function": formData.function,
      "listOfSkills": [formData.listSkills]
    })
  }

  findAll() {
    return this.http.get(`${this.baseUrl}/candidate`)
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
