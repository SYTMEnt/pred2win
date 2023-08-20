import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface User { 
    displayName: string,
    memberId: string
}

export interface Auth {
    email: string,
    displayName: string,
    password: string
}

const BASE_URL = "https://dev.pred2win.com"

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {}

    signup(user: Auth): Observable<User & {token: string}> {
        return this.http.post<User & {token: string}>(`${BASE_URL}/user`, user, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
    }

    login(user: Pick<Auth, 'email' | 'password'>): Observable<User & {token: string}> {
        return this.http.post<User & {token: string}>(`${BASE_URL}/login`, user, {
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
    } 

    logout(): Observable<boolean> {
        return of(true)
    }
}