import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Store, StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { LeaderboardRoutingModule } from "./leaderboard-routing.module";
import { LeaderboardUserComponent } from "./components/leaderboard-user/leaderboard-user.component";
import { LeaderboardComponent } from "./leaderboard.component";
import { LeaderboardStoreService } from "src/app/store/leaderboard/leaderboard-store.service";
import { LeaderboardEffects } from "../../store/leaderboard/effects";
import * as leaderboardReducer from "../../store/leaderboard/reducer";
import { LeaderboardMaterialModule } from "./leaderboard-material.module";
import { UserstatsModule } from "../userstats/userstats.module";


@NgModule({
    declarations: [
        LeaderboardComponent,
        LeaderboardUserComponent,
    ],
    imports: [
        CommonModule,
        LeaderboardRoutingModule,
        LeaderboardMaterialModule,
        StoreModule.forFeature('leaderboard', leaderboardReducer ),
        EffectsModule.forFeature(LeaderboardEffects),
        UserstatsModule
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