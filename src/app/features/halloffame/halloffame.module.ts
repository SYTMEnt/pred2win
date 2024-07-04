import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HallOfFameRouterModule } from "./halloffame-routing.module";
import { HallOfFameComponent } from "./halloffame.component";
import { ArchivedTournamentComponent } from "./components/archivedtour/archivedtour.component";
import { NavTopComponent } from "../../shared/components/nav-top/nav-top.component";
import { HallOfFameMaterialModule } from "./halloffame-material.module";

@NgModule({
    declarations: [
        HallOfFameComponent,
        ArchivedTournamentComponent
    ],
    imports: [
        CommonModule,
        HallOfFameRouterModule,
        HallOfFameMaterialModule,
        NavTopComponent
    ],
    providers: []
})
export class HallOfFameModule {

}