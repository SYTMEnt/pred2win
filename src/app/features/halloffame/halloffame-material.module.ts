import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
    imports: [
        MatButtonModule,
        MatProgressSpinnerModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatProgressSpinnerModule,
        MatIconModule
    ]
})
export class HallOfFameMaterialModule {

}