import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'guard';
  protheus: boolean;

  constructor(
    private proAppConfigService: ProAppConfigService,
  ) {
    if (this.proAppConfigService.insideProtheus()) {
      this.protheus = true;
      localStorage.setItem('token', "tokem");
    }
    else {
      this.protheus = false;
    }
  }
}
