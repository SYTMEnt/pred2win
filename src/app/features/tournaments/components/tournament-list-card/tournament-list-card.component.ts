import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tournament } from '../../../../store/tournaments/types';

@Component({
  selector: 'app-tournament-list-card',
  templateUrl: './tournament-list-card.component.html',
  styleUrls: ['./tournament-list-card.component.scss']
})
export class TournamentListCardComponent {

  @Input() data!: Tournament
  @Output() join = new EventEmitter<string>();
  @Output() continue = new EventEmitter<string>()
  @Output() showLeaderboard = new EventEmitter<string>()
  @Output() showTPoll = new EventEmitter<string>()
  @Output() showOPoll = new EventEmitter<string>()
  @Output() showAwards = new EventEmitter<string>()

  onClick(): void {
    if(this.data.joined) {
      this.continue.emit(this.data.tournamentId)
    } else {
      this.join.emit(this.data.tournamentId)
    }
  }

}
