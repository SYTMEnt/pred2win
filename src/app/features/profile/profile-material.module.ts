import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatExpansionModule
    ]
})
export class ProfileMaterialModule {

}