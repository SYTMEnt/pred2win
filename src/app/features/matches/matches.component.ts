import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { MatchesStoreService } from '../../store/matches/matches-store.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {
    filters = ['all', 'scheduled', 'allocated', 'ongoing', 'completed'];
    tournamentId = '';

    constructor(private route: ActivatedRoute, private router: Router, private matchStoreService: MatchesStoreService) {
        this.route.paramMap.pipe(
            take(1),
        ).subscribe(param => {
            if(!param.has("tournamentId")) {
                this.router.navigate(['tournaments'])
            } else {
                this.tournamentId = param.get("tournamentId") as string;
                this.matchStoreService.matches(this.tournamentId);
            }
        })
    }

    matches$ = this.matchStoreService.matches$;
    matchesProcessing$ = this.matchStoreService.matchesActions$.pipe(
        map((data) => data.processing)
    )

    onFilterSelect(matchStatus: string) {
        this.matchStoreService.matches(this.tournamentId, matchStatus)
    }
}
