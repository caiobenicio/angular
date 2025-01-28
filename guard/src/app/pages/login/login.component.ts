import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: string = "";
  senha: string = "";

  constructor(private authService: AuthService, private router: Router, private remover: ElementRef) { }

  ngOnInit(): void {  }


  login(user: string, senha: string){
    const auth = this.authService.login(user, senha);

    if (auth) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/']);
      this.mensagemErro("erro");
    }
   }

  closeErro(classe: string):void{
    const alerta = this.remover.nativeElement.querySelector("#alerta");
    alerta.classList.add(classe)
  }

  mensagemErro(classe: string):void{
    const alerta = this.remover.nativeElement.querySelector("#alerta");
    alerta.classList.remove(classe)
  }
}
