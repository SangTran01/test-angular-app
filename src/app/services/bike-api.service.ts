import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeApiService {

  private readonly bikeApiUrl = "https://localhost:7152/api";

  constructor(private http: HttpClient) { }

  Brands(): Observable<any[]> {
    return this.http.get<any>(this.bikeApiUrl + "/Brands")
  }
}
