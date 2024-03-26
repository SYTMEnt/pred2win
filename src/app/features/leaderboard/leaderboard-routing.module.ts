import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard.component';

const routes: Routes = [
  {
    path: '',
    component: LeaderboardComponent,
    children :[
      {
        path: "user-stats/:userId", 
        loadChildren: () => import('./../userstats/userstats.module').then(m => m.UserstatsModule) // Load the UserstatsModule
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardRoutingModule { }
