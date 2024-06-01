import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RulesComponent } from './rules/rules.component';
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
        path: "about-us",
        component: AboutUsComponent
      },
      {
        path: "rules",
        component: RulesComponent
      },
      {
        path: "transactions",
        loadChildren: () => import('./../transactions/transactions.module').then(m => m.TransactionsModule)
      },
      {
        path: "predictions",
        loadChildren: () => import('./../predictions/predictions.module').then(m => m.PredictionsModule)
      },
      {
        path: "legal",
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
