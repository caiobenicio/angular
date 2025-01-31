import { Component } from '@angular/core';
import { SessionModel } from '../../interface/session';
import { ProtheusService } from '../../service/protheus.service';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent {
  sessionList: SessionModel[] = [];

  constructor(private protheusService: ProtheusService, private httpClient: HttpClient) { }

  async ngOnInit(): Promise<void> {
   this.getSessionList();
   const firstNumber = await firstValueFrom(this.httpClient.get<any>('/assets/data/appConfig.json'));
  }

  getSessionList(): void {
    this.protheusService.getBySession('0103').subscribe(data => {
      this.sessionList = data;
    });
  }
}