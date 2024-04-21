import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserstatsComponent } from './userstats.component';

const routes: Routes = [
  {
    path: "",
    component: UserstatsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserstatsRouterModule {}