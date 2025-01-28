import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionModel } from '../interfaces/session';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private url = "http://187.72.90.194:8992/rest";
  private readonly api: string = '/estoque/secoesBalanco';

  constructor(private httpClient: HttpClient) { 
    this.url += this.api;
  }

  getBySession(filial: string): Observable<SessionModel[]> {
    return this.httpClient.get<SessionModel[]>(`${this.url}/${filial}`);
  }  
}
