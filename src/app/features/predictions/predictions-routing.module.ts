import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredictionsComponent } from './predictions.component';

const routes: Routes = [
  {
    path: "",
    component: PredictionsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictionsRouterModule {

}