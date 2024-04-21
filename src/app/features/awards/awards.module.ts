import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AwardsRouterModule } from "./awards-routing.module";
import { AwardsComponent } from "./awards.component";
import { NavTopComponent } from "../../shared/components/nav-top/nav-top.component";
import { AwardsMaterialModule } from "./awards-material.module";

@NgModule({
    declarations: [
        AwardsComponent
    ],
    imports: [
        CommonModule,
        AwardsRouterModule,
        AwardsMaterialModule,
        NavTopComponent
    ],
    providers: []
})
export class AwardsModule {

}