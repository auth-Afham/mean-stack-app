import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private userService: UserService) {}

  login() {
    this.userService.login({ email: this.email, password: this.password })
      .subscribe(response => console.log('Logged in:', response));
  }
}
