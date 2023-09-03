import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatchesMaterialModule } from "./matches-material.module";
import { MatchesRouterModule } from "./matches-routing.module";
import { MatchesComponent } from "./matches.component";
import { MatchComponent } from './components/match/match.component';

@NgModule({
    declarations: [
        MatchesComponent,
        MatchComponent
    ],
    imports: [
        CommonModule,
        MatchesRouterModule,
        MatchesMaterialModule
    ]
})
export class MatchesModule {

}