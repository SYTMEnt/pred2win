import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly TOKEN_KEY = 'token';

  constructor() {}

  saveToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  clearToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}