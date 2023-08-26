import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tournament-list-card',
  templateUrl: './tournament-list-card.component.html',
  styleUrls: ['./tournament-list-card.component.scss']
})
export class TournamentListCardComponent {

  @Input() data!: {
    tournamentLogo: string, 
    tournamentName: string, 
    tournamentCategory: string, 
    tournamentYear: string,
    tournamentLocation: string[],
    tournamentMembers: number
  }

}
