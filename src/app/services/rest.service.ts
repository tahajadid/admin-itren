import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const baseUrlListOfCustomers='https://itsren-academy.com/api/listOfCustomers';
const headers = { 'content-type': 'application/json'} 
@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }
  getListOfCustomers(id) {
    return this.http.get(`${baseUrlListOfCustomers}/${id}`,{
      headers: new HttpHeaders().set('authorization', 'rachuser@1998'),
    });
  }
  getAllCustomers() {
    return this.http.get(`${baseUrlListOfCustomers}`,{
      headers: new HttpHeaders().set('authorization', 'rachuser@1998'),
    });
  }
}