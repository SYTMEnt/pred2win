import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatchesMaterialModule } from "./matches-material.module";
import { MatchesRouterModule } from "./matches-routing.module";
import { MatchesComponent } from "./matches.component";
import { MatchComponent } from './components/match/match.component';
import { Store, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducer as matchesReducer } from "../../store/matches/reducer";
import { MatchesEffects } from "../../store/matches/effects";
import { MatchesStoreService } from "../../store/matches/matches-store.service";
import { NavTopComponent } from "../../shared/components/nav-top/nav-top.component";

@NgModule({
    declarations: [
        MatchesComponent,
        MatchComponent
    ],
    imports: [
        CommonModule,
        MatchesRouterModule,
        MatchesMaterialModule,
        StoreModule.forFeature('matches', matchesReducer ),
        EffectsModule.forFeature(MatchesEffects),
        NavTopComponent
    ],
    providers: [
        {
            provide: MatchesStoreService,
            deps: [Store]
        }
    ]
})
export class MatchesModule {

}