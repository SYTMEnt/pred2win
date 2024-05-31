import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ForumComponent } from "./forum.component";
import { ForumRoutingModule } from "./forum-routing.module";
import { ForumMaterialModule } from "./forum-material.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ForumComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        ForumRoutingModule,
        ForumMaterialModule
    ]
})
export class ForumModule {

}