import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject, Subscription } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { Leaderboard } from 'src/app/store/leaderboard/types';
import { LeaderboardService } from "./services/leaderboard.service";
//import { LeaderboardStoreService } from '../../store/leaderboard/leaderboard-store.service';

@Component({
    selector: 'app-leaderboard',
    templateUrl: 'leaderboard.component.html',
    styleUrls: ['leaderboard.component.scss']
})
export class LeaderboardComponent implements OnDestroy {

    tournamentId = '';

    leaderboardData: Leaderboard | undefined;
    subscription: Subscription | undefined;

    // commenting out part which needs store

//    leaderboard$ = this.leaderboardStoreService.leaderboard$;
//    leaderboardProcessing$ = this.leaderboardStoreService.leaderboardActions$.pipe(
//      map((data) => data.processing)
//   );
//    destroy$ = new Subject<void>();

    constructor(
        private route: ActivatedRoute, 
        private leaderboardService: LeaderboardService,
//        private leaderboardStoreService: LeaderboardStoreService,
        private location: Location,
    ) {}

    ngOnInit(): void {
//        this.route.paramMap.pipe(
//            takeUntil(this.destroy$)
        this.subscription = this.route.paramMap.subscribe(param => {
//        ).subscribe(param => {
            this.tournamentId = param.get("tournamentId") as string;
            this.fetchLeaderboardData();
//            this.leaderboardStoreService.leaderboard(this.tournamentId);
        });
    }

    fetchLeaderboardData(): void {
        this.leaderboardService.leaderboard(this.tournamentId)
            .subscribe({
                next: (data: Leaderboard) => {
                    this.leaderboardData = data;
                    // Here you can perform any additional operations on the data if needed
                },
                error: (error: any) => {
                    console.error('Error fetching leaderboard data:', error);
                    // Handle error if necessary
                }
            });
    }
    

    ngOnDestroy(): void {

        if (this.subscription) {
            this.subscription.unsubscribe();
        }
//        this.leaderboardStoreService.reset();
//        this.destroy$.next();
//        this.destroy$.complete();
    }

    onClose() {
        this.location.back()
    }
}
