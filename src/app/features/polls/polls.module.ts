import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Store, StoreModule } from "@ngrx/store";
import { PollsRouterModule } from "./polls-routing.module";
import { PollsComponent } from "./polls.component"; 
import { reducer as pollsReducer} from "../../store/polls/reducer"
import { EffectsModule } from "@ngrx/effects";
import { PollsEffects } from "src/app/store/polls/effects";
import { PollStoreService } from "src/app/store/polls/poll-store.service";

@NgModule({
    declarations: [
        PollsComponent
    ],
    imports: [
        CommonModule,
        PollsRouterModule,
        StoreModule.forFeature('polls', pollsReducer ),
        EffectsModule.forFeature(PollsEffects),
    ],
    providers: [
        {
            provide: PollStoreService,
            deps: [Store]
        }
    ]
})
export class PollsModule {

}