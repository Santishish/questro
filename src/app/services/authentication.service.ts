import { Injectable } from '@angular/core';
import {AppUser} from '../models/appUser';
import {auth, User} from 'firebase/app';
import {Observable} from 'rxjs';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';

@Injectable()
export class AuthenticationService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState;
  }

  registerUser(appUser: AppUser) {
    return auth().createUserWithEmailAndPassword(appUser.email, appUser.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: appUser.name,
          photoURL: null
        });
      })
      .catch(error => console.log(error));
  }

  signIn(user: AppUser) {
    return auth().signInWithEmailAndPassword(user.email, user.password);
  }

  signOut() {
    auth().signOut()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }

  /*getUsers() {

  }*/
}
