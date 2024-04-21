import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UserstatService } from './services/userstatservices';

@Component({
  selector: 'app-userstats',
  templateUrl: './userstats.component.html',
  styleUrls: ['./userstats.component.scss']
})
export class UserstatsComponent implements OnDestroy {
    tournamentId = 'focomeeuro24';
    userStats: any;
    loading = false;
    error: string | undefined;
    userId: string | null = null;
    private destroy$: Subject<void> = new Subject();

    constructor(
        private userstatService: UserstatService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.route.params.pipe(
            map(params => params['userId']),
            takeUntil(this.destroy$)
        ).subscribe(userId => {
            this.userId = userId;
            if (userId) {
                this.fetchUserStats(userId);
            }
        });
    }
      
    fetchUserStats(userId: string) {
        this.loading = true;
        this.error = undefined;
      
        this.userstatService.userstats(userId, this.tournamentId)
            .subscribe(
                (userStats) => {
                    this.userStats = userStats;
                },
                (error) => {
                    this.error = error;
                },
                () => {
                    this.loading = false;
                }
            );
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }        

    onClose() {
        this.location.back();
    }
}
