import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PredictionsRouterModule } from "./predictions-routing.module";
import { PredictionsComponent } from "./predictions.component";
import { PredictionsMaterialModule } from "./predictions-material.module";
import { PredictionTransactionComponent } from "./components/prediction-transaction/prediction-transaction.component";

@NgModule({
    declarations: [
        PredictionsComponent,
        PredictionTransactionComponent
    ],
    imports: [
        CommonModule,
        PredictionsRouterModule,
        PredictionsMaterialModule,
    ],
    providers: []
})
export class PredictionsModule {

}