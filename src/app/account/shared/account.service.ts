import { Injectable } from '@angular/core';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  async login(user: any): Promise<LoginResponse> {
    // Chama a API para fazer login e obter o token
    // Para fins de demonstração, estou retornando um token hardcoded
    const token = 'meu-token';
    return { token };
  }

  createAccount(account: any) {
    return new Promise((resolve) => {
      resolve(true);
    })
  }

  getToken(): string | null {
    // Retorna o token armazenado em memória para fins de teste
    return 'meu-token';
  }
}