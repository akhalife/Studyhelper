import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // Match at least one uppercase letter,
  // at least one lowercase letter,
  // at least one digit
  // and includes 12 or more symbols
  // and special characters:
  passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}$';
  checkEmail = '';
  public validationResult: any;

  isLoading = false;

  constructor(
    public authService: AuthService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit(): void {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService
      .createUser(form.value.email, form.value.password)
      .subscribe(() => {
        this.isLoading = false;
        this._snackBar.open(this.authService.message, 'Dismiss');
      });
  }

  openLogin() {
    this.dialogRef.close(SignupComponent);
    this.dialog.open(LoginComponent);
  }

}
