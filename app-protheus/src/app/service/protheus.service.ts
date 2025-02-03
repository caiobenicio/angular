import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProAppConfig, ProAppConfigService } from '@totvs/protheus-lib-core';
import { Observable } from 'rxjs';
import { SessionModel } from '../interface/session';

@Injectable({
  providedIn: 'root'
})
export class ProtheusService {
  private serverUrl: string | undefined;
  private readonly api: string = '/estoque/secoesBalanco';

  private appConfig: ProAppConfig = {};
  private serverWithApiUrl;

  constructor(
    private proAppConfigService: ProAppConfigService, 
    private httpClient: HttpClient
  ) {

    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
      this.appConfig = this.proAppConfigService.proAppConfig;
      this.serverWithApiUrl = this.proAppConfigService.serverWithApiUrl;  
      
      this.serverUrl = this.serverWithApiUrl + this.api;
    }
  }

  isProtheus(): boolean {
    return this.proAppConfigService.insideProtheus();
  }

  getBySession(filial: string): Observable<SessionModel[]> {
    return this.httpClient.get<SessionModel[]>(`${this.serverUrl}/${filial}`);
  }
}
