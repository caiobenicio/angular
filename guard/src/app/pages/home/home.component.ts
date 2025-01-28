import { Component } from '@angular/core';
import { SessionModel } from '../../interfaces/session';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sessionList: SessionModel[] = [];

  constructor(private sessionservice: SessionService) { }

  ngOnInit(): void {
   // this.getSessionList();
  }

  getSessionList(): void {
    this.sessionservice.getBySession('0103').subscribe(data => {
      this.sessionList = data;
    });
  }

  selectedSession(s: SessionModel) {
    console.log(s);
  }
}
