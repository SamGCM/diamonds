import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class CandidateService {
  readonly baseUrl : string = '/';

  constructor(private http : HttpClient) {
  }

  create(formData: any) {
    console.log(formData)
  }

  findAll() {

  }

  findOne() {

  }

  update() {

  }

  remove() {

  }
}
