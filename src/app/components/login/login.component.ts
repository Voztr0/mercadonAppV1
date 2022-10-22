import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  logIn() {
    const user = this.form.value.user;
    const pass = this.form.value.password;
    if (user == 'admin' && pass == 'admin') {
      this.fakeRedirect();
    } else {
      //show error message
      this.errorMessage();
      this.form.reset();
    }
  }

  errorMessage() {
    this._snackBar.open('Usuario o contraseña invalidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  fakeRedirect() {
    this.loading = true;
    setTimeout(() => {
      //redirect to table detail
      this.router.navigate(['/products']);
    }, 1500);
  }
}
