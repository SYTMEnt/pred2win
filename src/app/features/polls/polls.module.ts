import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Store, StoreModule } from "@ngrx/store";
import { PollsRouterModule } from "./polls-routing.module";
import { PollsComponent } from "./polls.component"; 
import { PollMemberComponent } from "./components/poll-member/poll-member.component";
import { reducer as pollsReducer} from "../../store/polls/reducer"
import { EffectsModule } from "@ngrx/effects";
import { PollsEffects } from "src/app/store/polls/effects";
import { PollStoreService } from "src/app/store/polls/poll-store.service";
import { PollsMaterialModule } from "./polls-material.module";
import { PollViewComponent } from "./components/poll-view/poll-view.component";
import { NgVotingComponent } from 'ng-voting'

@NgModule({
    declarations: [
        PollsComponent,
        PollViewComponent, 
        PollMemberComponent,
    ],
    imports: [
        NgVotingComponent,
        CommonModule,
        PollsRouterModule,
        PollsMaterialModule,
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