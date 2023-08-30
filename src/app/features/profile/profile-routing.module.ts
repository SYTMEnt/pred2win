import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
    children: [
      {
        path: "account",
        component: AccountComponent
      },
      {
        path: "password",
        component: PasswordComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "terms-conditions",
        component: TermsConditionsComponent
      },
      {
        path: "",
        redirectTo: "account",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
