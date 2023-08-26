import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Login, Signup, User } from "../../../store/auth/types";
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {}

    signup(user: Signup): Observable<User> {
        return this.http.post<User>(`/user`, user)
    }

    login(user: Login): Observable<User> {
        return this.http.post<User>(`/login`, user)
    } 

    logout(): Observable<any> {
        return this.http.get(`/logout`)
    }

    user(): Observable<User> {
        return this.http.get<User>(`/user`)
    }


}