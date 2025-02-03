import { Injectable } from '@angular/core';
import { ProtheusService } from './protheus.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string | null;
  private serverUrl: string;
  private apiOauth2 = 'api/oauth2/v1/token?grant_type=password&username=';

  constructor(
    private httpClient: HttpClient,
    private protheusService: ProtheusService) {

    this.serverUrl = environment.serverUrl;
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
    return this.httpClient.post<any>(this.serverUrl + this.apiOauth2 + `${user}&password=${senha}`, {})
  }
}
