import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LeaderboardRouterModule } from "./leaderboard-routing.module";
import { LeaderboardComponent } from "./leaderboard.component";


@NgModule({
    declarations: [
        LeaderboardComponent
    ],
    imports: [
        CommonModule,
        LeaderboardRouterModule
    ]
})
export class LeaderboardModule {}