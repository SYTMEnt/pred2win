import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, Validators } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { AuthStoreService } from '../../../../store/auth/auth-store.service';
import { Signup } from '../../../../store/auth/types';
import { passwordValidator, passwordMatchValidator } from '../../../../shared/services/password-validator.service'
import { EMPTY, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
    form = this.fb.group({
        displayName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16), passwordValidator]],
        confirmPassword: ['', [Validators.required]]
    }, { validators: passwordMatchValidator('password', 'confirmPassword') })
    hidePassword = true;
    hideConfirmPassword = true;

    isAuthLoading$ = this.authStoreService.userProfileActions$.pipe(
        map(data => data.processing)
    )

    constructor(private fb: FormBuilder, private authStoreService: AuthStoreService, private authService: AuthService) {
        this.form.get('displayName')?.valueChanges.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            switchMap(value => {
                if(value) {
                    return this.authService.checkDisplayName(value)
                } else {
                    return EMPTY
                }
            })
          ).subscribe(data => {
            const displayNameControl = this.form.get('displayName');
            if (data.userNameExist) {
              displayNameControl?.setErrors({ displayNameTaken: true });
            } else {
              displayNameControl?.setErrors(null);
            }
          });
    }

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
            } else if(errors['displayNameTaken']) {
                return 'This username is already taken.'
            }
        }
        return ''
    }

}
