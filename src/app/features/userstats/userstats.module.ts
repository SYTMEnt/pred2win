import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserstatsRouterModule } from "./userstats-routing.module";
import { UserstatsComponent } from "./userstats.component";
import { NavTopComponent } from "../../shared/components/nav-top/nav-top.component";
import { UserstatsMaterialModule } from "./userstats-material.module";

@NgModule({
    declarations: [
        UserstatsComponent
    ],
    imports: [
        CommonModule,
        UserstatsRouterModule,
        UserstatsMaterialModule,
        NavTopComponent
    ],
    exports: [
        UserstatsComponent 
      ],
    providers: []
})
export class UserstatsModule {

}