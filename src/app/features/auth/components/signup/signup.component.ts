import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), this.passwordValidator]]
  })
  hidePassword = true;
  
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.getFormControlErrors('email'))
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
