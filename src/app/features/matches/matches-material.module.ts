import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ]
})
export class MatchesMaterialModule {

}