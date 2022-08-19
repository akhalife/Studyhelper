import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SignupComponent } from '../signup/signup.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // Match at least one uppercase letter,
  // at least one lowercase letter,
  // at least one digit
  // and includes 12 or more symbols
  // and special characters:
  passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$';

  isLoading = false;

  constructor(
    public authService: AuthService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit(): void {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService
      .login(form.value.email, form.value.password)
      .subscribe(() => {
        this.isLoading = false;
        this._router.navigate(['/']);
        this._snackBar.open(this.authService.loginMessage, 'Dismiss');
      });
  }

  openSignup() {
    this.dialogRef.close(LoginComponent);
    this.dialog.open(SignupComponent);
  }
}
