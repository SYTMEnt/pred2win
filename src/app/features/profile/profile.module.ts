import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfileMaterialModule } from "./profile-material.module";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";
import { AccountComponent } from './account/account.component';
import { PasswordComponent } from './password/password.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from "./about-us/about-us.component";
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ProfileComponent,
        AccountComponent,
        PasswordComponent,
        ContactComponent,
        AboutUsComponent,
        TermsConditionsComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ProfileMaterialModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class ProfileModule {

}