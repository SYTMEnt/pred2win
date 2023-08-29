import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AuthMaterialModule } from "./auth-material.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AuthStoreModule } from "../../store/auth/auth-store.module";

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