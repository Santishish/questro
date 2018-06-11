import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate() {
    return this.auth.user$.pipe(map(user => {
      if (user) return true;
      this.router.navigate(['/login']);
      return false;
    }));
  }
}
