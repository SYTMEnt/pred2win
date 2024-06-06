import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/store/auth/types";

@Injectable()
export class AccountService {

    constructor( private httpClient: HttpClient) {}

    updateAccount(user: Partial<User>) {
        return this.httpClient.patch('/user', user)
    }
}