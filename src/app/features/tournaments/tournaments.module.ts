import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TournamentsRoutingModule } from "./tournaments-routing.module";
import { TournamentListCardComponent } from './components/tournament-list-card/tournament-list-card.component';
import { TournamentsComponent } from "./tournaments.component";
import { TournamentsMaterialModule } from "./tournaments-material.module";


@NgModule({
    declarations: [    
        TournamentsComponent,
        TournamentListCardComponent
    ],
    imports: [
        CommonModule,
        TournamentsRoutingModule,
        TournamentsMaterialModule
    ]
})
export class TournamentsModule {

}