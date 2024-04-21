import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Store, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { TournamentsRoutingModule } from "./tournaments-routing.module";
import { TournamentListCardComponent } from './components/tournament-list-card/tournament-list-card.component';
import { TournamentsComponent } from "./tournaments.component";
import { TournamentsMaterialModule } from "./tournaments-material.module";
import { TournamentsEffects } from "../../store/tournaments/effects";
import { reducer as tournamentReducer} from "../../store/tournaments/reducer"
import { TournamentStoreService } from "../../store/tournaments/tournament-store.service";
import { NavTopComponent } from "../../shared/components/nav-top/nav-top.component";

@NgModule({
    declarations: [    
        TournamentsComponent,
        TournamentListCardComponent,
    ],
    imports: [
        CommonModule,
        TournamentsRoutingModule,
        TournamentsMaterialModule,
        NavTopComponent,
        StoreModule.forFeature('tournaments', tournamentReducer ),
        EffectsModule.forFeature(TournamentsEffects)
    ],
    providers: [
        {
            provide: TournamentStoreService,
            deps: [Store]
        }
    ]
})
export class TournamentsModule {

}