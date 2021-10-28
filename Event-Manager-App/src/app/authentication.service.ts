import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  tryAuth(email:string, password: string) {
    console.log('email: '+ email, 'password: ' +password);
}

}