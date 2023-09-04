import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { AuthStoreService } from '../../../../store/auth/auth-store.service';
import { Signup } from '../../../../store/auth/types';
import { passwordValidator } from '../../../../shared/services/password-validator.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    form = this.fb.group({
        displayName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), passwordValidator]]
    })
    hidePassword = true;

    isAuthLoading$ = this.authStoreService.userProfileActions$.pipe(
        map(data => data.processing)
    )

  constructor(private fb: FormBuilder, private authStoreService: AuthStoreService) {}

    onSubmit() {
        if(this.form.valid) {
        this.authStoreService.signup(this.form.value as Signup)
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
            } else if (formField === 'password' && errors['invalidPassword']) {
                return 'A lower case, an upper case, a number and any alphanumeric char from [!,@,#,$] is required.'
            } else if(errors['email']) {
                return 'The email is invalid.'
            }
        }
        return ''
    }
  
}
