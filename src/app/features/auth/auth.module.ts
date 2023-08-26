import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { isDevMode, NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AuthStoreModule } from "src/app/store/auth/auth-store.module";

import { AuthMaterialModule } from "./auth-material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        AuthComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuthMaterialModule,
        AuthRoutingModule,
        AuthStoreModule
    ]
})
export class AuthModule {}