import { Injectable } from '@angular/core';
import { ProtheusService } from './protheus.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken;
  apiUrl;

  constructor(
    private httpClient: HttpClient,
    private protheusService: ProtheusService) {

    this.apiUrl = environment.apiUrl;
    this.accessToken = localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    if (this.protheusService.isProtheus()) {
      return true;
    }
    if (this.accessToken == null) {
      return false;
    }
    return !!this.accessToken;
  }

  login(user: string, senha: string): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + `api/oauth2/v1/token?grant_type=password&username=${user}&password=${senha}`, {})
  }
}
