import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HistoryRouterModule } from "./history-routing.module";
import { HistoryComponent } from "./history.component";
import { NavTopComponent } from "../../shared/components/nav-top/nav-top.component";
import { HistoryMaterialModule } from "./history-material.module";

@NgModule({
    declarations: [
        HistoryComponent
    ],
    imports: [
        CommonModule,
        HistoryRouterModule,
        HistoryMaterialModule,
        NavTopComponent
    ],
    exports: [
        HistoryComponent 
      ],
    providers: []
})
export class HistoryModule {

}