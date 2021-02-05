import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  hasToken() {
    return !!this.getToken();
  }

  setToken(token){
    console.log('insere token localstorage');
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
