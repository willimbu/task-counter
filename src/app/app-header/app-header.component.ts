import { LoginManagerService } from '../services/login-manager/login-manager.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

    constructor(public loginService: LoginManagerService) {}

    login() {
          this.loginService.login();

    }

    logout() {
      this.loginService.logout();
    }

}
