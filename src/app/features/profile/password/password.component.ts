import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from '../../../shared/services/password-validator.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

    constructor(private fb: FormBuilder) {}

    form = this.fb.group({
        oldPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), passwordValidator]],
        newPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), passwordValidator]],
        confirmPassword: ['', [Validators.required, this.passwordMismatch.bind(this)]]
    })

    onSubmit() {
        if(this.form.valid) {
            alert("Password change process")
        }
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
          } else if (errors['invalidPassword']) {
            return 'A lower case, an upper case, a number and any alphanumeric char from [!,@,#,$] is required.'
          } else if (errors['passwordMismatch']) {
            return 'Password does not match'
          } else if(errors['email']) {
            return 'The email is invalid.'
          }
        }
        return ''
    } 

    passwordMismatch(control: AbstractControl) {
        if (control.value !== this.form?.value.newPassword) {
            return { passwordMismatch: true };
        }
        return null;
    }

}
