import { Injectable } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import { ProJsToAdvplService } from '@totvs/protheus-lib-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParameterService {

  constructor(private proJsToAdvplService: ProJsToAdvplService,
    private poNotification: PoNotificationService
  ) { }

  getParam(param: string): void {
    this.proJsToAdvplService.jsToAdvpl('setParam', param);
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
