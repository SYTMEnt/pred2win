import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Login, Signup, User } from "../../../store/auth/types";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {}

    signup(user: Signup): Observable<User> {
        return this.http.post<User>('/user', user)
    }

    login(user: Login): Observable<User> {
        return this.http.post<User>('/login', user)
    } 

    logout(): Observable<boolean> {
        return of(true)
    }
}