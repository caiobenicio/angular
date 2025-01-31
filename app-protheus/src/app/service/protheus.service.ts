import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProAppConfig, ProAppConfigService } from '@totvs/protheus-lib-core';
import { Observable } from 'rxjs';
import { SessionModel } from '../interface/session';

@Injectable({
  providedIn: 'root'
})
export class ProtheusService {
  private url = "http://187.72.90.194:8992/rest";
  private readonly api: string = '/estoque/secoesBalanco';

  appConfig: ProAppConfig = {};
  serverWithApiUrl;  

  constructor(private proAppConfigService: ProAppConfigService, private httpClient: HttpClient) { 
    this.url += this.api;

    if (this.proAppConfigService.insideProtheus()) { 
      this.proAppConfigService.loadAppConfig();
      this.appConfig = this.proAppConfigService.proAppConfig;
      this.serverWithApiUrl = this.proAppConfigService.serverWithApiUrl;

      this.url = this.serverWithApiUrl + this.api;
    }        
  }

  isProtheus():boolean {
    return this.proAppConfigService.insideProtheus();
  } 
     
  getBySession(filial: string): Observable<SessionModel[]> {
    return this.httpClient.get<SessionModel[]>(`${this.url}/${filial}`);
  }   
}
