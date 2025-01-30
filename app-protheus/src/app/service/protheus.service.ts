import { Injectable } from '@angular/core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Injectable({
  providedIn: 'root'
})
export class ProtheusService {
  constructor(private proAppConfigService: ProAppConfigService) { }

  isProtheus():boolean {
    return this.proAppConfigService.insideProtheus();
  }    
}
