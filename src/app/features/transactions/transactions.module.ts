import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TransactionsRouterModule } from "./transactions-routing.module";
import { TransactionsComponent } from "./transactions.component";
import { TransactionsMaterialModule } from "./transactions-material.module";


@NgModule({
    declarations: [
        TransactionsComponent,
    ],
    imports: [
        CommonModule,
        TransactionsRouterModule,
        TransactionsMaterialModule,
    ],
    providers: []
})
export class TransactionsModule {

}