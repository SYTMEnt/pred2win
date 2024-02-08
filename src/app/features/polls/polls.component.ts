import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { map, take } from "rxjs/operators";
import { PollStoreService } from "../../store/polls/poll-store.service";

@Component({
    selector: 'polls',
    templateUrl: 'polls.component.html',
    styleUrls: ['polls.component.scss']
})
export class PollsComponent {

    matchId: string = '';

    constructor(private route: ActivatedRoute, private router: Router, private pollStoreService: PollStoreService, private location: Location) {
        this.route.paramMap.pipe(
            take(1),
        ).subscribe(param => {
            if(!param.has("matchId")) {
                this.router.navigate(['tournaments'])
            } else {
                this.matchId = param.get("matchId") as string;
                this.pollStoreService.polls(this.matchId);
            }
        })
    }

    polls$ = this.pollStoreService.polls$.pipe(
        map(polls => polls ? Object.values(polls) : [])
    );
    pollsProcessing$ = this.pollStoreService.pollsActions$.pipe(
        map(data => data.processing)
    )

    onClose() {
        this.location.back()
    }
}