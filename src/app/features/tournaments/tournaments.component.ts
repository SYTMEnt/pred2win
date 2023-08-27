import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { AuthStoreService } from '../../store/auth/auth-store.service';
import { TournamentStoreService } from '../../store/tournaments/tournament-store.service';
import { TournamentStatus } from './services/tournaments.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

    filters = ['all', 'live', 'upcoming', 'recent'];

    constructor(private tournamentStoreService: TournamentStoreService, private authStoreService: AuthStoreService) {}

    tournaments$ = this.tournamentStoreService.tournaments$;
    tournamenntActions$ = this.tournamentStoreService.tournamentsActions$.pipe(
        map((data) => data.processing)
    )

    ngOnInit() {
        this.authStoreService.userProfile$.pipe(
            take(1),
            map(user => user?.memberId)
        ).subscribe((memberId) => this.tournamentStoreService.tournaments({userId: memberId}))
    }

    onFilterSelect(filter: string) {
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


}
