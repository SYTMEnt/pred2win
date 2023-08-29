import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ForumRouterModule } from "./forum-routing.module";
import { ForumComponent } from "./forum.component";

@NgModule({
    declarations: [ForumComponent],
    imports: [
        CommonModule,
        ForumRouterModule
    ]
})
export class ForumModule {

}