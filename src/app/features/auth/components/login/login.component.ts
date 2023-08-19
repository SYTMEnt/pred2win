import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  hidePassword = true;

  constructor(private fb: FormBuilder, private router: Router) {}

  onLogin() {
    localStorage.setItem("isLoggedIn", 'true')
    this.router.navigate(['/app'])
  }

  passwordValidator(control: AbstractControl) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#])[A-Za-z\d@$!#]+$/;
    if (control.value && !pattern.test(control.value)) {
      return { invalidPassword: true };
    }
    return null;
  }

  getFormControlErrors(formField: string): string {
    const errors = this.form.get(formField)?.errors;
    if(errors) {
      if(errors['required']) {
        return 'This field is required.'
      } else if (errors['minlength']) {
        const minLength = errors['minlength']?.requiredLength;
        return `Minimum length is ${minLength} characters.`
      } else if (errors['maxlength']) {
        const maxLength = errors['maxlength']?.requiredLength;
        return `Maximum length is ${maxLength} characters.`
      } else if (formField === 'password' && errors['invalidPassword']) {
        return 'A lower case, an upper case, a number and any alphanumeric char from [!,@,#,$] is required.'
      } else if(errors['email']) {
        return 'The email is invalid.'
      }
    }
    return ''
  }
}
