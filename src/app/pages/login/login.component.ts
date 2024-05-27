import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account/shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  };

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void { }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);
      console.log(`login efetuado: ${result}`);
  
      // Redireciona o usuário para a página inicial
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
    }
  }
}