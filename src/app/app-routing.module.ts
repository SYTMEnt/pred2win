import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './features/forum/forum.component';
import { LeaderboardComponent } from './features/leaderboard/leaderboard.component';

const routes: Routes = [
  {
    path: "tournaments",
    loadChildren: () => import('./features/tournaments/tournaments.module').then(m => m.TournamentsModule)
  },
  {
    path: "leaderboard",
    loadChildren: () => import('./features/leaderboard/leaderboard.module').then(m => m.LeaderboardModule)
  },
  {
    path: "forum",
    loadChildren: () => import('./features/forum/forum.module').then(m => m.ForumModule)
  },
  {
    path: "profile",
    loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
