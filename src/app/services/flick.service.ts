import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { Flick } from '../Flick';

@Injectable({
  providedIn: 'root'
})
export class FlickService {
  private apiUrl = "http://localhost:4300/flicks";

  constructor(private Http:HttpClient) {
  
  }

  getFlicks(): Observable<Flick[]> {
    return this.Http.get<Flick[]>(this.apiUrl)
  }

  getFlickDetail(id: number): Observable<Flick[]> {
    const apiUrlDetails = `http://localhost:4300/flicks/${id}`;
    return this.Http.get<Flick[]>(apiUrlDetails);
  }
  
}