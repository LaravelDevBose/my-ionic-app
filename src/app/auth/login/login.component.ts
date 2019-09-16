import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private auth: AuthService) { }
  formData: {
    email: '',
    password: ''
  };
  ngOnInit() {}
  userLoginSubmit() {
    console.log('login btn press');
    console.log(this.email);
    console.log(this.password);
    this.auth.login(this.email, this.password);
  }

}
