import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Subject, take, takeUntil, tap } from 'rxjs';
import { User } from '../../store/auth/types';
import { AuthStoreService } from '../../store/auth/auth-store.service';
import { TournamentStoreService } from '../../store/tournaments/tournament-store.service';
import { TournamentJoinParams, TournamentStatus } from './services/tournaments.service';


@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit, OnDestroy {
    showTutorialVideo = false
    loggedInUser!: User;
    filters = ['tournaments', 'trivia', 'history'];
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
            userId: this.loggedInUser.memberId,
            league: "prediction" // TODO: Get rid of this hardcoding using real business logic.
        }
        this.tournamentStoreService.join(params)
    }

    continue(tournamentId: string): void {
        this.route.navigate(['matches', {tournamentId}])
    }

    onShowLeaderboard(tournamentId: string) {
        this.route.navigate(['leaderboard', {tournamentId}])
    }
 
    onFilterSelect(filter: string): void {
        this.authStoreService.userProfile$.pipe(
          take(1),
          map(user => user?.memberId)
        ).subscribe((memberId) => {
          let tournamentStatus;
          if (filter === 'tournaments') {
            tournamentStatus = null;
            this.tournamentStoreService.tournaments({ userId: memberId });
          } else if (filter === 'trivia') {
            this.route.navigate(['trivia', 'Euro Cup']);
          } else if (filter === 'history') {
            this.route.navigate(['history', 'Euro Cup']);
          } 
        });
      }
  
      
    ngOnDestroy(): void {
        this.tournamentStoreService.reset()
        this.destroy$.next(true);
        this.destroy$.complete()
    }

}
