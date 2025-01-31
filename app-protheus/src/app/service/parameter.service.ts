import { Injectable } from '@angular/core';
import { ProJsToAdvplService } from '@totvs/protheus-lib-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor(private proJsToAdvplService: ProJsToAdvplService
  ) { }

  getParam(param: string): void {
    this.proJsToAdvplService.jsToAdvpl('getParam', param);
  }

  setParameter(param: string): Observable<string> {
    return this.proJsToAdvplService.buildObservable<string>(
      ({protheusResponse, subscriber}: any) => {
        subscriber.next(protheusResponse);
        subscriber.complete();
      },
      {
        autoDestruct: false,
        receiveId: 'setParam',
        sendInfo: {
          type: 'getParam',
          content: param
        }
      }
    );
  }  
}
