import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LoginManagerService {

    private _user: Observable<firebase.User> = null;

    constructor(public afAuth: AngularFireAuth) {
      this._user = afAuth.authState;
    }

    login() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
      this.afAuth.auth.signOut();
    }

    public get user(): Observable<firebase.User> {
      return this._user;
    }
}
