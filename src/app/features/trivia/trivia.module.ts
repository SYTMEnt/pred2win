import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TriviaRouterModule } from "./trivia-routing.module";
import { TriviaComponent } from "./trivia.component";
import { NavTopComponent } from "../../shared/components/nav-top/nav-top.component";
import { TriviaMaterialModule } from "./trivia-material.module";

@NgModule({
    declarations: [
        TriviaComponent
    ],
    imports: [
        CommonModule,
        TriviaRouterModule,
        TriviaMaterialModule,
        NavTopComponent
    ],
    exports: [
        TriviaComponent 
      ],
    providers: []
})
export class TriviaModule {

}