import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
    imports: [
        MatIconModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatIconModule,
        MatProgressSpinnerModule
    ]
})
export class MatchesMaterialModule {

}