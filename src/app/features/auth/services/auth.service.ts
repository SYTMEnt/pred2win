import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login, Signup, User, Password } from "../../../store/auth/types";

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

    password(user: Password): Observable<User> {
        return this.http.post<User>(`/user/changePassword`, user)
    }

    checkDisplayName(displayName: string): Observable<{userNameExist: boolean, message: string}> {
        return this.http.get<{userNameExist: boolean, message: string}>('/checkDisplayName', {params: {displayName}})
    }
}