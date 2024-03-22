import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '../../services/tournaments.service';
import { TournamentDetails } from 'src/app/store/tournaments/types';
import { timer } from 'rxjs';

@Component({
  selector: 'app-tournament-trivia',
  templateUrl: './tournament-trivia.component.html',
  styleUrls: ['./tournament-trivia.component.scss']
})
export class TournamentTriviaComponent implements OnInit {

  @Input() currentNavLink: string| undefined;
  triviaItems: { key: string; value: string }[] = [];
  filters = ['tournaments', 'trivia', 'history', 'archive'];
  loading = false; 

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService,
    ) { }

    ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        const tournamentId = params.get('tournamentId'); 
        if (tournamentId) {
          this.fetchTriviaData(tournamentId);
        }
      });
    }
    


  private fetchTriviaData(tournamentId: string): void {
    this.loading = true;
    this.tournamentService.getTournamentDetails(tournamentId).subscribe({
        next: (data: TournamentDetails) => {
          if (data && data.tournamentTrivia) {

            this.triviaItems = data.tournamentTrivia;
            this.currentNavLink = 'trivia'; 
          }
        },
        error: (error) => {
          console.error('Error fetching tournament details:', error);
        },
        complete: () => {
          this.loading = false; 
        }
      });
}

}
