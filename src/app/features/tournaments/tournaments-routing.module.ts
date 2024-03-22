import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentsComponent } from './tournaments.component';
import { TournamentTriviaComponent } from './components/tournament-trivia/tournament-trivia.component';
import { TournamentHistoryComponent } from './components/tournament-history/tournament-history.component';


const routes: Routes = [
  {
    path: "",
    component: TournamentsComponent,
  },
{ path: "trivia/:tournamentId", component: TournamentTriviaComponent },
{ path: "history/:tournamentId", component: TournamentHistoryComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TournamentsRoutingModule { }
