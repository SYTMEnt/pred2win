import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { map, take } from "rxjs/operators";
import { PollStoreService } from "../../store/polls/poll-store.service";
import { AuthStoreService } from "../../store/auth/auth-store.service";
import { Poll } from "../../store/polls/types";
import { User } from "../../store/auth/types";
import { combineLatest } from "rxjs";

@Component({
    selector: 'polls',
    templateUrl: 'polls.component.html',
    styleUrls: ['polls.component.scss']
})
export class PollsComponent {

    matchId: string = '';

    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private pollStoreService: PollStoreService, 
        private location: Location,
        private authStoreService: AuthStoreService
    ) {
        combineLatest([
            this.route.paramMap,
            this.authStoreService.userProfile$]
        ).pipe(
            take(1),
        ).subscribe(([param, user]) => {
            if(!param.has("matchId")) {
                this.router.navigate(['tournaments'])
            } else {
                this.matchId = param.get("matchId") as string;
                const userId = user?.memberId as string;
                this.pollStoreService.polls(this.matchId, userId);
            }
        })
    }

    polls$ = this.pollStoreService.polls$.pipe(
        map(polls => polls ? Object.values(polls) : [])
    );
    pollsProcessing$ = this.pollStoreService.pollsActions$.pipe(
        map(data => data.processing)
    );
    
    // TODO - Create type for data
    onPollSubmit(data: {poll: Poll, selectedOption: string, type: 'retract' | 'submit'}) {
        this.authStoreService.userProfile$.pipe(
            map(user => (user as User).memberId),
            take(1)
        ).subscribe((userId) => {
            this.pollStoreService.pollSubmit({
                userId,
                pollId: data.poll.pollId,
                pollOption: data.selectedOption,
                predictionType: data.type,
                valueString: ''
            })
        })
    }

    onClose() {
        this.location.back()
    }
}