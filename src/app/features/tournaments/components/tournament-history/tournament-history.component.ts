import { Component, Input, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TournamentService } from '../../services/tournaments.service';   
import { TournamentDetails } from 'src/app/store/tournaments/types';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-tournament-history',
  templateUrl: './tournament-history.component.html',
  styleUrls: ['./tournament-history.component.scss'],
  animations: [
    trigger('showChampion', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('1s', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('showRunnersUp', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })), 
      transition(':enter', [
        animate('1s 3s', style({ opacity: 1, transform: 'translateX(0)' })), 
      ]),
    ]),
  ],
})
export class TournamentHistoryComponent implements OnInit {
  @Input() currentNavLink: string | undefined;
  historyItems:{
    year: string;
    winnerName: string;
    winnerCode: string;
    winnerFlag: string;
    runnerupName: string;
    runnerupCode: string;
    runnerupFlag: string;
    manOftheTournament: string;
    highestGoalScorer: string;
  }[]=[];
  loading = false; 
  filters = ['tournaments', 'trivia', 'history', 'archive'];
  currentIndex: number = 0; 
  typingText: string='';
  typingSpeed : number = 100;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tournamentId = params.get('tournamentId'); 
      if (tournamentId) {
        this.fetchHistoryData(tournamentId);
      }
    });
    this.typeText();
  }
 

  private fetchHistoryData(tournamentId: string): void {
    this.loading = true;
    this.tournamentService.getTournamentDetails(tournamentId).subscribe({
        next: (data: TournamentDetails) => {
          if (data && data.tournamentHistory) {
            this.historyItems = data.tournamentHistory;
            this.currentNavLink = 'history'; 
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

  typeText(): void {
    const text = 'became Champion, defeating'; 
    this.currentIndex = 0;
    setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (this.currentIndex < text.length) {
          this.typingText += text[this.currentIndex];
          this.currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, this.typingSpeed);
    }, 500); //Initial pause
  }

}
