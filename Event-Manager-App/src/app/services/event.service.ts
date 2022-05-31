import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const API_URL = 'http://localhost:8080/api/events/';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) { }



  getEvent(id: number): Observable<any> {
    
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenStorage.getToken());
    return this.http.get(API_URL + 'get?id=' + id, { responseType: 'text' });
  }
}
