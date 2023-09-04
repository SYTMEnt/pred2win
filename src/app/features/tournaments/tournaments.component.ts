import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subject, take, takeUntil, tap } from 'rxjs';
import { User } from 'src/app/store/auth/types';
import { AuthStoreService } from '../../store/auth/auth-store.service';
import { TournamentStoreService } from '../../store/tournaments/tournament-store.service';
import { TournamentJoinParams, TournamentStatus } from './services/tournaments.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit, OnDestroy {

    loggedInUser!: User;
    filters = ['all', 'live', 'upcoming', 'recent'];
    destroy$ = new Subject<boolean>();

    constructor(private tournamentStoreService: TournamentStoreService, 
                private authStoreService: AuthStoreService,
                private route: Router) {}

    tournaments$ = this.tournamentStoreService.tournaments$;
    tournamenntProcessing$ = this.tournamentStoreService.tournamentsActions$.pipe(
        map((data) => data.processing)
    )

    ngOnInit() {
        this.authStoreService.userProfile$.pipe(
            take(1),
            tap(user => this.loggedInUser = user as User),
            map(user => user?.memberId)
        ).subscribe((memberId) => this.tournamentStoreService.tournaments({userId: memberId}))

        this.tournamentStoreService.joinTournament$.pipe(
            takeUntil(this.destroy$)
        ).subscribe((data) => {
            if(data) {
                this.route.navigate(['matches', {tournamentId: data.tournamentId}])
            }
        })
    }

    join(tournamentId: string): void {
        const params: TournamentJoinParams = {
            tournamentId,
            displayName: this.loggedInUser.displayName,
            userId: this.loggedInUser.memberId
        }
        this.tournamentStoreService.join(params)
    }

    continue(tournamentId: string): void {
        this.route.navigate(['matches', {tournamentId}])
    }

    onFilterSelect(filter: string): void {
        this.authStoreService.userProfile$.pipe(
            take(1),
            map(user => user?.memberId)
        ).subscribe((memberId) => {
            let tournamentStatus;
            if(filter === 'all') {
                tournamentStatus = null
                return this.tournamentStoreService.tournaments({userId: memberId})
            } else if(filter === 'live') {
                tournamentStatus = TournamentStatus.ONGOING
            } else if(filter === 'upcoming') {
                tournamentStatus = TournamentStatus.SCHEDULED
            } else if(filter === 'recent') {
                tournamentStatus = TournamentStatus.ARCHIVED
            }
            this.tournamentStoreService.tournaments({userId: memberId, tournamentStatus})
        })
    }

    ngOnDestroy(): void {
        this.tournamentStoreService.reset()
        this.destroy$.next(true);
        this.destroy$.complete()
    }

}
