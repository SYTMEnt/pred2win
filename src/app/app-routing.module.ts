import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { LoginComponent } from './features/auth/components/login/login.component';
import { SignupComponent } from './features/auth/components/signup/signup.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: "auth",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "signup",
        component: SignupComponent
      }
    ]
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "auth/signup",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
