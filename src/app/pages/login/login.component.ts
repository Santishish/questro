import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import {AppUser} from '../../models/appUser';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData: AppUser = {email: '', password: ''};
  userEmail = new FormControl('', [Validators.required, Validators.email]);
  userPassword = new FormControl('', Validators.required);

  constructor(private auth: AuthenticationService, private router: Router) {
    // initializeApp(environment.firebase);
    if (this.auth.user$) this.router.navigate(['/admin/dashboard']);
  }

  signIn() {
    // this.auth.registerUser(this.userData);
    this.auth.signIn(this.userData)
      .then(() => {
        return this.router.navigate(['/admin/dashboard']);
      })
      .catch(err => console.log(err));
  }
}
