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
import { RulesComponent } from "./rules/rules.component";
import { DisclaimerComponent } from "./disclaimer/disclaimer.component";
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [
        ProfileComponent,
        AccountComponent,
        PasswordComponent,
        ContactComponent,
        AboutUsComponent,
        RulesComponent,
        DisclaimerComponent,
        TermsConditionsComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ProfileMaterialModule,
        RouterModule,
        ReactiveFormsModule,
        MatExpansionModule
    ]
})
export class ProfileModule {

}