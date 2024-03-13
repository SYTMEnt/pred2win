import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { Store, StoreModule } from "@ngrx/store";
import { LeaderboardStoreService } from "src/app/store/leaderboard/leaderboard-store.service";
import { LeaderboardEffects } from "../../store/leaderboard/effects";
import * as leaderboardReducer from "../../store/leaderboard/reducer";
import { LeaderboardUserComponent } from "./components/leaderboard-user/leaderboard-user.component";
import { LeaderboardRoutingModule } from "./leaderboard-routing.module";
import { LeaderboardComponent } from "./leaderboard.component";

@NgModule({
    declarations: [
        LeaderboardComponent,
        LeaderboardUserComponent
    ],
    imports: [
        CommonModule,
        LeaderboardRoutingModule,
        StoreModule.forFeature('leaderboard', leaderboardReducer ),
        EffectsModule.forFeature(LeaderboardEffects),
    ],
    providers: [
        {
            provide: LeaderboardStoreService,
            deps: [Store]
        }
    ]
})
export class LeaderboardModule {

}