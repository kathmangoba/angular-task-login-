import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public router = inject(Router);

  constructor() {}

  email: string = '';
  pwd: string = '';

  submit() {
    if (this.email == 'mangobakath@gmail.com' && this.pwd == 'test123') {
      console.log('Successfully logged in');
      this.router.navigate(['dashboard']);
    } else {
      window.alert('Incorrect Email and Password');
    }
  }
}
