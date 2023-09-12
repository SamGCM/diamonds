import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class SchoolingService {
  readonly baseUrl : string = '/';

  constructor(private http : HttpClient) {
  }

  findAll() {

  }
}
