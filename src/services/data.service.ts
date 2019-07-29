import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<[]> {
    return this.http.get<[]>(' https://kedem.azurewebsites.net/api/ProductAsync');
  }
}
