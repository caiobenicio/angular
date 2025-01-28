import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl;
  accessToken;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.apiUrl = environment.apiUrl;
    this.accessToken = localStorage.getItem('token');
  }

  login(user: string, senha:string):Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+`api/oauth2/v1/token?grant_type=password&username=${user}&password=${senha}`, {})
 }

  isLoggedIn():any {
    if (this.accessToken == null) {
      return null;
    }
    return this.accessToken;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }  
}
