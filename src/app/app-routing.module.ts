import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "tournaments",
    loadChildren: () => import('./features/tournaments/tournaments.module').then(m => m.TournamentsModule)
  },
  {
    path: "profile",
    loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "matches",
    loadChildren: () => import('./features/matches/matches.module').then(m => m.MatchesModule)
  },
  {
    path: "polls",
    loadChildren: () => import('./features/polls/polls.module').then(m => m.PollsModule)
  },
  {
    path: "leaderboard",
    loadChildren: () => import('./features/leaderboard/leaderboard.module').then(m => m.LeaderboardModule)
  },
  {
    path: "awards",
    loadChildren: () => import('./features/awards/awards.module').then(m => m.AwardsModule)
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
