import { Component } from '@angular/core';
import {AppUser} from '../../../models/appUser';
import {AuthenticationService} from '../../../services/authentication.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  constructor(private authService: AuthenticationService, private snackBar: MatSnackBar) { }

  submit(user: AppUser) {
    this.authService.registerUser(user)
      .then(() => {
        this.snackBar.open("Usuario creado", "Cerrar", {
          duration: 2000
        });
      });

  }
}
